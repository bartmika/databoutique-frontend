import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faTachometer, faPlus, faTimesCircle, faCheckCircle, faRobot, faGauge, faPencil, faUsers, faIdCard, faAddressBook, faContactCard, faChartPie, faCogs, faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil';

import useLocalStorage from "../../../../Hooks/useLocalStorage";
import { postProgramCreateAPI } from "../../../../API/Program";
import FormErrorBox from "../../../Reusable/FormErrorBox";
import FormInputField from "../../../Reusable/FormInputField";
import FormTextareaField from "../../../Reusable/FormTextareaField";
import FormRadioField from "../../../Reusable/FormRadioField";
import FormSelectField from "../../../Reusable/FormSelectField";
import PageLoadingContent from "../../../Reusable/PageLoadingContent";
import { topAlertMessageState, topAlertStatusState } from "../../../../AppState";
import { OPENAI_COMPLETION_MODEL_WITH_EMPTY_OPTION } from "../../../../Constants/FieldOptions";


function AdminProgramAdd() {
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
    const [model, setModel] = useState("gpt-3.5-turbo-1106");
    const [businessFunction, setBusinessFunction] = useState(0);

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
            business_function: businessFunction,
        };
        postProgramCreateAPI(
            decamelizedData,
            onAdminUserProgramAddSuccess,
            onAdminUserProgramAddError,
            onAdminUserProgramAddDone,
            onUnauthorized
        );
        console.log("onSubmitClick: Finished.")
    }

    ////
    //// API.
    ////

    function onAdminUserProgramAddSuccess(response){
        // For debugging purposes only.
        console.log("onAdminUserProgramAddSuccess: Starting...");
        console.log(response);

        // Add a temporary banner message in the app and then clear itself after 2 seconds.
        setTopAlertMessage("Program created");
        setTopAlertStatus("success");
        setTimeout(() => {
            console.log("onAdminUserProgramAddSuccess: Delayed for 2 seconds.");
            console.log("onAdminUserProgramAddSuccess: topAlertMessage, topAlertStatus:", topAlertMessage, topAlertStatus);
            setTopAlertMessage("");
        }, 2000);

        // Redirect the user to the user attachments page.
        setForceURL("/admin/program/"+response.id);
    }

    function onAdminUserProgramAddError(apiErr) {
        console.log("onAdminUserProgramAddError: Starting...");
        setErrors(apiErr);

        // Add a temporary banner message in the app and then clear itself after 2 seconds.
        setTopAlertMessage("Failed submitting");
        setTopAlertStatus("danger");
        setTimeout(() => {
            console.log("onAdminUserProgramAddError: Delayed for 2 seconds.");
            console.log("onAdminUserProgramAddError: topAlertMessage, topAlertStatus:", topAlertMessage, topAlertStatus);
            setTopAlertMessage("");
        }, 2000);

        // The following code will cause the screen to scroll to the top of
        // the page. Please see ``react-scroll`` for more information:
        // https://github.com/fisshy/react-scroll
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    function onAdminUserProgramAddDone() {
        console.log("onAdminUserProgramAddDone: Starting...");
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
                            <li className=""><Link to="/admin/programs" aria-current="page"><FontAwesomeIcon className="fas" icon={faRobot} />&nbsp;Programs</Link></li>
                            <li className="is-active"><Link aria-current="page"><FontAwesomeIcon className="fas" icon={faPlus} />&nbsp;New</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Breadcrumbs */}
                    <nav className="breadcrumb has-background-light p-4 is-hidden-desktop" aria-label="breadcrumbs">
                        <ul>
                            <li className=""><Link to={`/admin/programs`} aria-current="page"><FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Back to Programs</Link></li>
                        </ul>
                    </nav>

                    {/* Page Name */}
                    <h1 className="name is-2"><FontAwesomeIcon className="fas" icon={faRobot} />&nbsp;Program</h1>
                    <h4 className="subname is-4"><FontAwesomeIcon className="fas" icon={faPlus} />&nbsp;New</h4>
                    <hr />

                    {/* Page */}
                    <nav className="box">

                        {/* Name + Options */}
                        <p className="name is-4"><FontAwesomeIcon className="fas" icon={faPlus} />&nbsp;Add Program</p>

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
                                        maxWidth="250px"
                                    />

                                    <FormTextareaField
                                        label="Description"
                                        name="description"
                                        placeholder="Text input"
                                        value={description}
                                        errorText={errors && errors.description}
                                        helpText="Provide the description for customers to read when viewing this program."
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
                                        helpText="Write your chat prompt here. This prompt is private and will not be shown to customers."
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
                                        helpText={<>Pick the LLM to power this program. Note: If you are uncertain try using <b>gpt-3.5-turbo-1106</b> model.</>}
                                        errorText={errors && errors.model}
                                        onChange={(e)=>setModel(e.target.value)}
                                        options={OPENAI_COMPLETION_MODEL_WITH_EMPTY_OPTION}
                                        isRequired={true}
                                    />

                                    <FormRadioField
                                        label="Business Function"
                                        name="businessFunction"
                                        value={businessFunction}
                                        errorText={errors && errors.businessFunction}
                                        opt1Value={1}
                                        opt1Label="Customer Document Review"
                                        opt2Value={2}
                                        opt2Label="Admin Document Review"
                                        onChange={(e)=>setBusinessFunction(parseInt(e.target.value))}
                                        helpText={<div class="container content">
                                        <p>The business function determines how the customer and program interact.</p>
                                        <ul>
                                            <li><b>Customer Document Review Based</b> - Customer must submit document(s) and this program executes on reviewing them.</li>
                                            <li><b>Admin Document Review Based</b> - Customer simply asks questions to the program based the document(s) provided by you. The program generates answers using your document(s).</li>
                                        </ul>
                                        <p>Please note: This function will become readonly once you submit this program into the system.</p>
                                        </div>}
                                    />

                                    <div className="columns pt-5">
                                        <div className="column is-half">
                                            <Link to={`/admin/programs`} className="button is-fullwidth-mobile">
                                                <FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Back to Program
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

export default AdminProgramAdd;
