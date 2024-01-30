import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faCodeBranch, faTasks, faTachometer, faPlus, faTimesCircle, faCheckCircle, faUserCircle, faGauge, faPencil, faUsers, faIdCard, faAddressBook, faContactCard, faChartPie, faCogs, faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil';

import { putExecutableUpdateAPI, getExecutableDetailAPI } from "../../../../API/Executable";
import FormErrorBox from "../../../Reusable/FormErrorBox";
import FormInputField from "../../../Reusable/FormInputField";
import FormTextareaField from "../../../Reusable/FormTextareaField";
import FormRadioField from "../../../Reusable/FormRadioField";
import FormMultiSelectField from "../../../Reusable/FormMultiSelectField";
import FormSelectField from "../../../Reusable/FormSelectField";
import FormMultiSelectFieldForExecutableFiles from "../../../Reusable/FormMultiSelectFieldForExecutableFiles";
import PageLoadingContent from "../../../Reusable/PageLoadingContent";
import { topAlertMessageState, topAlertStatusState } from "../../../../AppState";
import { OPENAI_COMPLETION_MODEL_WITH_EMPTY_OPTION } from "../../../../Constants/FieldOptions";


function CustomerExecutableUpdate() {
    ////
    //// URL Parameters.
    ////

    const { id } = useParams()

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
    const [assistantFiles, setExecutableFiles] = useState([]);

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
            id: id,
            name: name,
            description: description,
            instructions: instructions,
            model: model,
            assistant_file_ids: assistantFiles,
        };
        putExecutableUpdateAPI(
            decamelizedData,
            onCustomerExecutableUpdateSuccess,
            onCustomerExecutableUpdateError,
            onCustomerExecutableUpdateDone,
            onUnauthorized
        );
        console.log("onSubmitClick: Finished.")
    }

    ////
    //// API.
    ////

    // --- Update --- //

    function onCustomerExecutableUpdateSuccess(response){
        // For debugging purposes only.
        console.log("onCustomerExecutableUpdateSuccess: Starting...");
        console.log(response);

        // Add a temporary banner message in the app and then clear itself after 2 seconds.
        setTopAlertMessage("Executable updated");
        setTopAlertStatus("success");
        setTimeout(() => {
            console.log("onCustomerExecutableUpdateSuccess: Delayed for 2 seconds.");
            console.log("onCustomerExecutableUpdateSuccess: topAlertMessage, topAlertStatus:", topAlertMessage, topAlertStatus);
            setTopAlertMessage("");
        }, 2000);

        // Redirect the user to the user attachments page.
        setForceURL("/admin/assistant/"+id);
    }

    function onCustomerExecutableUpdateError(apiErr) {
        console.log("onCustomerExecutableUpdateError: Starting...");
        setErrors(apiErr);

        // Add a temporary banner message in the app and then clear itself after 2 seconds.
        setTopAlertMessage("Failed submitting");
        setTopAlertStatus("danger");
        setTimeout(() => {
            console.log("onCustomerExecutableUpdateError: Delayed for 2 seconds.");
            console.log("onCustomerExecutableUpdateError: topAlertMessage, topAlertStatus:", topAlertMessage, topAlertStatus);
            setTopAlertMessage("");
        }, 2000);

        // The following code will cause the screen to scroll to the top of
        // the page. Please see ``react-scroll`` for more information:
        // https://github.com/fisshy/react-scroll
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    function onCustomerExecutableUpdateDone() {
        console.log("onCustomerExecutableUpdateDone: Starting...");
        setFetching(false);
    }

    // --- Detail --- //
    function onSuccess(response){
        console.log("onSuccess: Starting...");
        setName(response.name);
        setDescription(response.description);
        setInstructions(response.instructions);
        setModel(response.model);

        try {
            // Step 6
            // (We need to convert into ID strings)
            if (response.assistantFiles) {
                let assistantFileIDs = [];
                for (let assistantFile of response.assistantFiles) {
                    assistantFileIDs.push(assistantFile.id);
                }
                setExecutableFiles(assistantFileIDs);
            }
        } catch (e) {
            // Do nothing.
        }
    }

    function onError(apiErr) {
        console.log("onError: Starting...");
        setErrors(apiErr);

        // The following code will cause the screen to scroll to the top of
        // the page. Please see ``react-scroll`` for more information:
        // https://github.com/fisshy/react-scroll
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    function onDone() {
        console.log("onDone: Starting...");
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
            setFetching(true);
            setErrors({});
            getExecutableDetailAPI(
                id,
                onSuccess,
                onError,
                onDone,
                onUnauthorized
            );
        }

        return () => { mounted = false; }
    }, [id,]);

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
                            <li className=""><Link to="/admin/assistants" aria-current="page"><FontAwesomeIcon className="fas" icon={faCodeBranch} />&nbsp;Executable</Link></li>
                            <li className=""><Link to={`/admin/assistant/${id}`} aria-current="page"><FontAwesomeIcon className="fas" icon={faEye} />&nbsp;Detail</Link></li>
                            <li className="is-active"><Link aria-current="page"><FontAwesomeIcon className="fas" icon={faPencil} />&nbsp;Edit</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Breadcrumbs */}
                    <nav className="breadcrumb has-background-light p-4 is-hidden-desktop" aria-label="breadcrumbs">
                        <ul>
                            <li className=""><Link to={`/admin/assistant/${id}`} aria-current="page"><FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Back to Detail</Link></li>
                        </ul>
                    </nav>

                    {/* Page Title */}
                    <h1 className="title is-2"><FontAwesomeIcon className="fas" icon={faCodeBranch} />&nbsp;Executable</h1>
                    <h4 className="subtitle is-4"><FontAwesomeIcon className="fas" icon={faPencil} />&nbsp;Edit</h4>
                    <hr />

                    {/* Page */}
                    <nav className="box">

                        {/* Name + Options */}
                        <div className="columns">
                            <div className="column">
                                <p className="title is-4">
                                    <FontAwesomeIcon className="fas" icon={faPencil} />&nbsp;Edit
                                </p>
                            </div>
                            <div className="column has-text-right">
                                {/* Do nothing ... */}
                            </div>
                        </div>

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

                                    <FormInputField
                                        label="Description"
                                        name="description"
                                        type="text"
                                        placeholder="Text input"
                                        value={description}
                                        errorText={errors && errors.description}
                                        helpText="Provide the description for customers to read when viewing this assistant."
                                        onChange={(e)=>setDescription(e.target.value)}
                                        isRequired={true}
                                        maxWidth="485px"
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

                                    <FormMultiSelectFieldForExecutableFiles
                                        label="Executable File(s) (Optional)"
                                        name="assistantFiles"
                                        placeholder="Pick assistant files"
                                        assistantFiles={assistantFiles}
                                        setExecutableFiles={setExecutableFiles}
                                        errorText={errors && errors.assistantFiles}
                                        helpText="Pick the files you want to pre-train this assistant."
                                        isRequired={true}
                                        maxWidth="320px"
                                    />

                                    <div className="columns pt-5">
                                        <div className="column is-half">
                                            <Link to={`/admin/assistant/${id}`} className="button is-fullwidth-mobile"><FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Back to Detail</Link>
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

export default CustomerExecutableUpdate;
