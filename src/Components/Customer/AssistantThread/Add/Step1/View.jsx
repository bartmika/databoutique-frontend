import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faCloudUpload, faMessage, faHome, faBuildingUser, faHomeUser, faUserGear, faArrowCircleRight, faArrowLeft, faSearch, faTasks, faTachometer, faPlus, faTimesCircle, faCheckCircle, faCodeBranch, faGauge, faPencil, faUsers, faIdCard, faAddressBook, faContactCard, faChartPie, faBuilding, faClose } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil';

import FormErrorBox from "../../../../Reusable/FormErrorBox";
import { RESIDENTIAL_ASSOCIATE_TYPE_OF_ID, COMMERCIAL_ASSOCIATE_TYPE_OF_ID  } from "../../../../../Constants/App";
import { addAssistantThreadState, ADD_ASSISTANT_THREAD_STATE_DEFAULT, currentUserState } from "../../../../../AppState";


function CustomerAssistantThreadAddStep1() {
    ////
    //// Global state.
    ////

    const [addAssistantThread, setAddAssistantThread] = useRecoilState(addAssistantThreadState);
    const [currentUser] = useRecoilState(currentUserState);

    ////
    //// Component states.
    ////

    const [errors, setErrors] = useState({});
    const [forceURL, setForceURL] = useState("");
    const [showCancelWarning, setShowCancelWarning] = useState(false);

    ////
    //// Event handling.
    ////

    const onSelectType = (to) => {
        // Let's create a clone of our assistantThread.
        let modifiedAddAssistantThread = { ...addAssistantThread };

        // Set the type.
        modifiedAddAssistantThread.assistantType = to;

        // Attach the assistantThreads country based on current user's country if
        // the logged in user has a country, if not then default to `Canada`. Why are we doing this? Because the
        // phone number formatter requires a country while we ask about country
        // in the wizard before.
        if (currentUser.country !== undefined && currentUser.country !== null && currentUser.country !== "") {
            modifiedAddAssistantThread.country = currentUser.country;
        } else {
            modifiedAddAssistantThread.country = "Canada";
        }

        // Save to persistent storage our new assistantThread.
        setAddAssistantThread(modifiedAddAssistantThread);

        // Redirect to the next page.
        setForceURL("/assistant-threads/add/step-2-discussion");
    }

    ////
    //// API.
    ////

    // Nothing...

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
                            <li className=""><Link to="/dashboard" aria-current="page"><FontAwesomeIcon className="fas" icon={faGauge} />&nbsp;Dashboard</Link></li>
                            <li className=""><Link to="/assistant-threads" aria-current="page"><FontAwesomeIcon className="fas" icon={faCodeBranch} />&nbsp;Assistant Threads</Link></li>
                            <li className="is-active"><Link aria-current="page"><FontAwesomeIcon className="fas" icon={faPlus} />&nbsp;New</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Breadcrumbs */}
                    <nav className="breadcrumb has-background-light p-4 is-hidden-desktop" aria-label="breadcrumbs">
                        <ul>
                            <li className="">
                                <Link to="/assistant-threads" aria-current="page"><FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Back to Assistant Threads</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Page Title */}
                    <h1 className="title is-2"><FontAwesomeIcon className="fas" icon={faCodeBranch} />&nbsp;Assistant Threads</h1>
                    <h4 className="subtitle is-4"><FontAwesomeIcon className="fas" icon={faPlus} />&nbsp;New Assistant Thread</h4>
                    <hr />

                    {/* Progress Wizard */}
                    <nav className="box has-background-light" >
                        <p className="subtitle is-5">Step 1 of 3</p>
                        <progress class="progress is-success" value="33" max="100">33%</progress>
                    </nav>

                    {/* Page */}
                    <nav className="box">
                        <div className={`modal ${showCancelWarning ? 'is-active' : ''}`}>
                            <div className="modal-background"></div>
                            <div className="modal-card">
                                <header className="modal-card-head">
                                    <p className="modal-card-title">Are you sure?</p>
                                    <button className="delete" aria-label="close" onClick={(e)=>setShowCancelWarning(false)}></button>
                                </header>
                                <section className="modal-card-body">
                                    Your record will be cancelled and your work will be lost. This cannot be undone. Do you want to continue?
                                </section>
                                <footer className="modal-card-foot">
                                    <Link className="button is-medium is-success" to={`/assistant-threads`}>Yes</Link>
                                    <button className="button is-medium" onClick={(e)=>setShowCancelWarning(false)}>No</button>
                                </footer>
                            </div>
                        </div>

                        <p className="title is-4"><FontAwesomeIcon className="fas" icon={faUserGear} />&nbsp;Select Assistant Type:</p>

                        <p className="pb-4 has-text-grey">Please select the type of assistant to use.</p>

                        <>
                            <FormErrorBox errors={errors} />
                            <div className="container">
                                <div className="columns">

                                    {/* Residential */}
                                    <div className="column">
                                        <div className="card">
                                            <div className="card-image has-background-info">
                                                <div className="has-text-centered" style={{padding:"60px"}}>
                                                    <FontAwesomeIcon className="fas" icon={faMessage} style={{ color: 'white', fontSize: '9rem' }} />
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <div className="media">

                                                  <div className="media-content">
                                                    <p className="title is-4"><FontAwesomeIcon className="fas" icon={faRobot} />&nbsp;Discussion Assistant</p>
                                                  </div>
                                                </div>

                                                <div className="content">
                                                    Add a Discussion Assistant.
                                                    <br />
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <button onClick={(e,s)=>onSelectType(RESIDENTIAL_ASSOCIATE_TYPE_OF_ID)} className="card-footer-item button is-primary is-large">
                                                   Pick&nbsp;<FontAwesomeIcon className="fas" icon={faArrowCircleRight} />
                                                </button>
                                            </footer>
                                        </div>
                                    </div>

                                    {/* Business */}
                                    <div className="column">
                                        <div className="card">
                                            <div className="card-image has-background-info">
                                                <div className="has-text-centered" style={{padding:"60px"}}>
                                                    <FontAwesomeIcon className="fas" icon={faCloudUpload} style={{ color: 'white', fontSize: '9rem' }} />
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <div className="media">

                                                  <div className="media-content">
                                                    <p className="title is-4"><FontAwesomeIcon className="fas" icon={faRobot} />&nbsp;Document Review Assistant</p>
                                                  </div>
                                                </div>

                                                <div className="content">
                                                    Add a Doucment Review Assistant.
                                                    <br />
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <a className="card-footer-item button is-primary is-large" disabled={true}>
                                                    Pick&nbsp;<FontAwesomeIcon className="fas" icon={faArrowCircleRight} />
                                                </a>
                                            </footer>
                                        </div>
                                    </div>

                                </div>

                                <div className="columns pt-5">
                                    <div className="column is-half">
                                        <button className="button is-medium is-fullwidth-mobile" onClick={(e)=>setShowCancelWarning(true)}><FontAwesomeIcon className="fas" icon={faTimesCircle} />&nbsp;Cancel</button>
                                    </div>
                                    <div className="column is-half has-text-right">

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

export default CustomerAssistantThreadAddStep1;
