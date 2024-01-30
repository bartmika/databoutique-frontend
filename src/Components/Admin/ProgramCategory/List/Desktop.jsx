import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown, faChevronRight, faCalendarMinus, faCalendarPlus, faDumbbell, faCalendar, faGauge, faSearch, faEye, faPencil, faTrashCan, faPlus, faArrowRight, faTable, faArrowUpRightFromSquare, faFilter, faRefresh, faCalendarCheck, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';

import FormErrorBox from "../../../Reusable/FormErrorBox";
import PhoneTextFormatter from "../../../Reusable/EveryPage/PhoneTextFormatter";
import EmailTextFormatter from "../../../Reusable/EveryPage/EmailTextFormatter";
import { PAGE_SIZE_OPTIONS, USER_ROLES } from "../../../../Constants/FieldOptions";


function AdminClientListDesktop(props) {
    const { listData, listCount, setPageSize, pageSize, previousCursors, onPreviousClicked, onNextClicked, onSelectClientForDeletion, sortByValue } = props;
    return (
        <div className="b-table">
            <div className="table-wrapper has-mobile-cards">
                <table className="table is-fullwidth is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Created At
                                {sortByValue === "created_at,ASC" && <>&nbsp;<FontAwesomeIcon className="fas" icon={faCaretUp} /></>}
                                {sortByValue === "created_at,DESC" && <>&nbsp;<FontAwesomeIcon className="fas" icon={faCaretDown} /></>}
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData && listData.results && listData.results.map(function(datum, i){
                            return <tr>
                                <td data-label="Name">{datum.name}</td>
                                <td data-label="Created At">{datum.createdAt}</td>
                                <td className="is-actions-cell">
                                    <div className="buttons is-right">
                                        <Link to={`/admin/program-category/${datum.id}`} className="is-small">
                                            View&nbsp;<FontAwesomeIcon className="mdi" icon={faChevronRight} />
                                        </Link>
                                    </div>
                                </td>
                            </tr>;
                        })}
                    </tbody>
                </table>

                <p className="has-text-right pb-6 is-size-5">Results: {listCount}</p>

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
                                <button className="button is-info" onClick={onPreviousClicked}>Previous</button>&nbsp;
                            </>
                        }
                        {listData.hasNextPage && <>
                            <button className="button is-info" onClick={onNextClicked}>Next</button>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminClientListDesktop;
