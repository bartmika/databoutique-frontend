/**
 *  The API web-services endpoints.
 */
const HTTP_API_SERVER =  process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN;

/**
 * Gateway
 */
export const DATABOUTIQUE_API_BASE_PATH = "/api/v1";
export const DATABOUTIQUE_VERSION_ENDPOINT = "version";
export const DATABOUTIQUE_LOGIN_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/login";
export const DATABOUTIQUE_REGISTER_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/register";
export const DATABOUTIQUE_LOGOUT_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/logout";
export const DATABOUTIQUE_EXECUTIVE_VISITS_TENANT_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/executive-visit-tenant";
export const DATABOUTIQUE_DASHBOARD_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/dashboard";

/**
 * Tenants
 */
export const DATABOUTIQUE_TENANTS_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/tenants';
export const DATABOUTIQUE_TENANT_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/tenant/{id}';

/**
 * Users
 */

export const DATABOUTIQUE_USERS_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/users';
export const DATABOUTIQUE_USERS_COUNT_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/users/count';
export const DATABOUTIQUE_USER_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/user/{id}';
export const DATABOUTIQUE_USER_ARCHIVE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/users/operation/archive';
export const DATABOUTIQUE_USER_CREATE_COMMENT_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/users/operation/create-comment';
export const DATABOUTIQUE_USER_UPGRADE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/users/operation/upgrade';
export const DATABOUTIQUE_USER_DOWNGRADE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/users/operation/downgrade';
export const DATABOUTIQUE_USER_AVATAR_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/users/operation/avatar';

/**
 * Program Categories
 */
export const DATABOUTIQUE_PROGRAM_CATEGORYS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/program-categories";
export const DATABOUTIQUE_PROGRAM_CATEGORY_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/program-category/{id}";
export const DATABOUTIQUE_PROGRAM_CATEGORY_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/program-categories/select-options";

/**
 * Programs
 */
export const DATABOUTIQUE_PROGRAMS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/programs";
export const DATABOUTIQUE_PROGRAM_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/program/{id}";
export const DATABOUTIQUE_PROGRAM_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/programs/select-options";

/**
 * Files
 */
export const DATABOUTIQUE_FILES_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/files";
export const DATABOUTIQUE_FILE_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/file/{id}";
export const DATABOUTIQUE_FILE_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/files/select-options";

/**
 * Folders
 */
export const DATABOUTIQUE_FOLDERS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/folders";
export const DATABOUTIQUE_FOLDER_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/folder/{id}";
export const DATABOUTIQUE_FOLDER_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/folders/select-options";

/**
 * Executables
 */
export const DATABOUTIQUE_EXECUTABLES_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/executables";
export const DATABOUTIQUE_EXECUTABLE_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/executable/{id}";
export const DATABOUTIQUE_EXECUTABLE_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/executables/select-options";

/**
 * Executable Messages
 */
export const DATABOUTIQUE_EXECUTABLE_MESSAGES_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/executable-messages";
export const DATABOUTIQUE_EXECUTABLE_MESSAGE_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/executable-message/{id}";
export const DATABOUTIQUE_EXECUTABLE_MESSAGE_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/executable-messages/select-options";


// ---------------------------- BELOW IS DEPRECATED ---------------------------- //
/**
 * Assistant File
 */
export const DATABOUTIQUE_ASSISTANT_FILES_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/assistant-files";
export const DATABOUTIQUE_ASSISTANT_FILE_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/assistant-file/{id}";
export const DATABOUTIQUE_ASSISTANT_FILES_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/assistant-files/select-options";

/**
 * Assistant
 */
export const DATABOUTIQUE_ASSISTANTS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/assistants";
export const DATABOUTIQUE_ASSISTANT_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/assistant/{id}";
export const DATABOUTIQUE_ASSISTANT_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/assistants/select-options";

/**
 * Assistant Thread
 */
export const DATABOUTIQUE_ASSISTANT_THREADS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/assistant-threads";
export const DATABOUTIQUE_ASSISTANT_THREAD_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/assistant-thread/{id}";
export const DATABOUTIQUE_ASSISTANT_THREAD_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/assistant-threads/select-options";

/**
 * Assistant Message
 */
export const DATABOUTIQUE_ASSISTANT_MESSAGES_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/assistant-messages";
export const DATABOUTIQUE_ASSISTANT_MESSAGE_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/assistant-message/{id}";


/**
 * Clients
 */
export const DATABOUTIQUE_CLIENTS_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/customers';
export const DATABOUTIQUE_CLIENT_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/customer/{id}';
export const DATABOUTIQUE_CLIENT_ARCHIVE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/customers/operation/archive';
export const DATABOUTIQUE_CLIENT_CREATE_COMMENT_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/customers/operation/create-comment';
export const DATABOUTIQUE_CLIENT_UPGRADE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/customers/operation/upgrade';
export const DATABOUTIQUE_CLIENT_DOWNGRADE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/customers/operation/downgrade';
export const DATABOUTIQUE_CLIENT_AVATAR_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/customers/operation/avatar';



//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

/**
 * Tags
 */
export const DATABOUTIQUE_TAGS_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/tags';
export const DATABOUTIQUE_TAG_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/tag/{id}';
export const DATABOUTIQUE_TAG_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/tags/select-options";

/**
 * Skill Sets
 */
export const DATABOUTIQUE_SKILL_SETS_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/skill-sets';
export const DATABOUTIQUE_SKILL_SET_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/skill-set/{id}';
export const DATABOUTIQUE_SKILL_SET_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/skill-sets/select-options";
export const DATABOUTIQUE_SKILL_SET_ARCHIVE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/skill-sets/operation/archive';

/**
 * How Hear About Us Item
 */
export const DATABOUTIQUE_HOW_HEAR_ABOUT_US_ITEMS_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/how-hear-about-us-items';
export const DATABOUTIQUE_HOW_HEAR_ABOUT_US_ITEM_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/how-hear-about-us-item/{id}';
export const DATABOUTIQUE_HOW_HEAR_ABOUT_US_ITEM_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/how-hear-about-us-items/select-options";
export const DATABOUTIQUE_HOW_HEAR_ABOUT_US_ITEM_SELECT_OPTIONS_PUBLIC_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/select-options/how-hear-about-us-items";

/**
 * Insurance Requirement
 */
export const DATABOUTIQUE_INSURANCE_REQUIREMENTS_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/insurance-requirements';
export const DATABOUTIQUE_INSURANCE_REQUIREMENT_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/insurance-requirement/{id}';
export const DATABOUTIQUE_INSURANCE_REQUIREMENT_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/insurance-requirements/select-options";

/**
 * Vehicle Type
 */
export const DATABOUTIQUE_VEHICLE_TYPES_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/vehicle-types';
export const DATABOUTIQUE_VEHICLE_TYPE_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/vehicle-type/{id}';
export const DATABOUTIQUE_VEHICLE_TYPE_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/vehicle-types/select-options";

/**
 * Service Fee
 */
export const DATABOUTIQUE_SERVICE_FEES_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/service-fees';
export const DATABOUTIQUE_SERVICE_FEE_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/service-fee/{id}';
export const DATABOUTIQUE_SERVICE_FEE_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/service-fees/select-options";

/**
 * Attachments
 */
export const DATABOUTIQUE_ATTACHMENTS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/attachments";
export const DATABOUTIQUE_ATTACHMENT_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/attachment/{id}";

/**
 * Associates
 */
export const DATABOUTIQUE_ASSOCIATES_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/associates';
export const DATABOUTIQUE_ASSOCIATE_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/associate/{id}';
export const DATABOUTIQUE_ASSOCIATE_ARCHIVE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/associates/operation/archive';
export const DATABOUTIQUE_ASSOCIATE_CREATE_COMMENT_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/associates/operation/create-comment';
export const DATABOUTIQUE_ASSOCIATE_UPGRADE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/associates/operation/upgrade';
export const DATABOUTIQUE_ASSOCIATE_DOWNGRADE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/associates/operation/downgrade';
export const DATABOUTIQUE_ASSOCIATE_AVATAR_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/associates/operation/avatar';

/**
 * Orders
 */
export const DATABOUTIQUE_ORDERS_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/orders';
export const DATABOUTIQUE_ORDER_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/order/{id}';
export const DATABOUTIQUE_ORDER_CREATE_COMMENT_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/orders/operation/create-comment';
export const DATABOUTIQUE_ORDER_UNASSIGN_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/orders/operation/unassign';
export const DATABOUTIQUE_ORDER_CLOSE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/orders/operation/close';
export const DATABOUTIQUE_ORDER_POSTPONE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/orders/operation/postpone';
export const DATABOUTIQUE_ORDER_TRANSFER_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/orders/operation/transfer';
export const DATABOUTIQUE_ORDER_GENERATE_INVOICE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/orders/operation/generate-invoice';
export const DATABOUTIQUE_ORDER_INVOICE_DOWNLOAD_PDF_API_URL = HTTP_API_SERVER + '/api/v1/order/XXX/download-invoice-pdf';
export const DATABOUTIQUE_ORDER_CLONE_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/orders/operation/clone';

/**
 * Activity Sheets
 */
export const DATABOUTIQUE_ACTIVITY_SHEETS_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/activity-sheets';
export const DATABOUTIQUE_ACTIVITY_SHEET_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/activity-sheet/';

/**
 * Tasks
 */

export const DATABOUTIQUE_TASKS_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/tasks';
export const DATABOUTIQUE_TASKS_COUNT_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/tasks/count';
export const DATABOUTIQUE_TASK_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/task/{id}';
export const DATABOUTIQUE_TASK_ASSIGNABLE_ASSOCIATES_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/task/{id}/assignable-associates';
export const DATABOUTIQUE_TASK_ASSIGN_ASSOCIATE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/task-operations/assign-associate';
export const DATABOUTIQUE_TASK_FOLLOW_UP_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/task-operations/follow-up';
export const DATABOUTIQUE_TASK_FOLLOW_UP_PENDING_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/task-operations/follow-up-pending';
export const DATABOUTIQUE_TASK_ORDER_COMPLETION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/task-operations/order-completion';
export const DATABOUTIQUE_TASK_SURVEY_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/task-operations/survey';
export const DATABOUTIQUE_TASK_POSTPONE_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/task-operations/postpone';
export const DATABOUTIQUE_TASK_CLOSE_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/task-operations/close';

/**
 * Bulletin
 */

export const DATABOUTIQUE_BULLETINS_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/bulletins';
export const DATABOUTIQUE_BULLETIN_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/bulletin/{id}';
export const DATABOUTIQUE_BULLETIN_ARCHIVE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/bulletins/operation/archive';

/**
 * Away Log
 */
export const DATABOUTIQUE_AWAY_LOG_LIST_API_URL = HTTP_API_SERVER + '/api/v1/associate-away-logs';
export const DATABOUTIQUE_AWAY_LOG_DETAIL_API_URL = HTTP_API_SERVER + '/api/v1/associate-away-log/{id}';

/**
 * Associate
 */

export const DATABOUTIQUE_ASSOCIATE_LIST_API_URL = HTTP_API_SERVER + '/api/v1/associates';
export const DATABOUTIQUE_ASSOCIATE_DETAIL_API_URL = HTTP_API_SERVER + '/api/v1/associate/';
export const DATABOUTIQUE_ASSOCIATE_COMMENT_LIST_API_URL = HTTP_API_SERVER + '/api/v1/associate-comments';
export const DATABOUTIQUE_ASSOCIATE_CONTACT_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/associate/XXX/contact';
export const DATABOUTIQUE_ASSOCIATE_ADDRESS_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/associate/XXX/address';
export const DATABOUTIQUE_ASSOCIATE_ACCOUNT_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/associate/XXX/account';
export const DATABOUTIQUE_ASSOCIATE_METRICS_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/associate/XXX/metrics';
export const DATABOUTIQUE_ASSOCIATE_FILE_LIST_API_URL = HTTP_API_SERVER + '/api/v1/associate-files';
export const DATABOUTIQUE_ASSOCIATE_FILE_ARCHIVE_API_URL = HTTP_API_SERVER + '/api/v1/associate-file/XXX/';
export const DATABOUTIQUE_ASSOCIATE_AVATAR_CREATE_OR_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/associate-operations/upload-avatar';
export const DATABOUTIQUE_ASSOCIATE_BALANCE_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/associate-operations/balance';
export const DATABOUTIQUE_ASSOCIATE_CHANGE_PASSWORD_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/associate-operations/password';
export const DATABOUTIQUE_ASSOCIATE_UPGRADE_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/associate-operations/upgrade-residential';
export const DATABOUTIQUE_ASSOCIATE_DOWNGRADE_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/associate-operations/downgrade-commercial';
export const DATABOUTIQUE_ASSOCIATE_ARCHIVE_API_URL = HTTP_API_SERVER + '/api/v1/associate-operations/archive';
export const DATABOUTIQUE_ASSOCIATE_PERMANENTLY_DELETE_UPGRADE_API_URL = HTTP_API_SERVER + '/api/v1/associate-operations/permanently-delete';
export const DATABOUTIQUE_ASSOCIATES_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/associates/select-options";

/**
 * Staff
 */

export const DATABOUTIQUE_STAFF_LIST_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/staffs';
export const DATABOUTIQUE_STAFF_DETAIL_API_ENDPOINT  = HTTP_API_SERVER + '/api/v1/staff/{id}'
export const DATABOUTIQUE_STAFF_COMMENT_LIST_API_URL = HTTP_API_SERVER + '/api/v1/staff-comments';
export const DATABOUTIQUE_STAFF_CREATE_COMMENT_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/staffs/operation/create-comment';
export const DATABOUTIQUE_STAFF_ADDRESS_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/staff/XXX/address';
export const DATABOUTIQUE_STAFF_ACCOUNT_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/staff/XXX/account';
export const DATABOUTIQUE_STAFF_METRICS_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/staff/XXX/metrics';
export const DATABOUTIQUE_STAFF_UPGRADE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/staffs/operation/upgrade';
export const DATABOUTIQUE_STAFF_DOWNGRADE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/staffs/operation/downgrade';
export const DATABOUTIQUE_STAFF_CHANGE_PASSWORD_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/staffs/operation/change-password';
export const DATABOUTIQUE_STAFF_AVATAR_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/staffs/operation/avatar';
export const DATABOUTIQUE_STAFF_ARCHIVE_OPERATION_API_ENDPOINT = HTTP_API_SERVER + '/api/v1/staffs/operation/archive';
export const DATABOUTIQUE_STAFF_PERMANENTLY_DELETE_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/staffs/operation/permanently-delete';
export const DATABOUTIQUE_STAFF_SELECT_OPTIONS_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/staffs/select-options";

/**
 * Report
 */

export const DATABOUTIQUE_REPORT_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/report/{reportID}";

/**
 * Comments
 */

export const DATABOUTIQUE_COMMENT_LIST_API_URL = HTTP_API_SERVER + '/api/v1/comments';


//
// Continue below ...
//


export const DATABOUTIQUE_FORGOT_PASSWORD_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/forgot-password";
export const DATABOUTIQUE_PASSWORD_RESET_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/password-reset";
export const DATABOUTIQUE_REFRESH_TOKEN_API_ENDPOINT = HTTP_API_SERVER + "/api/v1/refresh-token";
export const DATABOUTIQUE_REFRESH_TOKEN_API_URL = HTTP_API_SERVER + '/api/v1/refresh-token';
export const DATABOUTIQUE_PROFILE_API_URL = HTTP_API_SERVER + '/api/v1/profile';
export const DATABOUTIQUE_DASHBOARD_API_URL = HTTP_API_SERVER + '/api/v1/dashboard';
export const DATABOUTIQUE_NAVIGATION_API_URL = HTTP_API_SERVER + '/api/v1/navigation';
export const DATABOUTIQUE_CLIENT_LIST_API_URL = HTTP_API_SERVER + '/api/v1/customers';
export const DATABOUTIQUE_CLIENT_COUNT_API_URL = HTTP_API_SERVER + '/api/v1/customers/count';
export const DATABOUTIQUE_CLIENT_DETAIL_API_URL = HTTP_API_SERVER + '/api/v1/customer/';
export const DATABOUTIQUE_CLIENT_ARCHIVE_API_URL = HTTP_API_SERVER + '/api/v1/customer-operations/archive';
export const DATABOUTIQUE_CLIENT_REZ_UPGRADE_API_URL = HTTP_API_SERVER + '/api/v1/customer-operations/upgrade-residential';
export const DATABOUTIQUE_CLIENT_PERMANENTLY_DELETE_UPGRADE_API_URL = HTTP_API_SERVER + '/api/v1/customer-operations/permanently-delete';
export const DATABOUTIQUE_CLIENT_AVATAR_CREATE_OR_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/customer-operations/upload-avatar';
export const DATABOUTIQUE_CLIENT_COMMENT_LIST_API_URL = HTTP_API_SERVER + '/api/v1/customer-comments';
export const DATABOUTIQUE_CLIENT_FILE_LIST_API_URL = HTTP_API_SERVER + '/api/v1/customer-files';
export const DATABOUTIQUE_CLIENT_FILE_ARCHIVE_API_URL = HTTP_API_SERVER + '/api/v1/customer-file/XXX/';
export const DATABOUTIQUE_CLIENT_CONTACT_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/customer/XXX/contact';
export const DATABOUTIQUE_CLIENT_ADDRESS_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/customer/XXX/address';
export const DATABOUTIQUE_CLIENT_METRICS_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/customer/XXX/metrics';
export const DATABOUTIQUE_ORDER_LIST_API_URL = HTTP_API_SERVER + '/api/v1/orders';
export const DATABOUTIQUE_ORDER_INVOICE_RETRIEVE_API_URL = HTTP_API_SERVER + '/api/v1/order/XXX/invoice';
export const DATABOUTIQUE_ORDER_DETAIL_API_URL = HTTP_API_SERVER + '/api/v1/order/';
export const DATABOUTIQUE_ORDER_LITE_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/order/XXX/lite';
export const DATABOUTIQUE_ORDER_FINANCIAL_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/order/XXX/financial';
export const DATABOUTIQUE_ORDER_COMMENT_LIST_API_URL = HTTP_API_SERVER + '/api/v1/order-comments';
export const DATABOUTIQUE_ORDER_TRANSFER_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/order-operations/transfer';
export const DATABOUTIQUE_ORDER_UNASSIGN_ASSOCIATE_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/order-operations/unassign';
export const DATABOUTIQUE_ORDER_CLOSE_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/order-operations/close';
export const DATABOUTIQUE_ORDER_REOPEN_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/order-operations/reopen';
export const DATABOUTIQUE_ORDER_POSTPONE_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/order-operations/postpone';
export const DATABOUTIQUE_TASK_ORDER_COMPLETION_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/order-operations/order-completion';
export const DATABOUTIQUE_ORDER_INVOICE_OPERATION_API_URL = HTTP_API_SERVER + '/api/v1/order-operations/invoice';
export const DATABOUTIQUE_ORDER_FILE_LIST_API_URL = HTTP_API_SERVER + '/api/v1/order-files';
export const DATABOUTIQUE_ORDER_FILE_ARCHIVE_API_URL = HTTP_API_SERVER + '/api/v1/order-file/XXX/';
export const DATABOUTIQUE_MY_ORDER_LIST_API_URL = HTTP_API_SERVER + '/api/v1/my-orders';
export const DATABOUTIQUE_MY_ORDER_DETAIL_API_URL = HTTP_API_SERVER + '/api/v1/my-order/';
export const DATABOUTIQUE_INVOICE_FIRST_SECTION_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/order/XXX/invoice/first-section';
export const DATABOUTIQUE_INVOICE_SECOND_SECTION_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/order/XXX/invoice/second-section';
export const DATABOUTIQUE_INVOICE_THIRD_SECTION_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/order/XXX/invoice/third-section';
export const DATABOUTIQUE_DEPOSIT_LIST_API_URL = HTTP_API_SERVER + '/api/v1/order/XXX/deposits';
export const DATABOUTIQUE_DEPOSIT_DETAIL_API_URL = HTTP_API_SERVER + '/api/v1/order/XXX/deposit/YYY';
export const DATABOUTIQUE_TASK_AVAILABLE_ASSOCIATE_LIST_CREATE_API_URL = 'task-operations/available-associates';
export const DATABOUTIQUE_FINANCIAL_LIST_API_URL = HTTP_API_SERVER + '/api/v1/financials';
export const DATABOUTIQUE_FINANCIAL_DETAIL_API_URL = HTTP_API_SERVER + '/api/v1/financial/';
export const DATABOUTIQUE_PRIVATE_FILE_LIST_API_URL = HTTP_API_SERVER + '/api/v1/private-files';
export const DATABOUTIQUE_PRIVATE_FILE_DETAIL_API_URL = HTTP_API_SERVER + '/api/v1/private-file/';
export const DATABOUTIQUE_BULLETIN_BOARD_ITEM_LIST_API_URL = HTTP_API_SERVER + '/api/v1/bulletin-board-items';
export const DATABOUTIQUE_BULLETIN_BOARD_ITEM_DETAIL_API_URL = HTTP_API_SERVER + '/api/v1/bulletin-board-item/';
export const DATABOUTIQUE_INSURANCE_REQUIREMENT_LIST_API_URL = HTTP_API_SERVER + '/api/v1/insurance-requirements';
export const DATABOUTIQUE_INSURANCE_REQUIREMENT_DETAIL_API_URL = HTTP_API_SERVER + '/api/v1/insurance-requirement/';
export const DATABOUTIQUE_SERVICE_FEE_LIST_API_URL = HTTP_API_SERVER + '/api/v1/order-service-fees';
export const DATABOUTIQUE_SERVICE_FEE_DETAIL_API_URL = HTTP_API_SERVER + '/api/v1/order-service-fee/';
export const DATABOUTIQUE_ARCHIVED_CLIENT_LIST_API_URL = HTTP_API_SERVER + '/api/v1/deactivated-customers';
export const DATABOUTIQUE_VEHICLE_TYPE_LIST_API_URL = HTTP_API_SERVER + '/api/v1/vehicle-types';
export const DATABOUTIQUE_VEHICLE_TYPE_DETAIL_API_URL = HTTP_API_SERVER + '/api/v1/vehicle-type/';
export const DATABOUTIQUE_PARTNER_LIST_API_URL = HTTP_API_SERVER + '/api/v1/partners';
export const DATABOUTIQUE_PARTNER_DETAIL_API_URL = HTTP_API_SERVER + '/api/v1/partner/';
export const DATABOUTIQUE_PARTNER_ARCHIVE_API_URL = HTTP_API_SERVER + '/api/v1/partner-operations/archive';
export const DATABOUTIQUE_PARTNER_REZ_UPGRADE_API_URL = HTTP_API_SERVER + '/api/v1/partner-operations/upgrade-residential';
export const DATABOUTIQUE_PARTNER_PERMANENTLY_DELETE_UPGRADE_API_URL = HTTP_API_SERVER + '/api/v1/partner-operations/permanently-delete';
export const DATABOUTIQUE_PARTNER_AVATAR_CREATE_OR_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/partner-operations/upload-avatar';
export const DATABOUTIQUE_PARTNER_COMMENT_LIST_API_URL = HTTP_API_SERVER + '/api/v1/partner-comments';
export const DATABOUTIQUE_PARTNER_FILE_LIST_API_URL = HTTP_API_SERVER + '/api/v1/partner-files';
export const DATABOUTIQUE_PARTNER_FILE_ARCHIVE_API_URL = HTTP_API_SERVER + '/api/v1/partner-file/XXX/';
export const DATABOUTIQUE_PARTNER_CONTACT_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/partner/XXX/contact';
export const DATABOUTIQUE_PARTNER_ADDRESS_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/partner/XXX/address';
export const DATABOUTIQUE_PARTNER_METRICS_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/partner/XXX/metrics';
export const DATABOUTIQUE_REPORT_ONE_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/1';
export const DATABOUTIQUE_REPORT_TWO_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/2';
export const DATABOUTIQUE_REPORT_THREE_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/3';
export const DATABOUTIQUE_REPORT_FOUR_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/4';
export const DATABOUTIQUE_REPORT_FIVE_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/5';
export const DATABOUTIQUE_REPORT_SIX_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/6';
export const DATABOUTIQUE_REPORT_SEVEN_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/7';
export const DATABOUTIQUE_REPORT_EIGHT_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/8';
export const DATABOUTIQUE_REPORT_NINE_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/9';
export const DATABOUTIQUE_REPORT_TEN_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/10';
export const DATABOUTIQUE_REPORT_ELEVEN_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/11';
export const DATABOUTIQUE_REPORT_TWELVE_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/12';
export const DATABOUTIQUE_REPORT_THIRTEEN_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/13';
export const DATABOUTIQUE_REPORT_FOURTEEN_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/14';
export const DATABOUTIQUE_REPORT_FIFTHTEEN_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/15';
export const DATABOUTIQUE_REPORT_SIXTEEN_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/16';
export const DATABOUTIQUE_REPORT_SEVENTEEN_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/17';
export const DATABOUTIQUE_REPORT_EIGHTEEN_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/18';
export const DATABOUTIQUE_REPORT_NINETEEN_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/19';
export const DATABOUTIQUE_REPORT_TWENTY_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/20';
export const DATABOUTIQUE_REPORT_TWENTY_ONE_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/21';
export const DATABOUTIQUE_REPORT_TWENTY_TWO_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/22';
export const DATABOUTIQUE_REPORT_TWENTY_THREE_CSV_DOWNLOAD_API_URL = HTTP_API_SERVER + '/api/v1/download-report/23';
export const DATABOUTIQUE_ONGOING_ORDER_LIST_API_URL = HTTP_API_SERVER + '/api/v1/ongoing-orders';
export const DATABOUTIQUE_ONGOING_ORDER_DETAIL_API_URL = HTTP_API_SERVER + '/api/v1/ongoing-order/';
export const DATABOUTIQUE_ONGOING_ORDER_COMMENT_LIST_API_URL = HTTP_API_SERVER + '/api/v1/ongoing-order-comments';
export const DATABOUTIQUE_ONGOING_ORDER_RETRIEVE_UPDATE_API_URL = HTTP_API_SERVER + '/api/v1/v2/ongoing-order/XXX/';
export const DATABOUTIQUE_STAFF_FILE_LIST_API_URL = HTTP_API_SERVER + '/api/v1/staff-files';
export const DATABOUTIQUE_STAFF_FILE_ARCHIVE_API_URL = HTTP_API_SERVER + '/api/v1/staff-file/XXX/';
export const DATABOUTIQUE_TAG_ITEM_SEARCH_LIST_API_URL = HTTP_API_SERVER + '/api/v1/v1/search';
