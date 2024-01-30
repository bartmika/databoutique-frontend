import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faCloudUpload, faMessage, faHome, faBuildingUser, faHomeUser, faUserGear, faArrowCircleRight, faArrowLeft, faSearch, faTasks, faTachometer, faPlus, faTimesCircle, faCheckCircle, faCodeBranch, faGauge, faPencil, faUsers, faIdCard, faAddressBook, faContactCard, faChartPie, faBuilding, faClose } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil';

import { getProgramDetailAPI } from "../../../../../API/Program";
import { postExecutableCreateAPI } from "../../../../../API/Executable";
import DataDisplayRowText from "../../../../Reusable/DataDisplayRowText";
import FormTextareaField from "../../../../Reusable/FormTextareaField";
import FormErrorBox from "../../../../Reusable/FormErrorBox";
import { RESIDENTIAL_ASSOCIATE_TYPE_OF_ID, COMMERCIAL_ASSOCIATE_TYPE_OF_ID  } from "../../../../../Constants/App";
import {
    addExecutableState,
    ADD_ASSISTANT_THREAD_STATE_DEFAULT,
    currentUserState,
    topAlertMessageState,
    topAlertStatusState
} from "../../../../../AppState";
import PageLoadingContent from "../../../../Reusable/PageLoadingContent";


function CustomerExecutableAddStep2() {
    ////
    //// Global state.
    ////

    const [addExecutable, setAddExecutable] = useRecoilState(addExecutableState);
    const [topAlertMessage, setTopAlertMessage] = useRecoilState(topAlertMessageState);
    const [topAlertStatus, setTopAlertStatus] = useRecoilState(topAlertStatusState);
    const [currentUser] = useRecoilState(currentUserState);

    ////
    //// Component states.
    ////

    const [errors, setErrors] = useState({});
    const [forceURL, setForceURL] = useState("");
    const [isFetching, setFetching] = useState(false);
    const [program, setProgram] = useState({});
    const [message, setMessage] = useState("");

    ////
    //// Event handling.
    ////

    const onSubmitClick = (to) => {
        // Let's create a clone of our object.
        let modifiedAddExecutable = { ...addExecutable };

        console.log("onSubmitClick: Starting...")
        setFetching(true);
        setErrors({});

        const decamelizedData = {
            program_id: program.id,
            user_id: currentUser.id,
            message: message,
        };
        postExecutableCreateAPI(
            decamelizedData,
            onAddSuccess,
            onAddError,
            onAddDone,
            onUnauthorized
        );
        console.log("onSubmitClick: Finished.")
    }

    ////
    //// API.
    ////

    // --- CREATE --- //

    function onAddSuccess(response){
        // For debugging purposes only.
        console.log("onAddSuccess: Starting...");
        console.log(response);

        // Add a temporary banner message in the app and then clear itself after 2 seconds.
        setTopAlertMessage("Executable thread created");
        setTopAlertStatus("success");
        setTimeout(() => {
            console.log("onAddSuccess: Delayed for 2 seconds.");
            console.log("onAddSuccess: topAlertMessage, topAlertStatus:", topAlertMessage, topAlertStatus);
            setTopAlertMessage("");
        }, 2000);

        // Redirect the user to the user attachments page.
        setForceURL("/program-thread/"+response.id);
    }

    function onAddError(apiErr) {
        console.log("onAddError: Starting...");
        setErrors(apiErr);

        // Add a temporary banner message in the app and then clear itself after 2 seconds.
        setTopAlertMessage("Failed submitting");
        setTopAlertStatus("danger");
        setTimeout(() => {
            console.log("onAddError: Delayed for 2 seconds.");
            console.log("onAddError: topAlertMessage, topAlertStatus:", topAlertMessage, topAlertStatus);
            setTopAlertMessage("");
        }, 2000);

        // The following code will cause the screen to scroll to the top of
        // the page. Please see ``react-scroll`` for more information:
        // https://github.com/fisshy/react-scroll
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    function onAddDone() {
        console.log("onAddDone: Starting...");
        setFetching(false);
    }

    // --- DETAIL --- //

    function onSuccess(response){
        console.log("onSuccess: Starting...");
        setProgram(response);
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

    // --- ALL --- //

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
            getProgramDetailAPI(
                addExecutable.programID,
                onSuccess,
                onError,
                onDone,
                onUnauthorized
            );
        }

        return () => { mounted = false; }
    }, [addExecutable]);
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
                            <li className=""><Link to="/dashboard" aria-current="page"><FontAwesomeIcon className="fas" icon={faGauge} />&nbsp;Dashboard</Link></li>
                            <li className=""><Link to="/executables" aria-current="page"><FontAwesomeIcon className="fas" icon={faCodeBranch} />&nbsp;Executables</Link></li>
                            <li className="is-active"><Link aria-current="page"><FontAwesomeIcon className="fas" icon={faPlus} />&nbsp;New</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Breadcrumbs */}
                    <nav className="breadcrumb has-background-light p-4 is-hidden-desktop" aria-label="breadcrumbs">
                        <ul>
                            <li className="">
                                <Link to="/executables" aria-current="page"><FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Back to Executables</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Page Title */}
                    <h1 className="title is-2"><FontAwesomeIcon className="fas" icon={faCodeBranch} />&nbsp;Executables</h1>
                    <h4 className="subtitle is-4"><FontAwesomeIcon className="fas" icon={faPlus} />&nbsp;New Executable</h4>
                    <hr />

                    {/* Progress Wizard */}
                    <nav className="box has-background-success-light" >
                        <p className="subtitle is-5">Step 2 of 2</p>
                        <progress class="progress is-success" value="100" max="100">100%</progress>
                    </nav>

                    {/* Page */}
                    <nav className="box">
                        <p className="title is-4"><FontAwesomeIcon className="fas" icon={faUserGear} />&nbsp;Executable</p>
                        <>
                            <FormErrorBox errors={errors} />
                            <div className="container">
                                {isFetching
                                    ?
                                    <PageLoadingContent displayMessage={"Submitting..."} />
                                    :
                                    <>
                                        {program && <>

                                            <p className="pb-4 has-text-grey">To begin please fill out the following message to submit into the system:</p>

                                                <DataDisplayRowText
                                                    label="Program Name"
                                                    value={program.name}
                                                />

                                                <DataDisplayRowText
                                                    label="Program Description"
                                                    value={program.description}
                                                />

                                                <FormTextareaField
                                                    label="Message"
                                                    name="message"
                                                    placeholder="Text input"
                                                    value={message}
                                                    errorText={errors && errors.message}
                                                    helpText="Type your first question to the program here."
                                                    onChange={(e)=>setMessage(e.target.value)}
                                                    isRequired={true}
                                                    maxWidth="280px"
                                                    rows={4}
                                                />


                                        </>}
                                    </>}

                                <div className="columns pt-5">
                                    <div className="column is-half">
                                        <Link className="button is-fullwidth-mobile" to={`/executables/add/step-1`}><FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Back to Step 1</Link>
                                    </div>
                                    <div className="column is-half has-text-right">
                                        <button className="button is-medium is-success is-fullwidth-mobile" onClick={onSubmitClick}><FontAwesomeIcon className="fas" icon={faCheckCircle} />&nbsp;Submit</button>
                                    </div>
                                </div>
                            </div>
                        </>

                    </nav>
                </section>
            </div>
        </>
    );
}

export default CustomerExecutableAddStep2;
