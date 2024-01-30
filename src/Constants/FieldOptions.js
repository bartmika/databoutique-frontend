import {
    RESIDENTIAL_CUSTOMER_TYPE_OF_ID,
    COMMERCIAL_CUSTOMER_TYPE_OF_ID,
    USER_PHONE_TYPE_LANDLINE,
    USER_PHONE_TYPE_MOBILE,
    USER_PHONE_TYPE_WORK,
    USER_ORGANIZATION_TYPE_UNKNOWN,
    USER_ORGANIZATION_TYPE_PRIVATE,
    USER_ORGANIZATION_TYPE_NON_PROFIT,
    USER_ORGANIZATION_TYPE_GOVERNMENT,
    UNASSIGNED_ASSOCIATE_TYPE_OF_ID,
    RESIDENTIAL_ASSOCIATE_TYPE_OF_ID,
    COMMERCIAL_ASSOCIATE_TYPE_OF_ID,
    UNASSIGNED_STAFF_TYPE_OF_ID,
    RESIDENTIAL_STAFF_TYPE_OF_ID,
    COMMERCIAL_STAFF_TYPE_OF_ID,
    ASSOCIATE_PHONE_TYPE_LANDLINE,
    ASSOCIATE_PHONE_TYPE_MOBILE,
    ASSOCIATE_PHONE_TYPE_WORK,
    ASSOCIATE_ORGANIZATION_TYPE_UNKNOWN,
    ASSOCIATE_ORGANIZATION_TYPE_PRIVATE,
    ASSOCIATE_ORGANIZATION_TYPE_NON_PROFIT,
    ASSOCIATE_ORGANIZATION_TYPE_GOVERNMENT,
    STAFF_PHONE_TYPE_LANDLINE,
    STAFF_PHONE_TYPE_MOBILE,
    STAFF_PHONE_TYPE_WORK,
    STAFF_ORGANIZATION_TYPE_UNKNOWN,
    STAFF_ORGANIZATION_TYPE_PRIVATE,
    STAFF_ORGANIZATION_TYPE_NON_PROFIT,
    STAFF_ORGANIZATION_TYPE_GOVERNMENT,
    RESIDENTIAL_ORDER_TYPE_OF_ID,
    COMMERCIAL_ORDER_TYPE_OF_ID,
    UNASSIGNED_ORDER_TYPE_OF_ID,
    ACTIVITY_SHEET_STATUS_ARCHIVED,
    ACTIVITY_SHEET_STATUS_ERROR,
    ACTIVITY_SHEET_STATUS_ACCEPTED,
    ACTIVITY_SHEET_STATUS_DECLINED,
    ACTIVITY_SHEET_STATUS_PENDING,
    TASK_ITEM_CLOSE_REASON_OTHER,
    ORDER_STATUS_NEW, ORDER_STATUS_DECLINED, ORDER_STATUS_PENDING, ORDER_STATUS_CANCELLED, ORDER_STATUS_ONGOING, ORDER_STATUS_IN_PROGRESS, ORDER_STATUS_COMPLETED_BUT_UNPAID, ORDER_STATUS_COMPLETED_AND_PAID, ORDER_STATUS_ARCHIVED,
    STAFF_TYPE_EXECUTIVE, STAFF_TYPE_MANAGEMENT, STAFF_TYPE_FRONTLINE,
    ASSOCIATE_STATUS_IN_COUNTRY_OTHER,
    ASSOCIATE_STATUS_IN_COUNTRY_CANADA_CITIZEN,
    ASSOCIATE_STATUS_IN_COUNTRY_PERMANENT_RESIDENT,
    ASSOCIATE_STATUS_IN_COUNTRY_NATURALIZED_CANADIAN_CITIZEN,
    ASSOCIATE_STATUS_IN_COUNTRY_PROTECTED_PERSONS,
    ASSOCIATE_STATUS_IN_COUNTRY_PREFER_NOT_TO_SAY,
    ASSOCIATE_MARITAL_STATUS_OTHER,
    ASSOCIATE_MARITAL_STATUS_MARRIED,
    ASSOCIATE_MARITAL_STATUS_COMMON_LAW,
    ASSOCIATE_MARITAL_STATUS_DIVORCED,
    ASSOCIATE_MARITAL_STATUS_SEPARATED,
    ASSOCIATE_MARITAL_STATUS_WIDOWED,
    ASSOCIATE_MARITAL_STATUS_SINGLE,
    ASSOCIATE_MARITAL_STATUS_PREFER_NOT_TO_SAY,
    ASSOCIATE_ACCOMPLISHED_EDUCATION_OTHER,
    ASSOCIATE_ACCOMPLISHED_EDUCATION_GRADE_0_TO_8,
    ASSOCIATE_ACCOMPLISHED_EDUCATION_GRADE_9,
    ASSOCIATE_ACCOMPLISHED_EDUCATION_GRADE_10,
    ASSOCIATE_ACCOMPLISHED_EDUCATION_GRADE_11,
    ASSOCIATE_ACCOMPLISHED_EDUCATION_GRADE_12_OR_EQUIVALENT,
    ASSOCIATE_ACCOMPLISHED_EDUCATION_OAC,
    ASSOCIATE_ACCOMPLISHED_EDUCATION_CERTIFICATE_OF_APPRENTICENSHIP,
    ASSOCIATE_ACCOMPLISHED_EDUCATION_JOURNEYPERSON,
    ASSOCIATE_ACCOMPLISHED_EDUCATION_CERTIFICATE_OR_DIPLOMA,
    ASSOCIATE_ACCOMPLISHED_EDUCATION_BACHELORS_DEGREE,
    ASSOCIATE_ACCOMPLISHED_EDUCATION_POST_GRADUATE
 } from "./App";

export const PAGE_SIZE_OPTIONS = [
    { value: 2, label: '2 Rows' },
    { value: 5, label: '5 Rows' },
    { value: 10, label: '10 Rows' },
    { value: 25, label: '25 Rows' },
    { value: 50, label: '50 Rows' },
    { value: 100, label: '100 Rows' },
    { value: 250, label: '250 Rows' },
];

export const OFFSET_STEP_OPTIONS = [
    { value: 2, label: '2 Rows' },
    { value: 5, label: '5 Rows' },
    { value: 10, label: '10 Rows' },
    { value: 25, label: '25 Rows' },
    { value: 50, label: '50 Rows' },
    { value: 100, label: '100 Rows' },
    { value: 250, label: '250 Rows' },
];

export const USER_ROLE_LIST_OPTIONS = [
    { value: 1, label: 'Root' },
    { value: 2, label: 'Staff' },
    { value: 3, label: 'Customer' },
];

export const USER_ROLE_LIST_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...USER_ROLE_LIST_OPTIONS
];

export const ORGANIZATION_STATUS_LIST_OPTIONS = [
    { value: 0, label: 'All' },
    { value: 1, label: 'Waiting for receiving' },
    { value: 2, label: 'Processing' },
    { value: 3, label: 'In Review' },
    { value: 4, label: 'Reviewed' },
    { value: 5, label: 'Sent back' },
];

export const USER_STATUS_LIST_OPTIONS = [
    { value: 0, label: 'All' },
    { value: 1, label: 'Active' },
    { value: 100, label: 'Archived' },
];

export const USER_ROLES = []

//----------------------------------------------------------------------------//
//                                Clients                                     //
//----------------------------------------------------------------------------//

export const USER_SORT_OPTIONS = [
    { value: "join_date,ASC", label: 'Join Date 2000 -> 2023' },
    { value: "join_date,DESC", label: 'Join Date 2023 -> 2000' },
    { value: "lexical_name,ASC", label: 'Last Name A -> Z' },
    { value: "lexical_name,DESC", label: 'Last Name Z -> A' },
];

export const USER_STATUS_FILTER_OPTIONS = [
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];

export const USER_TYPE_OF_FILTER_OPTIONS = [
    { value: 0, label: 'All' },
    { value: RESIDENTIAL_CUSTOMER_TYPE_OF_ID, label: 'Residential' },
    { value: COMMERCIAL_CUSTOMER_TYPE_OF_ID, label: 'Commercial' },
];

export const USER_PHONE_TYPE_OF_MAP = {
    [USER_PHONE_TYPE_LANDLINE]: "Landline",
    [USER_PHONE_TYPE_MOBILE]: "Mobile",
    [USER_PHONE_TYPE_WORK]: "Work",
};

export const USER_PHONE_TYPE_OF_OPTIONS = [
    { value: USER_PHONE_TYPE_LANDLINE, label: 'Landline' },
    { value: USER_PHONE_TYPE_MOBILE, label: 'Mobile' },
    { value: USER_PHONE_TYPE_WORK, label: 'Work' },
];

export const USER_PHONE_TYPE_OF_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...USER_PHONE_TYPE_OF_OPTIONS
];

export const USER_ORGANIZATION_TYPE_OPTIONS = [
    { value: USER_ORGANIZATION_TYPE_PRIVATE, label: 'Private' },
    { value: USER_ORGANIZATION_TYPE_NON_PROFIT, label: 'Non-profit' },
    { value: USER_ORGANIZATION_TYPE_GOVERNMENT, label: 'Government' },
];

export const USER_ORGANIZATION_TYPE_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...USER_ORGANIZATION_TYPE_OPTIONS
];

export const USER_STATUS_OPTIONS = [
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];

export const USER_STATUS_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...USER_STATUS_OPTIONS
];

//----------------------------------------------------------------------------//
//                               Attachments                                  //
//----------------------------------------------------------------------------//

export const ATTACHMENT_STATES = {
    1: "Active",
    2: "Archived"
}

//----------------------------------------------------------------------------//
//                               Associate                                    //
//----------------------------------------------------------------------------//

export const ASSOCIATE_SORT_OPTIONS = [
    { value: "join_date,ASC", label: 'Join Date 2000 -> 2023' },
    { value: "join_date,DESC", label: 'Join Date 2023 -> 2000' },
    { value: "lexical_name,ASC", label: 'Last Name A -> Z' },
    { value: "lexical_name,DESC", label: 'Last Name Z -> A' },
];

export const ASSOCIATE_STATUS_FILTER_OPTIONS = [
    { value: 0, label: 'All' },
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];

export const ASSOCIATE_TYPE_OF_FILTER_OPTIONS = [
    { value: 0, label: 'All' },
    { value: RESIDENTIAL_ASSOCIATE_TYPE_OF_ID, label: 'Residential' },
    { value: COMMERCIAL_ASSOCIATE_TYPE_OF_ID, label: 'Commercial' },
];

export const ASSOCIATE_PHONE_TYPE_OF_OPTIONS = [
    { value: ASSOCIATE_PHONE_TYPE_LANDLINE, label: 'Landline' },
    { value: ASSOCIATE_PHONE_TYPE_MOBILE, label: 'Mobile' },
    { value: ASSOCIATE_PHONE_TYPE_WORK, label: 'Work' },
];

export const ASSOCIATE_PHONE_TYPE_OF_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...ASSOCIATE_PHONE_TYPE_OF_OPTIONS
];

export const ASSOCIATE_ORGANIZATION_TYPE_OPTIONS = [
    { value: ASSOCIATE_ORGANIZATION_TYPE_PRIVATE, label: 'Private' },
    { value: ASSOCIATE_ORGANIZATION_TYPE_NON_PROFIT, label: 'Non-profit' },
    { value: ASSOCIATE_ORGANIZATION_TYPE_GOVERNMENT, label: 'Government' },
];

export const ASSOCIATE_ORGANIZATION_TYPE_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...ASSOCIATE_ORGANIZATION_TYPE_OPTIONS
];

export const ASSOCIATE_STATUS_IN_COUNTRY_OPTIONS = [
    { value: ASSOCIATE_STATUS_IN_COUNTRY_CANADA_CITIZEN, label: 'Canadian Citizen' },
    { value: ASSOCIATE_STATUS_IN_COUNTRY_PERMANENT_RESIDENT, label: 'Permanent Resident' },
    { value: ASSOCIATE_STATUS_IN_COUNTRY_NATURALIZED_CANADIAN_CITIZEN, label: 'Naturalized Canadian Citizen' },
    { value: ASSOCIATE_STATUS_IN_COUNTRY_PROTECTED_PERSONS, label: 'Protected Persons' },
    { value: ASSOCIATE_STATUS_IN_COUNTRY_PREFER_NOT_TO_SAY, label: 'Prefer not to say' },
    { value: ASSOCIATE_STATUS_IN_COUNTRY_OTHER, label: 'Other' },
];

export const ASSOCIATE_STATUS_IN_COUNTRY_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...ASSOCIATE_STATUS_IN_COUNTRY_OPTIONS
];

export const ASSOCIATE_MARITAL_STATUS_OPTIONS = [
    { value: ASSOCIATE_MARITAL_STATUS_MARRIED, label: 'Married' },
    { value: ASSOCIATE_MARITAL_STATUS_COMMON_LAW, label: 'Common Law' },
    { value: ASSOCIATE_MARITAL_STATUS_DIVORCED, label: 'Divorced' },
    { value: ASSOCIATE_MARITAL_STATUS_SEPARATED, label: 'Separated' },
    { value: ASSOCIATE_MARITAL_STATUS_WIDOWED, label: 'Widowed' },
    { value: ASSOCIATE_MARITAL_STATUS_SINGLE, label: 'Single' },
    { value: ASSOCIATE_MARITAL_STATUS_PREFER_NOT_TO_SAY, label: 'Prefer not to say' },
    { value: ASSOCIATE_MARITAL_STATUS_OTHER, label: 'Other' },
];

export const ASSOCIATE_MARITAL_STATUS_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...ASSOCIATE_MARITAL_STATUS_OPTIONS
];

export const ASSOCIATE_ACCOMPLISHED_EDUCATION_OPTIONS = [
    { value: ASSOCIATE_ACCOMPLISHED_EDUCATION_GRADE_0_TO_8, label: 'Grade 0-8' },
    { value: ASSOCIATE_ACCOMPLISHED_EDUCATION_GRADE_9, label: 'Grade 9' },
    { value: ASSOCIATE_ACCOMPLISHED_EDUCATION_GRADE_10, label: 'Grade 10' },
    { value: ASSOCIATE_ACCOMPLISHED_EDUCATION_GRADE_11, label: 'Grade 11' },
    { value: ASSOCIATE_ACCOMPLISHED_EDUCATION_GRADE_12_OR_EQUIVALENT, label: 'Grade 12 (or equivalent)' },
    { value: ASSOCIATE_ACCOMPLISHED_EDUCATION_OAC, label: 'OAC' },
    { value: ASSOCIATE_ACCOMPLISHED_EDUCATION_CERTIFICATE_OF_APPRENTICENSHIP, label: 'Certificate of Apprenticeship' },
    { value: ASSOCIATE_ACCOMPLISHED_EDUCATION_JOURNEYPERSON, label: 'Journeyperson' },
    { value: ASSOCIATE_ACCOMPLISHED_EDUCATION_CERTIFICATE_OR_DIPLOMA, label: 'Certificate/Diploma' },
    { value: ASSOCIATE_ACCOMPLISHED_EDUCATION_BACHELORS_DEGREE, label: 'Bachelor’s Degree' },
    { value: ASSOCIATE_ACCOMPLISHED_EDUCATION_POST_GRADUATE, label: 'Post graduate' },
    { value: ASSOCIATE_ACCOMPLISHED_EDUCATION_OTHER, label: 'Other' },
];

export const ASSOCIATE_ACCOMPLISHED_EDUCATION_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...ASSOCIATE_ACCOMPLISHED_EDUCATION_OPTIONS
];

//----------------------------------------------------------------------------//
//                           Associate Away Logs                              //
//----------------------------------------------------------------------------//

export const ASSOCIATE_AWAY_LOG_REASONS = {
    1: "Other",
    2: "Going on vacation",
    3: "Personal reasons",
    4: "Commercial insurance expired",
    5: "Policy check expired",
}

export const ASSOCIATE_AWAY_LOG_UNTIL_FURTHER_NOTICES = {
    1: "Yes",
    2: "No",
}

export const ASSOCIATE_AWAY_LOG_REASON_OPTIONS = [
    { value: 2, label: 'Going on vacation' },
    { value: 3, label: 'Personal reasons' },
    { value: 4, label: 'Commercial insurance expired' },
    { value: 5, label: 'Policy check expired' },
    { value: 1, label: 'Other' },
];

export const ASSOCIATE_AWAY_LOG_REASON_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...ASSOCIATE_AWAY_LOG_REASON_OPTIONS
];

//----------------------------------------------------------------------------//
//                                 ORDER                                      //
//----------------------------------------------------------------------------//

export const ORDER_SORT_OPTIONS = [
    { value: "assignment_date,ASC", label: 'Assignment Date 2000 -> 2023' },
    { value: "assignment_date,DESC", label: 'Assignment Date 2023 -> 2000' },
    { value: "customer_lexical_name,ASC", label: 'Client A -> Z' },
    { value: "customer_lexical_name,DESC", label: 'Client Z -> A' },
    { value: "associate_lexical_name,ASC", label: 'Associate A -> Z' },
    { value: "associate_lexical_name,DESC", label: 'Associate Z -> A' },
    { value: "start_date,ASC", label: 'Start Date 2000 -> 2023' },
    { value: "start_date,DESC", label: 'Start Date 2023 -> 2000' },
    // { value: "created_at,ASC", label: 'Creation Date 2000 -> 2023' },
    // { value: "created_at,DESC", label: 'Creation Date 2023 -> 2000' },
];

export const ORDER_STATUS_FILTER_OPTIONS = [
    { value: 0, label: 'All' },
    { value: [ORDER_STATUS_NEW], label: 'New' },
    { value: [ORDER_STATUS_DECLINED], label: 'Declined' },
    { value: [ORDER_STATUS_PENDING], label: 'Pending' },
    { value: [ORDER_STATUS_CANCELLED], label: 'Cancelled' },
    { value: [ORDER_STATUS_ONGOING], label: 'Ongoing' },
    { value: [ORDER_STATUS_IN_PROGRESS], label: 'In-progress' },
    { value: [ORDER_STATUS_COMPLETED_BUT_UNPAID], label: 'Completed and Unpaid' },
    { value: [ORDER_STATUS_COMPLETED_AND_PAID], label: 'Completed and Paid' },
    { value: [ORDER_STATUS_ARCHIVED], label: 'Archived' },
];

export const ORDER_STATUS_OPTIONS = [
    { value: [ORDER_STATUS_NEW], label: 'New' },
    { value: [ORDER_STATUS_DECLINED], label: 'Declined' },
    { value: [ORDER_STATUS_PENDING], label: 'Pending' },
    { value: [ORDER_STATUS_CANCELLED], label: 'Cancelled' },
    { value: [ORDER_STATUS_ONGOING], label: 'Ongoing' },
    { value: [ORDER_STATUS_IN_PROGRESS], label: 'In-progress' },
    { value: [ORDER_STATUS_COMPLETED_BUT_UNPAID], label: 'Completed and Unpaid' },
    { value: [ORDER_STATUS_COMPLETED_AND_PAID], label: 'Completed and Paid' },
    { value: [ORDER_STATUS_ARCHIVED], label: 'Archived' },
];

export const ORDER_TYPE_FILTER_OPTIONS = [
    { value: 0, label: 'All' },
    { value: RESIDENTIAL_ORDER_TYPE_OF_ID, label: 'Residential' },
    { value: COMMERCIAL_ORDER_TYPE_OF_ID, label: 'Commercial' },
];

export const ORDER_UNASSIGN_REASON_OPTIONS = [
    {
        value: 2,
        label: "Associate not a fit"
    },{
        value: 3,
        label: "Job bigger than thought"
    },{
        value: 4,
        label: "Client changed job requirements"
    },{
        value: 5,
        label: "Associate needs more time"
    },{
        value: 1,
        label: "Other"
    }
];

export const ORDER_UNASSIGN_REASON_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...ORDER_UNASSIGN_REASON_OPTIONS
];

//----------------------------------------------------------------------------//
//                            ACTIVITY SHEETS                                 //
//----------------------------------------------------------------------------//

export const ACTIVITY_SHEET_STATUS_MAP = {
    [ACTIVITY_SHEET_STATUS_ARCHIVED]: "Archived",
    [ACTIVITY_SHEET_STATUS_ERROR]: "Error",
    [ACTIVITY_SHEET_STATUS_ACCEPTED]: "Accepted",
    [ACTIVITY_SHEET_STATUS_DECLINED]: "Declined",
    [ACTIVITY_SHEET_STATUS_PENDING]: "Pending",
}

//----------------------------------------------------------------------------//
//                             TASK ITEMS                                     //
//----------------------------------------------------------------------------//

export const TASK_ITEM_CLOSE_REASON_MAP = {
    0: "-",
    2: "Quote was too high",
    3: "Job completed by someone else",
    5: "Work no longer needed",
    6: "Client not satisfied with Associate",
    7: "Client did work themselves",
    8: "No Associate available",
    9: "Work environment unsuitable",
    10: "Client did not return call",
    16: "Client billing issue",
    [TASK_ITEM_CLOSE_REASON_OTHER]: "Other",
}

export const TASK_ITEM_SORT_OPTIONS = [
    { value: "due_date,ASC", label: 'Due Date 2000 -> 2023' },
    { value: "due_date,DESC", label: 'Due Date 2023 -> 2000' },
    { value: "created_at,ASC", label: 'Creation Date 2000 -> 2023' },
    { value: "created_at,DESC", label: 'Creation Date 2023 -> 2000' },
];

export const TASK_ITEM_TYPE_FILTER_OPTIONS = [
    { value: 0, label: 'All' },
    { value: 1, label: 'Assigned Associate ' },
    { value: 2, label: '[Deprecated] Follow Up Did Associate And Customer Agreed To Meet]' },
    { value: 3, label: '[Deprecated] Survey' },
    { value: 4, label: '[Deprecated] Follow Up Did Associate Accept Job' },
    { value: 5, label: '[Deprecated] Update Ongoing Job' },
    { value: 6, label: 'Follow Up Did Associate Complete Job' },
    { value: 7, label: 'Follow Up Did Customer Review Associate After Job ' },
];

export const TASK_ITEM_ORDER_CANCEL_REASON_OPTIONS = [
    {
        value: 2,
        label: "Quote was too high"
    },{
        value: 3,
        label: "Job completed by someone else"
    },{
        value: 5,
        label: "Work no longer needed"
    },{
        value: 6,
        label: "Client not satisfied with Associate"
    },{
        value: 7,
        label: "Client did work themselves"
    },{
        value: 8,
        label: "No Associate available"
    },{
        value: 9,
        label: "Work environment unsuitable"
    },{
        value: 10,
        label: "Client did not return call"
    },{
        value: 11,
        label: "Associate did not have necessary equipment"
    },{
        value: 12,
        label: "Repair not possible"
    },{
        value: 13,
        label: "Could not meet deadline"
    },{
        value: 14,
        label: "Associate did not call client"
    },{
        value: 15,
        label: "Member issue"
    },{
        value: 16,
        label: "Client billing issue"
    },{
        value: 1,
        label: "Other"
    }
];

export const TASK_ITEM_ORDER_CANCEL_REASON_OPTIONS_WITH_EMPTY_OPTION = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...TASK_ITEM_ORDER_CANCEL_REASON_OPTIONS
];

export const TASK_ITEM_POSTPONE_REASON_OPTIONS = [
    {
        value: 2,
        label: "Client needs more time"
    },{
        value: 3,
        label: "Associate needs more time"
    },{
        value: 4,
        label: "Weather"
    },{
        value: 1,
        label: "Other"
    }
];

export const TASK_ITEM_POSTPONE_REASON_OPTIONS_WITH_EMPTY_OPTION = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...TASK_ITEM_POSTPONE_REASON_OPTIONS
];

export const TASK_ITEM_CLOSE_REASON_OPTIONS = [
    {
        value: 2,
        label: "Quote was too high"
    },{
        value: 3,
        label: "Job completed by someone else"
    },{
        value: 5,
        label: "Work no longer needed"
    },{
        value: 6,
        label: "Client not satisfied with Associate"
    },{
        value: 7,
        label: "Client did work themselves"
    },{
        value: 8,
        label: "No Associate available"
    },{
        value: 9,
        label: "Work environment unsuitable"
    },{
        value: 10,
        label: "Client did not return call"
    },{
        value: 16,
        label: "Client billing issue"
    },{
        value: 1,
        label: "Other"
    }
];

export const TASK_ITEM_CLOSE_REASON_OPTIONS_WITH_EMPTY_OPTION = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...TASK_ITEM_CLOSE_REASON_OPTIONS
];


export const TASK_ITEM_NO_SURVEY_CONDUCTED_REASON_OPTIONS = [
    {
        value: 2,
        label: "Unable to reach client"
    },{
        value: 3,
        label: "Client did not want to complete survey"
    },{
        value: 1,
        label: "Other"
    }
];

export const TASK_ITEM_NO_SURVEY_CONDUCTED_REASON_OPTIONS_WITH_EMPTY_OPTION = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...TASK_ITEM_NO_SURVEY_CONDUCTED_REASON_OPTIONS
];


//----------------------------------------------------------------------------//
//                                  All                                       //
//----------------------------------------------------------------------------//

export const GENDER_OPTIONS = [
    { value: 2, label: 'Man' },
    { value: 3, label: 'Women' },
    { value: 4, label: 'Transgender' },
    { value: 5, label: 'Gender non-binary' },
    { value: 6, label: 'Two Spirit' },
    { value: 7, label: 'Prefer not to say' },
    { value: 8, label: 'Do not know' },
    { value: 1, label: 'Other' },
];

export const GENDER_OPTIONS_WITH_EMPTY_OPTION = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...GENDER_OPTIONS
];

export const IDENTIFY_AS_OPTIONS = [
    // { value: 1, label: 'Other' },
    { value: 2, label: 'Prefer not to say' },
    { value: 3, label: 'Women ' },
    { value: 4, label: 'Newcomer' },
    { value: 5, label: 'Racialized Person' },
    { value: 6, label: 'Veteran' },
    { value: 7, label: 'Francophone' },
    { value: 8, label: 'Person with disability' },
    { value: 9, label: 'Inuit' },
    { value: 10, label: 'First Nations' },
    { value: 11, label: 'Metis' },
];


//----------------------------------------------------------------------------//
//                              Bulletins                                     //
//----------------------------------------------------------------------------//

export const BULLETIN_SORT_OPTIONS = [
    { value: "text,ASC", label: 'Text A -> Z' },
    { value: "text,DESC", label: 'Text Z -> A' },
    { value: "created_at,ASC", label: 'Created At 2000 -> 2024' },
    { value: "created_at,DESC", label: 'Created At 2024 -> 2000' },
];

export const BULLETIN_STATUS_FILTER_OPTIONS = [
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];


//----------------------------------------------------------------------------//
//                             Skill Sets                                     //
//----------------------------------------------------------------------------//

export const SKILL_SET_SORT_OPTIONS = [
    { value: "category,ASC", label: 'Category A -> Z' },
    { value: "category,DESC", label: 'Category Z -> A' },
    { value: "sub_category,ASC", label: 'Sub-Category A -> Z' },
    { value: "sub_category,DESC", label: 'Sub-Category Z -> A' },
    { value: "created_at,ASC", label: 'Created At 2000 -> 2024' },
    { value: "created_at,DESC", label: 'Created At 2024 -> 2000' },
];

export const SKILL_SET_STATUS_FILTER_OPTIONS = [
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];

//----------------------------------------------------------------------------//
//                           Associate Away Log                               //
//----------------------------------------------------------------------------//

export const ASSOCIATE_AWAY_LOG_SORT_OPTIONS = [
    // { value: "text,ASC", label: 'Text A -> Z' },
    // { value: "text,DESC", label: 'Text Z -> A' },
    { value: "created_at,ASC", label: 'Created At 2000 -> 2024' },
    { value: "created_at,DESC", label: 'Created At 2024 -> 2000' },
];

export const ASSOCIATE_AWAY_LOG_STATUS_FILTER_OPTIONS = [
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];

//----------------------------------------------------------------------------//
//                           Insurance Requirements                           //
//----------------------------------------------------------------------------//

export const INSURANCE_REQUIREMENT_SORT_OPTIONS = [
    // { value: "text,ASC", label: 'Text A -> Z' },
    // { value: "text,DESC", label: 'Text Z -> A' },
    { value: "created_at,ASC", label: 'Created At 2000 -> 2024' },
    { value: "created_at,DESC", label: 'Created At 2024 -> 2000' },
];

export const INSURANCE_REQUIREMENT_STATUS_FILTER_OPTIONS = [
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];

//----------------------------------------------------------------------------//
//                             Inactive Clients                               //
//----------------------------------------------------------------------------//

export const INACTIVE_USER_SORT_OPTIONS = [
    { value: "lexical_name,ASC", label: 'Last Name A -> Z' },
    { value: "lexical_name,DESC", label: 'Last Name Z -> A' },
    { value: "join_date,ASC", label: 'Join Date 2000 -> 2024' },
    { value: "join_date,DESC", label: 'Join Date 2024 -> 2000' },
];

export const INACTIVE_USER_STATUS_FILTER_OPTIONS = [
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];

export const INACTIVE_USER_DEACTIVATION_REASON_MAP = {
    0: "Not Specified",
    1: "Other",
    2: "Blacklisted",
    3: "Moved",
    4: "Deceased",
    5: "Do Not Constact",
}

export const INACTIVE_USER_DEACTIVATION_REASON_OPTIONS = [
    {
        value: 2,
        label: "Client needs more time"
    },{
        value: 3,
        label: "Associate needs more time"
    },{
        value: 4,
        label: "Weather"
    },{
        value: 1,
        label: "Other"
    }
];

export const INACTIVE_USER_DEACTIVATION_REASON_OPTIONS_WITH_EMPTY_OPTION = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...INACTIVE_USER_DEACTIVATION_REASON_OPTIONS
];

//----------------------------------------------------------------------------//
//                        How Hear About Us Items                             //
//----------------------------------------------------------------------------//

export const HOW_HEAR_ABOUT_US_ITEM_SORT_OPTIONS = [
    { value: "text,ASC", label: 'Text A -> Z' },
    { value: "text,DESC", label: 'Text Z -> A' },
    { value: "sort_number,ASC", label: 'Sort # 1 -> 9' },
    { value: "sort_number,DESC", label: 'Sort # 9 -> 1' },
];

export const HOW_HEAR_ABOUT_US_ITEM_STATUS_FILTER_OPTIONS = [
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];


//----------------------------------------------------------------------------//
//                                  Staff                                     //
//----------------------------------------------------------------------------//

export const STAFF_SORT_OPTIONS = [
    { value: "join_date,ASC", label: 'Join Date 2000 -> 2023' },
    { value: "join_date,DESC", label: 'Join Date 2023 -> 2000' },
    { value: "lexical_name,ASC", label: 'Last Name A -> Z' },
    { value: "lexical_name,DESC", label: 'Last Name Z -> A' },
];

export const STAFF_STATUS_FILTER_OPTIONS = [
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];

export const STAFF_TYPE_OF_FILTER_OPTIONS = [
    // { value: 5, label: 'Customer' },
    // { value: 4, label: 'Associate' },
    { value: 0, label: 'All' },
    { value: 3, label: 'Frontline Staff' },
    { value: 2, label: 'Management' },
    { value: 1, label: 'Executive' },
];

export const STAFF_TYPE_OF_MAP = {
    0: "All",
    3: "Frontline Staff",
    2: "Management",
    1: "Executive",
};

export const STAFF_PHONE_TYPE_OF_OPTIONS = [
    { value: STAFF_PHONE_TYPE_LANDLINE, label: 'Landline' },
    { value: STAFF_PHONE_TYPE_MOBILE, label: 'Mobile' },
    { value: STAFF_PHONE_TYPE_WORK, label: 'Work' },
];

export const STAFF_PHONE_TYPE_OF_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...STAFF_PHONE_TYPE_OF_OPTIONS
];

export const STAFF_ORGANIZATION_TYPE_OPTIONS = [
    { value: STAFF_ORGANIZATION_TYPE_PRIVATE, label: 'Private' },
    { value: STAFF_ORGANIZATION_TYPE_NON_PROFIT, label: 'Non-profit' },
    { value: STAFF_ORGANIZATION_TYPE_GOVERNMENT, label: 'Government' },
];

export const STAFF_ORGANIZATION_TYPE_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...STAFF_ORGANIZATION_TYPE_OPTIONS
];

//----------------------------------------------------------------------------//
//                                Comments                                     //
//----------------------------------------------------------------------------//

export const COMMENT_SORT_OPTIONS = [
    { value: "created_at,ASC", label: 'Creation Date 2000 -> 2023' },
    { value: "created_at,DESC", label: 'Creation Date 2023 -> 2000' },
];

export const COMMENT_STATUS_FILTER_OPTIONS = [
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];

//----------------------------------------------------------------------------//
//                                GPT Modals                                  //
//----------------------------------------------------------------------------//
// See: https://github.com/sashabaranov/go-openai/blob/eff8dc1118ea82a1b50ee316608e24d83df74d6b/completion.go

export const OPENAI_COMPLETION_MODEL_OPTIONS = [
    {
        value: "gpt-4-32k-0613",
        label: "gpt-4-32k-0613"
    },{
        value: "gpt-4-32k-0314",
        label: "gpt-4-32k-0314"
    },{
        value: "gpt-4-32k",
        label: "gpt-4-32k"
    },{
        value: "gpt-4-0613",
        label: "gpt-4-0613"
    },{
        value: "gpt-4-0314",
        label: "gpt-4-0314"
    },{
        value: "gpt-4-1106-preview",
        label: "gpt-4-1106-preview"
    },{
        value: "gpt-4-vision-preview",
        label: "gpt-4-vision-preview"
    },{
        value: "gpt-4",
        label: "gpt-4"
    },{
        value: "gpt-3.5-turbo-1106",
        label: "gpt-3.5-turbo-1106"
    },{
        value: "gpt-3.5-turbo-0613",
        label: "gpt-3.5-turbo-0613"
    },{
        value: "gpt-3.5-turbo-0301",
        label: "gpt-3.5-turbo-0301"
    },{
        value: "gpt-3.5-turbo-16k",
        label: "gpt-3.5-turbo-16k"
    },{
        value: "gpt-3.5-turbo-16k-0613",
        label: "gpt-3.5-turbo-16k-0613"
    },{
        value: "gpt-3.5-turbo",
        label: "gpt-3.5-turbo"
    },{
        value: "gpt-3.5-turbo-instruct",
        label: "gpt-3.5-turbo-instruct"
    },{
        value: "davinci-instruct-beta",
        label: "davinci-instruct-beta"
    },{
        value: "davinci",
        label: "davinci"
    },{
        value: "davinci-002",
        label: "davinci-002"
    },{
        value: "curie",
        label: "curie"
    },{
        value: "curie-002",
        label: "curie-002"
    },{
        value: "ada",
        label: "ada"
    },{
        value: "ada-002",
        label: "ada-002"
    },{
        value: "babbage",
        label: "babbage"
    },{
        value: "babbage-002",
        label: "babbage-002"
    }
];

export const OPENAI_COMPLETION_MODEL_WITH_EMPTY_OPTION = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...OPENAI_COMPLETION_MODEL_OPTIONS
];

//----------------------------------------------------------------------------//
//                             Assistant File                                 //
//----------------------------------------------------------------------------//

export const ASSISTANT_SORT_OPTIONS = [
    { value: "join_date,ASC", label: 'Join Date 2000 -> 2023' },
    { value: "join_date,DESC", label: 'Join Date 2023 -> 2000' },
    { value: "lexical_name,ASC", label: 'Last Name A -> Z' },
    { value: "lexical_name,DESC", label: 'Last Name Z -> A' },
];

export const ASSISTANT_STATUS_FILTER_OPTIONS = [
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];

export const ASSISTANT_TYPE_OF_FILTER_OPTIONS = [
    { value: 0, label: 'All' },
];

export const ASSISTANT_STATUS_OPTIONS = [
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];

export const ASSISTANT_STATUS_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...ASSISTANT_STATUS_OPTIONS
];

//----------------------------------------------------------------------------//
//                             Assistant File                                 //
//----------------------------------------------------------------------------//

export const ASSISTANT_FILE_SORT_OPTIONS = [
    { value: "join_date,ASC", label: 'Join Date 2000 -> 2023' },
    { value: "join_date,DESC", label: 'Join Date 2023 -> 2000' },
    { value: "lexical_name,ASC", label: 'Last Name A -> Z' },
    { value: "lexical_name,DESC", label: 'Last Name Z -> A' },
];

export const ASSISTANT_FILE_STATUS_FILTER_OPTIONS = [
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];

export const ASSISTANT_FILE_TYPE_OF_FILTER_OPTIONS = [
    { value: 0, label: 'All' },
];

export const ASSISTANT_FILE_STATUS_OPTIONS = [
    { value: 1, label: 'Active' },
    { value: 2, label: 'Archived' },
];

export const ASSISTANT_FILE_STATUS_OPTIONS_WITH_EMPTY_OPTIONS = [
    { value: 0, label: "Please select" }, // EMPTY OPTION
    ...ASSISTANT_FILE_STATUS_OPTIONS
];
