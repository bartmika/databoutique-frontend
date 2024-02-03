import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faRobot, faTasks, faTachometer, faPlus, faTimesCircle, faCheckCircle, faUserCircle, faGauge, faPencil, faUsers, faIdCard, faAddressBook, faContactCard, faChartPie, faCogs, faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil';

import DataDisplayRowRadio from "../../../Reusable/DataDisplayRowRadio";
import { putProgramUpdateAPI, getProgramDetailAPI } from "../../../../API/Program";
import FormErrorBox from "../../../Reusable/FormErrorBox";
import FormInputField from "../../../Reusable/FormInputField";
import FormTextareaField from "../../../Reusable/FormTextareaField";
import FormRadioField from "../../../Reusable/FormRadioField";
import FormMultiSelectField from "../../../Reusable/FormMultiSelectField";
import FormSelectField from "../../../Reusable/FormSelectField";
import PageLoadingContent from "../../../Reusable/PageLoadingContent";
import { topAlertMessageState, topAlertStatusState } from "../../../../AppState";
import { OPENAI_COMPLETION_MODEL_WITH_EMPTY_OPTION } from "../../../../Constants/FieldOptions";
import DataDisplayRowUploadDirectory from "../../../Reusable/DataDisplayRowUploadDirectory";


function AdminProgramUpdate() {
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
    const [businessFunction, setBusinessFunction] = useState(0);
    const [directories, setDirectories] = useState("");

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
            business_function: businessFunction,
            directories: directories,
        };
        putProgramUpdateAPI(
            decamelizedData,
            onAdminProgramUpdateSuccess,
            onAdminProgramUpdateError,
            onAdminProgramUpdateDone,
            onUnauthorized
        );
        console.log("onSubmitClick: Finished.")
    }

    ////
    //// API.
    ////

    // --- Update --- //

    function onAdminProgramUpdateSuccess(response){
        // For debugging purposes only.
        console.log("onAdminProgramUpdateSuccess: Starting...");
        console.log(response);

        // Add a temporary banner message in the app and then clear itself after 2 seconds.
        setTopAlertMessage("Program updated");
        setTopAlertStatus("success");
        setTimeout(() => {
            console.log("onAdminProgramUpdateSuccess: Delayed for 2 seconds.");
            console.log("onAdminProgramUpdateSuccess: topAlertMessage, topAlertStatus:", topAlertMessage, topAlertStatus);
            setTopAlertMessage("");
        }, 2000);

        // Redirect the user to the user attachments page.
        setForceURL("/admin/program/"+id);
    }

    function onAdminProgramUpdateError(apiErr) {
        console.log("onAdminProgramUpdateError: Starting...");
        setErrors(apiErr);

        // Add a temporary banner message in the app and then clear itself after 2 seconds.
        setTopAlertMessage("Failed submitting");
        setTopAlertStatus("danger");
        setTimeout(() => {
            console.log("onAdminProgramUpdateError: Delayed for 2 seconds.");
            console.log("onAdminProgramUpdateError: topAlertMessage, topAlertStatus:", topAlertMessage, topAlertStatus);
            setTopAlertMessage("");
        }, 2000);

        // The following code will cause the screen to scroll to the top of
        // the page. Please see ``react-scroll`` for more information:
        // https://github.com/fisshy/react-scroll
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    function onAdminProgramUpdateDone() {
        console.log("onAdminProgramUpdateDone: Starting...");
        setFetching(false);
    }

    // --- Detail --- //
    function onSuccess(response){
        console.log("onSuccess: Starting...");
        setName(response.name);
        setDescription(response.description);
        setInstructions(response.instructions);
        setModel(response.model);
        setBusinessFunction(response.businessFunction);
        setDirectories(response.directories);
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
            getProgramDetailAPI(
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
                            <li className=""><Link to="/admin/programs" aria-current="page"><FontAwesomeIcon className="fas" icon={faRobot} />&nbsp;Programs</Link></li>
                            <li className=""><Link to={`/admin/program/${id}`} aria-current="page"><FontAwesomeIcon className="fas" icon={faEye} />&nbsp;Detail</Link></li>
                            <li className="is-active"><Link aria-current="page"><FontAwesomeIcon className="fas" icon={faPencil} />&nbsp;Edit</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Breadcrumbs */}
                    <nav className="breadcrumb has-background-light p-4 is-hidden-desktop" aria-label="breadcrumbs">
                        <ul>
                            <li className=""><Link to={`/admin/program/${id}`} aria-current="page"><FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Back to Detail</Link></li>
                        </ul>
                    </nav>

                    {/* Page Title */}
                    <h1 className="title is-2"><FontAwesomeIcon className="fas" icon={faRobot} />&nbsp;Program</h1>
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
                                        helpText="Provide the description for customers to read when viewing this program."
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
                                        helpText={<>Pick the LLM to power this program. Note: If you are uncertain try using <b>gpt-3.5-turbo-1106</b> model.</>}
                                        onChange={(e)=>setModel(e.target.value)}
                                        options={OPENAI_COMPLETION_MODEL_WITH_EMPTY_OPTION}
                                        isRequired={true}
                                    />

                                    <DataDisplayRowRadio
                                        label="Business Function"
                                        value={businessFunction}
                                        opt1Value={1}
                                        opt1Label="Customer Document Review"
                                        opt2Value={2}
                                        opt2Label="Admin Document Review"
                                        helpText="This field cannot be changed and is readonly."
                                    />

                                    <DataDisplayRowUploadDirectory
                                        label="Upload Directories"
                                        directories={directories}
                                        helpText="This field cannot be changed and is readonly."
                                    />

                                    <div className="columns pt-5">
                                        <div className="column is-half">
                                            <Link to={`/admin/program/${id}`} className="button is-fullwidth-mobile"><FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Back to Detail</Link>
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

export default AdminProgramUpdate;
