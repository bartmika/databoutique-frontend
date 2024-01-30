import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faTachometer, faPlus, faTimesCircle, faCheckCircle, faRobot, faGauge, faPencil, faUsers, faIdCard, faAddressBook, faContactCard, faChartPie, faCogs, faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil';

import useLocalStorage from "../../../../Hooks/useLocalStorage";
import { postAssistantCreateAPI } from "../../../../API/Assistant";
import FormErrorBox from "../../../Reusable/FormErrorBox";
import FormInputField from "../../../Reusable/FormInputField";
import FormTextareaField from "../../../Reusable/FormTextareaField";
import FormRadioField from "../../../Reusable/FormRadioField";
import FormMultiSelectFieldForAssistantFiles from "../../../Reusable/FormMultiSelectFieldForAssistantFiles";
import FormSelectField from "../../../Reusable/FormSelectField";
import PageLoadingContent from "../../../Reusable/PageLoadingContent";
import { topAlertMessageState, topAlertStatusState } from "../../../../AppState";
import { OPENAI_COMPLETION_MODEL_WITH_EMPTY_OPTION } from "../../../../Constants/FieldOptions";


function AdminAssistantAdd() {
    ////
    //// Global state.
    ////

    const [topAlertMessage, setTopAlertMessage] = useRecoilState(topAlertMessageState);
    const [topAlertStatus, setTopAlertStatus] = useRecoilState(topAlertStatusState);

    ////
    //// Component states.
    ////

    const [errors, setErrors] = useState({});
    const [isFetching, setFetching] = useState(false);
    const [forceURL, setForceURL] = useState("");
    const [selected, setSelected] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [instructions, setInstructions] = useState("");
    const [model, setModel] = useState("");
    const [assistantFiles, setAssistantFiles] = useState([]);

    ////
    //// Event handling.
    ////

    const onHandleChange = (event) => {
        setSelected(event.target.files[0]);
    };

    const onSubmitClick = (e) => {
        console.log("onSubmitClick: Starting...")
        setFetching(true);
        setErrors({});

        const decamelizedData = {
            name: name,
            description: description,
            instructions: instructions,
            model: model,
            assistant_file_ids: assistantFiles,
        };
        postAssistantCreateAPI(
            decamelizedData,
            onAdminUserAssistantAddSuccess,
            onAdminUserAssistantAddError,
            onAdminUserAssistantAddDone,
            onUnauthorized
        );
        console.log("onSubmitClick: Finished.")
    }

    ////
    //// API.
    ////

    function onAdminUserAssistantAddSuccess(response){
        // For debugging purposes only.
        console.log("onAdminUserAssistantAddSuccess: Starting...");
        console.log(response);

        // Add a temporary banner message in the app and then clear itself after 2 seconds.
        setTopAlertMessage("Assistant created");
        setTopAlertStatus("success");
        setTimeout(() => {
            console.log("onAdminUserAssistantAddSuccess: Delayed for 2 seconds.");
            console.log("onAdminUserAssistantAddSuccess: topAlertMessage, topAlertStatus:", topAlertMessage, topAlertStatus);
            setTopAlertMessage("");
        }, 2000);

        // Redirect the user to the user attachments page.
        setForceURL("/admin/assistant/"+response.id);
    }

    function onAdminUserAssistantAddError(apiErr) {
        console.log("onAdminUserAssistantAddError: Starting...");
        setErrors(apiErr);

        // Add a temporary banner message in the app and then clear itself after 2 seconds.
        setTopAlertMessage("Failed submitting");
        setTopAlertStatus("danger");
        setTimeout(() => {
            console.log("onAdminUserAssistantAddError: Delayed for 2 seconds.");
            console.log("onAdminUserAssistantAddError: topAlertMessage, topAlertStatus:", topAlertMessage, topAlertStatus);
            setTopAlertMessage("");
        }, 2000);

        // The following code will cause the screen to scroll to the top of
        // the page. Please see ``react-scroll`` for more information:
        // https://github.com/fisshy/react-scroll
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    function onAdminUserAssistantAddDone() {
        console.log("onAdminUserAssistantAddDone: Starting...");
        setFetching(false);
    }

    const onUnauthorized = () => {
        setForceURL("/login?unauthorized=true"); // If token expired or user is not logged in, redirect back to login.
    }

    ////
    //// Misc.
    ////

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            window.scrollTo(0, 0);  // Start the page at the top of the page.
        }

        return () => { mounted = false; }
    }, []);

    ////
    //// Component rendering.
    ////

    if (forceURL !== "") {
        return <Navigate to={forceURL}  />
    }

    return (
        <>
            <div className="container">
                <section className="section">
                    {/* Desktop Breadcrumbs */}
                    <nav className="breadcrumb has-background-light p-4 is-hidden-touch" aria-label="breadcrumbs">
                        <ul>
                            <li className=""><Link to="/admin/dashboard" aria-current="page"><FontAwesomeIcon className="fas" icon={faGauge} />&nbsp;Dashboard</Link></li>
                            <li className=""><Link to="/admin/assistants" aria-current="page"><FontAwesomeIcon className="fas" icon={faRobot} />&nbsp;Assistants</Link></li>
                            <li className="is-active"><Link aria-current="page"><FontAwesomeIcon className="fas" icon={faPlus} />&nbsp;New</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Breadcrumbs */}
                    <nav className="breadcrumb has-background-light p-4 is-hidden-desktop" aria-label="breadcrumbs">
                        <ul>
                            <li className=""><Link to={`/admin/assistants`} aria-current="page"><FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Back to Assistants</Link></li>
                        </ul>
                    </nav>

                    {/* Page Name */}
                    <h1 className="name is-2"><FontAwesomeIcon className="fas" icon={faRobot} />&nbsp;Assistant</h1>
                    <h4 className="subname is-4"><FontAwesomeIcon className="fas" icon={faPlus} />&nbsp;New</h4>
                    <hr />

                    {/* Page */}
                    <nav className="box">

                        {/* Name + Options */}
                        <p className="name is-4"><FontAwesomeIcon className="fas" icon={faPlus} />&nbsp;Add Assistant</p>

                        <FormErrorBox errors={errors} />

                        {/* <p className="pb-4 has-text-grey">Please fill out all the required fields before submitting this form.</p> */}

                        {isFetching
                            ?
                            <PageLoadingContent displayMessage={"Submitting..."} />
                            :
                            <>
                                <div className="container">

                                    <FormInputField
                                        label="Name"
                                        name="name"
                                        placeholder="Text input"
                                        value={name}
                                        errorText={errors && errors.name}
                                        helpText="Provide the public name which will be displayed to customers."
                                        onChange={(e)=>setName(e.target.value)}
                                        isRequired={true}
                                        maxWidth="150px"
                                    />

                                    <FormTextareaField
                                        label="Description"
                                        name="description"
                                        placeholder="Text input"
                                        value={description}
                                        errorText={errors && errors.description}
                                        helpText="Provide the description for customers to read when viewing this assistant."
                                        onChange={(e)=>setDescription(e.target.value)}
                                        isRequired={true}
                                        maxWidth="280px"
                                        rows={4}
                                    />

                                    <FormTextareaField
                                        label="Instructions"
                                        name="instructions"
                                        placeholder="Text input"
                                        value={instructions}
                                        errorText={errors && errors.instructions}
                                        helpText="Write your chat prompt here."
                                        onChange={(e)=>setInstructions(e.target.value)}
                                        isRequired={true}
                                        maxWidth="280px"
                                        rows={4}
                                    />

                                    <FormSelectField
                                        label="Model"
                                        name="model"
                                        placeholder="Pick status"
                                        selectedValue={model}
                                        helpText={<>Pick the LLM to power this assistant. Note: If you are uncertain try using <b>gpt-3.5-turbo-1106</b> model.</>}
                                        onChange={(e)=>setModel(e.target.value)}
                                        options={OPENAI_COMPLETION_MODEL_WITH_EMPTY_OPTION}
                                        isRequired={true}
                                    />

                                    <FormMultiSelectFieldForAssistantFiles
                                        label="Assistant File(s) (Optional)"
                                        name="assistantFiles"
                                        placeholder="Pick assistant files"
                                        assistantFiles={assistantFiles}
                                        setAssistantFiles={setAssistantFiles}
                                        errorText={errors && errors.assistantFiles}
                                        helpText="Pick the files you want to pre-train this assistant."
                                        isRequired={true}
                                        maxWidth="320px"
                                    />

                                    <div className="columns pt-5">
                                        <div className="column is-half">
                                            <Link to={`/admin/assistants`} className="button is-fullwidth-mobile">
                                                <FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Back to Assistant
                                            </Link>
                                        </div>
                                        <div className="column is-half has-text-right">
                                            <button className="button is-medium is-success is-fullwidth-mobile" onClick={onSubmitClick}><FontAwesomeIcon className="fas" icon={faCheckCircle} />&nbsp;Save</button>
                                        </div>
                                    </div>

                                </div>
                            </>
                        }
                    </nav>
                </section>
            </div>
        </>
    );
}

export default AdminAssistantAdd;
