import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faArrowCircleUp, faMessage, faChevronRight, faPlus, faPencil, faTimes, faBullhorn, faArrowUpRightFromSquare, faNewspaper, faWrench, faHardHat, faUserCircle, faTasks, faGauge, faArrowRight, faUsers, faBarcode } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';

import { getDashboardAPI } from "../../../API/Gateway";
import FormErrorBox from "../../Reusable/FormErrorBox";
import { topAlertMessageState, topAlertStatusState, currentUserState } from "../../../AppState";
import DateTextFormatter from "../../Reusable/EveryPage/DateTextFormatter";
import DateTimeTextFormatter from "../../Reusable/EveryPage/DateTimeTextFormatter";
import PageLoadingContent from "../../Reusable/PageLoadingContent";


function CustomerDashboard() {

    ////
    //// Global state.
    ////

    const [topAlertMessage, setTopAlertMessage] = useRecoilState(topAlertMessageState);
    const [topAlertStatus, setTopAlertStatus] = useRecoilState(topAlertStatusState);
    const [currentUser] = useRecoilState(currentUserState);

    ////
    //// Component states.
    ////

    const [errors, setErrors] = useState({});
    const [isFetching, setFetching] = useState(false);
    const [forceURL, setForceURL] = useState("");

    ////
    //// API.
    ////



    ////
    //// Event handling.
    ////

    ////
    //// Misc.
    ////

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
        <div class="container">
            <section class="section">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li class="is-active"><Link to="/dashboard" aria-current="page"><FontAwesomeIcon className="fas" icon={faGauge} />&nbsp;Admin Dashboard</Link></li>
                    </ul>
                </nav>
                <nav class="box">
                    <div class="columns">
                        <div class="column">
                            <h1 class="title is-4"><FontAwesomeIcon className="fas" icon={faGauge} />&nbsp;Admin Dashboard</h1>
                        </div>
                    </div>

                    <section class="hero is-medium is-link">
                      <div class="hero-body">
                        <p class="title">
                            <FontAwesomeIcon className="fas" icon={faCodeBranch} />&nbsp;Assistant Threads
                        </p>
                        <p class="subtitle">
                          Begin or resume a discussion with an assistant by clicking below:
                          <br />
                          <br />
                          <Link to={"/assistant-threads"}>View Threads&nbsp;<FontAwesomeIcon className="fas" icon={faArrowRight} /></Link>
                          <br />
                          <br />
                          <Link to={"/assistant-threads/add/step-1"}>Add&nbsp;<FontAwesomeIcon className="fas" icon={faArrowRight} /></Link>
                        </p>
                      </div>
                    </section>

{/*
                    <section class="hero is-medium is-primary">
                      <div class="hero-body">
                        <p class="title">
                            <FontAwesomeIcon className="fas" icon={faBarcode} />&nbsp;Registry
                        </p>
                        <p class="subtitle">
                          Have a CPS registry number? Use the following to lookup existing records:
                          <br />
                          <br />
                          <Link to={"/admin/registry"}>View&nbsp;<FontAwesomeIcon className="fas" icon={faArrowRight} /></Link>
                        </p>
                      </div>
                    </section>

                    <section class="hero is-medium is-success">
                      <div class="hero-body">
                        <p class="title">
                            <FontAwesomeIcon className="fas" icon={faTasks} />&nbsp;Stores
                        </p>
                        <p class="subtitle">
                           Manage the stores that belong to your system.
                          <br />
                          <br />
                          <Link to={"/admin/stores"}>View&nbsp;<FontAwesomeIcon className="fas" icon={faArrowRight} /></Link>
                        </p>
                      </div>
                    </section>

                    <section class="hero is-medium is-info">
                      <div class="hero-body">
                        <p class="title">
                            <FontAwesomeIcon className="fas" icon={faUsers} />&nbsp;All Users
                        </p>
                        <p class="subtitle">
                          Manage all the users that belong to your system.
                          <br />
                          <br />
                          <Link to={"/admin/users"}>View&nbsp;<FontAwesomeIcon className="fas" icon={faArrowRight} /></Link>
                        </p>
                      </div>
                    </section>

                    {/* <section class="hero is-medium is-primary">
                      <div class="hero-body">
                        <p class="title">
                          Store Owner/Manager
                        </p>
                        <p class="subtitle">
                          Manage the Store Owner/Manager that belong to your store.
                          <br />
                          <br />
                          <i>Coming soon</i>
                        </p>
                      </div>
                    </section> */}

                </nav>
            </section>
        </div>
    );
}

export default CustomerDashboard;
