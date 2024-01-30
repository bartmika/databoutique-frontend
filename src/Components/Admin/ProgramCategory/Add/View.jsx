import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faTachometer, faPlus, faTimesCircle, faCheckCircle, faRobot, faGauge, faPencil, faUsers, faIdCard, faAddressBook, faContactCard, faChartPie, faCogs, faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil';

import useLocalStorage from "../../../../Hooks/useLocalStorage";
import { postProgramCategoryCreateAPI } from "../../../../API/ProgramCategory";
import FormErrorBox from "../../../Reusable/FormErrorBox";
import FormInputField from "../../../Reusable/FormInputField";
import FormTextareaField from "../../../Reusable/FormTextareaField";
import FormRadioField from "../../../Reusable/FormRadioField";
import FormSelectField from "../../../Reusable/FormSelectField";
import PageLoadingContent from "../../../Reusable/PageLoadingContent";
import { topAlertMessageState, topAlertStatusState } from "../../../../AppState";
import { OPENAI_COMPLETION_MODEL_WITH_EMPTY_OPTION } from "../../../../Constants/FieldOptions";


function AdminProgramCategoryAdd() {
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
    const [sortNumber, setSortNumber] = useState("");

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
            sort_number: parseInt(sortNumber),
        };
        postProgramCategoryCreateAPI(
            decamelizedData,
            onAdminUserProgramCategoryAddSuccess,
            onAdminUserProgramCategoryAddError,
            onAdminUserProgramCategoryAddDone,
            onUnauthorized
        );
        console.log("onSubmitClick: Finished.")
    }

    ////
    //// API.
    ////

    function onAdminUserProgramCategoryAddSuccess(response){
        // For debugging purposes only.
        console.log("onAdminUserProgramCategoryAddSuccess: Starting...");
        console.log(response);

        // Add a temporary banner message in the app and then clear itself after 2 seconds.
        setTopAlertMessage("Program category created");
        setTopAlertStatus("success");
        setTimeout(() => {
            console.log("onAdminUserProgramCategoryAddSuccess: Delayed for 2 seconds.");
            console.log("onAdminUserProgramCategoryAddSuccess: topAlertMessage, topAlertStatus:", topAlertMessage, topAlertStatus);
            setTopAlertMessage("");
        }, 2000);

        // Redirect the user to the user attachments page.
        setForceURL("/admin/program-category/"+response.id);
    }

    function onAdminUserProgramCategoryAddError(apiErr) {
        console.log("onAdminUserProgramCategoryAddError: Starting...");
        setErrors(apiErr);

        // Add a temporary banner message in the app and then clear itself after 2 seconds.
        setTopAlertMessage("Failed submitting");
        setTopAlertStatus("danger");
        setTimeout(() => {
            console.log("onAdminUserProgramCategoryAddError: Delayed for 2 seconds.");
            console.log("onAdminUserProgramCategoryAddError: topAlertMessage, topAlertStatus:", topAlertMessage, topAlertStatus);
            setTopAlertMessage("");
        }, 2000);

        // The following code will cause the screen to scroll to the top of
        // the page. Please see ``react-scroll`` for more information:
        // https://github.com/fisshy/react-scroll
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    function onAdminUserProgramCategoryAddDone() {
        console.log("onAdminUserProgramCategoryAddDone: Starting...");
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
                            <li className=""><Link to="/admin/program-categories" aria-current="page"><FontAwesomeIcon className="fas" icon={faRobot} />&nbsp;Program Categories</Link></li>
                            <li className="is-active"><Link aria-current="page"><FontAwesomeIcon className="fas" icon={faPlus} />&nbsp;New</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Breadcrumbs */}
                    <nav className="breadcrumb has-background-light p-4 is-hidden-desktop" aria-label="breadcrumbs">
                        <ul>
                            <li className=""><Link to={`/admin/program-categories`} aria-current="page"><FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Back to Program Categories</Link></li>
                        </ul>
                    </nav>

                    {/* Page Name */}
                    <h1 className="name is-2"><FontAwesomeIcon className="fas" icon={faRobot} />&nbsp;Program Category</h1>
                    <h4 className="subname is-4"><FontAwesomeIcon className="fas" icon={faPlus} />&nbsp;New</h4>
                    <hr />

                    {/* Page */}
                    <nav className="box">

                        {/* Name + Options */}
                        <p className="name is-4"><FontAwesomeIcon className="fas" icon={faPlus} />&nbsp;Add Program Category</p>

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
                                        label="Description (Optional)"
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

                                    <FormInputField
                                        label="Sort Number"
                                        name="sortNumber"
                                        placeholder="Number input"
                                        value={sortNumber}
                                        errorText={errors && errors.sortNumber}
                                        helpText=""
                                        onChange={(e)=>setSortNumber(e.target.value)}
                                        isRequired={true}
                                        maxWidth="150px"
                                    />

                                    <div className="columns pt-5">
                                        <div className="column is-half">
                                            <Link to={`/admin/program-categories`} className="button is-fullwidth-mobile">
                                                <FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Back to Program Categories
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

export default AdminProgramCategoryAdd;
