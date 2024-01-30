import React, { useState, useEffect } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilterCircleXmark,faArrowLeft, faRobot, faTachometer, faEye, faPencil, faTrashCan, faPlus, faGauge, faArrowRight, faTable, faArrowUpRightFromSquare, faRefresh, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';

import { getProgramListAPI, deleteProgramAPI } from "../../../../API/Program";
import {
    topAlertMessageState,
    topAlertStatusState,
    currentUserState,
    programFilterStatusState,
    programFilterTypeState,
    programFilterSortState
} from "../../../../AppState";
import FormErrorBox from "../../../Reusable/FormErrorBox";
import PageLoadingContent from "../../../Reusable/PageLoadingContent";
import FormInputFieldWithButton from "../../../Reusable/FormInputFieldWithButton";
import FormSelectField from "../../../Reusable/FormSelectField";
import FormDateField from "../../../Reusable/FormDateField";
import BubbleLink from "../../../Reusable/EveryPage/BubbleLink";
import { USER_ROLES,
    PAGE_SIZE_OPTIONS,
    USER_STATUS_LIST_OPTIONS,
    USER_ROLE_LIST_OPTIONS,
    ASSISTANT_SORT_OPTIONS,
    ASSISTANT_STATUS_FILTER_OPTIONS,
    ASSISTANT_TYPE_OF_FILTER_OPTIONS
} from "../../../../Constants/FieldOptions";
import { DEFAULT_ASSISTANT_LIST_SORT_BY_VALUE, DEFAULT_ASSISTANT_STATUS_FILTER_OPTION } from "../../../../Constants/App";
import AdminProgramSearchResultDesktop from "../List/Desktop";
import AdminProgramSearchResultMobile from "../List/Mobile";


function AdminProgramSearchResult() {
    ////
    //// URL Parameters.
    ////

    const [searchParams] = useSearchParams(); // Special thanks via https://stackoverflow.com/a/65451140
    const name = searchParams.get("name");
    const description = searchParams.get("description");

    ////
    //// Global state.
    ////

    const [topAlertMessage, setTopAlertMessage] = useRecoilState(topAlertMessageState);
    const [topAlertStatus, setTopAlertStatus] = useRecoilState(topAlertStatusState);
    const [currentUser] = useRecoilState(currentUserState);
    const [status, setStatus] = useRecoilState(programFilterStatusState);                   // Filtering
    const [type, setType] = useRecoilState(programFilterTypeState);                         // Filtering
    const [sortByValue, setSortByValue] = useRecoilState(programFilterSortState);           // Sorting

    ////
    //// Component states.
    ////

    const [onPageLoaded, setOnPageLoaded] = useState(false);
    const [errors, setErrors] = useState({});
    const [forceURL, setForceURL] = useState("");
    const [listData, setListData] = useState("");
    const [listCount, setListCount] = useState(0);
    const [selectedProgramForDeletion, setSelectedProgramForDeletion] = useState("");
    const [isFetching, setFetching] = useState(false);
    const [pageSize, setPageSize] = useState(10);                                      // Pagination
    const [previousCursors, setPreviousCursors] = useState([]);                        // Pagination
    const [nextCursor, setNextCursor] = useState("");                                  // Pagination
    const [currentCursor, setCurrentCursor] = useState("");                            // Pagination

    ////
    //// API.
    ////

    // --- List --- //

    function onProgramListSuccess(response){
        console.log("onProgramListSuccess: Starting...");
        if (response.results !== null) {
            setListData(response);
            if (response.hasNextPage) {
                setNextCursor(response.nextCursor); // For pagination purposes.
            }
        }
    }

    function onProgramListError(apiErr) {
        console.log("onProgramListError: Starting...");
        setErrors(apiErr);

        // The following code will cause the screen to scroll to the top of
        // the page. Please see ``react-scroll`` for more information:
        // https://github.com/fisshy/react-scroll
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    function onProgramListDone() {
        console.log("onProgramListDone: Starting...");
        setFetching(false);
    }

    // --- Count --- //

    function onProgramCountSuccess(response) {
        console.log("onProgramCountSuccess: Starting...");
        console.log("onProgramCountSuccess: response:", response);
        setListCount(response.count);
    }

    function onProgramCountError(apiErr) {
        console.log("onProgramCountError: Starting...");
        setErrors(apiErr);

        // The following code will cause the screen to scroll to the top of
        // the page. Please see ``react-scroll`` for more information:
        // https://github.com/fisshy/react-scroll
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    function onProgramCountDone() {
        console.log("onProgramCountDone: Starting...");
        setFetching(false);
    }

    // --- Delete --- //

    function onProgramDeleteSuccess(response){
        console.log("onProgramDeleteSuccess: Starting..."); // For debugging purposes only.

        // Update notification.
        setTopAlertStatus("success");
        setTopAlertMessage("Program deleted");
        setTimeout(() => {
            console.log("onDeleteConfirmButtonClick: topAlertMessage, topAlertStatus:", topAlertMessage, topAlertStatus);
            setTopAlertMessage("");
        }, 2000);

        // Fetch again an updated list.
        fetchList(currentCursor, pageSize, "", sortByValue, status, type, name, description);
    }

    function onProgramDeleteError(apiErr) {
        console.log("onProgramDeleteError: Starting..."); // For debugging purposes only.
        setErrors(apiErr);

        // Update notification.
        setTopAlertStatus("danger");
        setTopAlertMessage("Failed deleting");
        setTimeout(() => {
            console.log("onProgramDeleteError: topAlertMessage, topAlertStatus:", topAlertMessage, topAlertStatus);
            setTopAlertMessage("");
        }, 2000);

        // The following code will cause the screen to scroll to the top of
        // the page. Please see ``react-scroll`` for more information:
        // https://github.com/fisshy/react-scroll
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    function onProgramDeleteDone() {
        console.log("onProgramDeleteDone: Starting...");
        setFetching(false);
    }

    // --- All --- //

    const onUnauthorized = () => {
        setForceURL("/login?unauthorized=true"); // If token expired or user is not logged in, redirect back to login.
    }

    ////
    //// Event handling.
    ////

    // Function resets the filter state to its default state.
    const onClearFilterClick = (e) => {
        setType(0);
        setStatus(1);
        setSortByValue(DEFAULT_ASSISTANT_LIST_SORT_BY_VALUE);
    }

    const fetchList = (cur, limit, keywords, so, s, t, n, d) => {
        console.log("--->", cur, limit, keywords, so, s, t, n, d);

        setFetching(true);
        setErrors({});

        let params = new Map();
        params.set("page_size", limit);     // Pagination
        params.set("sort_field", "lexical_name") // Sorting

        if (cur !== "") { // Pagination
            params.set("cursor", cur);
        }

        // DEVELOPERS NOTE: Our `sortByValue` is string with the sort field
        // and sort order combined with a comma seperation. Therefore we
        // need to split as follows.
        const sortArray = so.split(",");
        params.set("sort_field", sortArray[0]);
        params.set("sort_order", sortArray[1]);

        // Filtering
        if (keywords !== undefined && keywords !== null && keywords !== "") { // Searhcing
            params.set("search", keywords);
        }
        if (s !== undefined && s !== null && s !== "") {
            params.set("status", s);
        }
        if (t !== undefined && t !== null && t !== "") {
            params.set("type", t);
        }
        if (n !== undefined && n !== null && n !== "") {
            params.set("name", n);
        }
        if (d !== undefined && d !== null && d !== "") {
            params.set("description", d);
        }

        getProgramListAPI(
            params,
            onProgramListSuccess,
            onProgramListError,
            onProgramListDone,
            onUnauthorized
        );
    }

    const onNextClicked = (e) => {
        let arr = [...previousCursors];
        arr.push(currentCursor);
        setPreviousCursors(arr);
        setCurrentCursor(nextCursor);
    }

    const onPreviousClicked = (e) => {
        let arr = [...previousCursors];
        const previousCursor = arr.pop();
        setPreviousCursors(arr);
        setCurrentCursor(previousCursor);
    }

    const onSelectProgramForDeletion = (e, user) => {
        console.log("onSelectProgramForDeletion", user);
        setSelectedProgramForDeletion(user);
    }

    const onDeselectProgramForDeletion = (e) => {
        console.log("onDeselectProgramForDeletion");
        setSelectedProgramForDeletion("");
    }

    const onDeleteConfirmButtonClick = (e) => {
        console.log("onDeleteConfirmButtonClick"); // For debugging purposes only.

        deleteProgramAPI(
            selectedProgramForDeletion.id,
            onProgramDeleteSuccess,
            onProgramDeleteError,
            onProgramDeleteDone,
            onUnauthorized
        );
        setSelectedProgramForDeletion("");
    }

    ////
    //// Misc.
    ////

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            fetchList(currentCursor, pageSize, "", sortByValue, status, type, name, description);

            // If you loaded the page for the very first time.
            if (onPageLoaded === false) {
                window.scrollTo(0, 0);  // Start the page at the top of the page.
                setOnPageLoaded(true);
            }
        }

        return () => { mounted = false; }
    }, [onPageLoaded, currentCursor, pageSize, sortByValue, status, type, name, description]);

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
                        <ul className="">
                            <li className=""><Link to="/admin/dashboard" aria-current="page"><FontAwesomeIcon className="fas" icon={faGauge} />&nbsp;Dashboard</Link></li>
                            <li className=""><Link to="/admin/programs" aria-current="page"><FontAwesomeIcon className="fas" icon={faRobot} />&nbsp;Programs</Link></li>
                            <li className="is-active"><Link aria-current="page"><FontAwesomeIcon className="fas" icon={faSearch} />&nbsp;Search</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Breadcrumbs */}
                    <nav className="breadcrumb has-background-light p-4 is-hidden-desktop" aria-label="breadcrumbs">
                        <ul>
                            <li className="">
                                <Link to="/admin/dashboard" aria-current="page">
                                    <FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Back to Dashboard
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Page Title */}
                    <h1 className="title is-2"><FontAwesomeIcon className="fas" icon={faRobot} />&nbsp;Programs</h1>
                    <h4 className="subtitle is-4"><FontAwesomeIcon className="fas" icon={faSearch} />&nbsp;Search</h4>
                    <hr />

                    {/* Page Modal(s) */}
                    <div className={`modal ${selectedProgramForDeletion ? 'is-active' : ''}`}>
                        <div className="modal-background"></div>
                        <div className="modal-card">
                            <header className="modal-card-head">
                                <p className="modal-card-title">Are you sure?</p>
                                <button className="delete" aria-label="close" onClick={onDeselectProgramForDeletion}></button>
                            </header>
                            <section className="modal-card-body">
                                You are about to <b>archive</b> this user; it will no longer appear on your dashboard This action can be undone but you'll need to contact the system administrator. Are you sure you would like to continue?
                            </section>
                            <footer className="modal-card-foot">
                                <button className="button is-success" onClick={onDeleteConfirmButtonClick}>Confirm</button>
                                <button className="button" onClick={onDeselectProgramForDeletion}>Cancel</button>
                            </footer>
                        </div>
                    </div>

                    {/* Page Table */}
                    <nav className="box" style={{ borderRadius: "20px"}}>

                        {/* Title + Options */}
                        <div className="columns">
                            <div className="column">
                                <h1 className="title is-4 pb-2"><FontAwesomeIcon className="fas" icon={faTable} />&nbsp;Search Results</h1>
                            </div>
                        </div>

                        {/* Filter Panel */}
                        {/*
                        <div className="has-background-white-bis" style={{borderRadius:"15px", padding:"20px"}}>
                            <div className="columns is-12">
                                <div className="column is-half">
                                    <h1 className="subtitle is-5 is-underlined"><FontAwesomeIcon className="fas" icon={faFilter} />&nbsp;Filtering & Sorting</h1>
                                </div>
                                <div className="column is-half has-text-right">
                                    <Link onClick={onClearFilterClick}>
                                        <FontAwesomeIcon className="mdi" icon={faFilterCircleXmark} />&nbsp;Clear Filter
                                    </Link>
                                </div>
                            </div>

                            <div className="columns">
                                <div className="column">
                                    <FormSelectField
                                        label="Status"
                                        name="status"
                                        placeholder="Pick status"
                                        selectedValue={status}
                                        helpText=""
                                        onChange={(e)=>setStatus(parseInt(e.target.value))}
                                        options={ASSISTANT_STATUS_FILTER_OPTIONS}
                                        isRequired={true}
                                    />
                                </div>
                                <div className="column">
                                    <FormSelectField
                                        label="Type"
                                        name="type"
                                        placeholder="Pick program type"
                                        selectedValue={type}
                                        helpText=""
                                        onChange={(e)=>setType(parseInt(e.target.value))}
                                        options={ASSISTANT_TYPE_OF_FILTER_OPTIONS}
                                        isRequired={true}
                                    />
                                </div>
                                <div className="column">
                                    <FormSelectField
                                        label="Sort by"
                                        name="sortByValue"
                                        placeholder="Pick sorting"
                                        selectedValue={sortByValue}
                                        helpText=""
                                        onChange={(e)=>setSortByValue(e.target.value)}
                                        options={ASSISTANT_SORT_OPTIONS}
                                        isRequired={true}
                                    />
                                </div>
                            </div>
                        </div>
                        */}

                        {/* Table Contents */}
                        {isFetching
                            ?
                            <PageLoadingContent displayMessage={"Loading..."} />
                            :
                            <>
                                <FormErrorBox errors={errors} />
                                {listData && listData.results && (listData.results.length > 0 || previousCursors.length > 0)
                                    ?
                                    <div className="container">
                                        {/*
                                            ##################################################################
                                            EVERYTHING INSIDE HERE WILL ONLY BE DISPLAYED ON A DESKTOP SCREEN.
                                            ##################################################################
                                        */}
                                        <div className="is-hidden-touch" >
                                            <AdminProgramSearchResultDesktop
                                                listData={listData}
                                                listCount={listCount}
                                                setPageSize={setPageSize}
                                                pageSize={pageSize}
                                                previousCursors={previousCursors}
                                                onPreviousClicked={onPreviousClicked}
                                                onNextClicked={onNextClicked}
                                                onSelectProgramForDeletion={onSelectProgramForDeletion}
                                                sortByValue={sortByValue}
                                            />
                                        </div>

                                        {/*
                                            ###########################################################################
                                            EVERYTHING INSIDE HERE WILL ONLY BE DISPLAYED ON A TABLET OR MOBILE SCREEN.
                                            ###########################################################################
                                        */}
                                        <div className="is-fullwidth is-hidden-desktop">
                                            <AdminProgramSearchResultMobile
                                                listData={listData}
                                                listCount={listCount}
                                                setPageSize={setPageSize}
                                                pageSize={pageSize}
                                                previousCursors={previousCursors}
                                                onPreviousClicked={onPreviousClicked}
                                                onNextClicked={onNextClicked}
                                                onSelectProgramForDeletion={onSelectProgramForDeletion}
                                            />
                                        </div>
                                    </div>
                                    :
                                    <section className="hero is-medium has-background-white-ter">
                                        <div className="hero-body">
                                            <p className="title">
                                                <FontAwesomeIcon className="fas" icon={faTable} />&nbsp;No Program
                                            </p>
                                            <p className="subtitle">
                                                No program. <b><Link to="/admin/programs/search">Click here&nbsp;<FontAwesomeIcon className="mdi" icon={faArrowRight} /></Link></b> to get try another search query.
                                            </p>
                                        </div>
                                    </section>
                                }
                            </>
                        }
                        <div className="columns pt-5">
                            <div className="column is-half">
                                <Link className="button is-medium is-fullwidth-mobile" to="/admin/programs/search"><FontAwesomeIcon className="fas" icon={faArrowLeft} />&nbsp;Search Again</Link>&nbsp;
                            </div>
                            <div className="column is-half has-text-right">

                            </div>
                        </div>
                    </nav>
                </section>
            </div>
        </>
    );
}

export default AdminProgramSearchResult;
