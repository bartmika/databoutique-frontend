import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCalendarMinus, faCalendarPlus, faDumbbell, faCalendar, faGauge, faSearch, faEye, faPencil, faTrashCan, faPlus, faArrowRight, faTable, faArrowUpRightFromSquare, faFilter, faRefresh, faCalendarCheck, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';

import FormErrorBox from "../../../../Reusable/FormErrorBox";
import { PAGE_SIZE_OPTIONS } from "../../../../../Constants/FieldOptions";

/*
Display for both tablet and mobile.
*/
function AdminClientListMobile(props) {
    const { listData, listCount, setPageSize, pageSize, previousCursors, onPreviousClicked, onNextClicked, onSelectClientForDeletion, onPick } = props;
    return (
        <>
            {listData && listData.results && listData.results.map(function(datum, i){
                return <div className="mb-5">
                    <hr />
                    <strong>Name:</strong>&nbsp;{datum.name}
                    <br />
                    <br />
                    <strong>Description:</strong>&nbsp;{datum.description}
                    <br />
                    <br />
                    <Link onClick={(e)=>onPick(datum.id)} className="button is-primary is-fullwidth-mobile" type="button">
                        Pick&nbsp;<FontAwesomeIcon className="mdi" icon={faChevronRight} />
                    </Link>

                </div>;
            })}

            <div className="columns">
                <div className="column is-half">
                    <span className="select">
                        <select className={`input has-text-grey-light`}
                                 name="pageSize"
                             onChange={(e)=>setPageSize(parseInt(e.target.value))}>
                            {PAGE_SIZE_OPTIONS.map(function(option, i){
                                return <option selected={pageSize === option.value} value={option.value}>{option.label}</option>;
                            })}
                        </select>
                    </span>

                </div>
                <div className="column is-half has-text-right">
                    {previousCursors.length > 0 &&
                        <>
                            <button className="button is-info is-fullwidth-mobile" onClick={onPreviousClicked}>Previous</button>&nbsp;
                        </>
                    }
                    {listData.hasNextPage && <>
                        <button className="button is-info is-fullwidth-mobile" onClick={onNextClicked}>Next</button>
                    </>}
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <p className="has-text-right pb-6 is-size-5">Results: {listCount}</p>
                </div>
            </div>
        </>
    );
}

export default AdminClientListMobile;
