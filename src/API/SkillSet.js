import getCustomAxios from "../Helpers/customAxios";
import { camelizeKeys, decamelizeKeys, decamelize } from 'humps';
import { DateTime } from "luxon";

import {
    DATABOUTIQUE_SKILL_SETS_API_ENDPOINT,
    DATABOUTIQUE_SKILL_SET_API_ENDPOINT,
    DATABOUTIQUE_SKILL_SET_SELECT_OPTIONS_API_ENDPOINT
} from "../Constants/API";


export function getSkillSetSelectOptionListAPI(onSuccessCallback, onErrorCallback, onDoneCallback, onUnauthorizedCallback) {
    const axios = getCustomAxios(onUnauthorizedCallback);

    // The following code will generate the url argument for the url based on the map.
    let aURL = DATABOUTIQUE_SKILL_SET_SELECT_OPTIONS_API_ENDPOINT;

    axios.get(aURL).then((successResponse) => {
        const responseData = successResponse.data;

        // Snake-case from API to camel-case for React.
        const data = camelizeKeys(responseData);

        // Return the callback data.
        onSuccessCallback(data);
    }).catch( (exception) => {
        let errors = camelizeKeys(exception);
        onErrorCallback(errors);
    }).then(onDoneCallback);
}

export function getSkillSetListAPI(filtersMap=new Map(), onSuccessCallback, onErrorCallback, onDoneCallback, onUnauthorizedCallback) {
    const axios = getCustomAxios(onUnauthorizedCallback);

    // The following code will generate the query parameters for the url based on the map.
    let aURL = DATABOUTIQUE_SKILL_SETS_API_ENDPOINT;
    filtersMap.forEach(
        (value, key) => {
            let decamelizedkey = decamelize(key)
            if (aURL.indexOf('?') > -1) {
                aURL += "&"+decamelizedkey+"="+value;
            } else {
                aURL += "?"+decamelizedkey+"="+value;
            }
        }
    )

    axios.get(aURL).then((successResponse) => {
        const responseData = successResponse.data;

        // Snake-case from API to camel-case for React.
        const data = camelizeKeys(responseData);

        // Bugfixes.
        // console.log("getSkillSetListAPI | pre-fix | results:", data);
        if (data.results !== undefined && data.results !== null && data.results.length > 0) {
            data.results.forEach(
                (item, index) => {
                    item.createdAt = DateTime.fromISO(item.createdAt).toLocaleString(DateTime.DATETIME_MED);
                    // console.log(item, index);
                }
            )
        }
        // console.log("getSkillSetListAPI | post-fix | results:", data);

        // Return the callback data.
        onSuccessCallback(data);
    }).catch( (exception) => {
        let errors = camelizeKeys(exception);
        onErrorCallback(errors);
    }).then(onDoneCallback);
}

// export function getSkillSetSelectOptionListAPI(filtersMap=new Map(), onSuccessCallback, onErrorCallback, onDoneCallback, onUnauthorizedCallback) {
//     const axios = getCustomAxios(onUnauthorizedCallback);
//
//     // The following code will generate the query parameters for the url based on the map.
//     let aURL = DATABOUTIQUE_TAGS_SELECT_OPTIONS_API_ENDPOINT;
//     filtersMap.forEach(
//         (value, key) => {
//             let decamelizedkey = decamelize(key)
//             if (aURL.indexOf('?') > -1) {
//                 aURL += "&"+decamelizedkey+"="+value;
//             } else {
//                 aURL += "?"+decamelizedkey+"="+value;
//             }
//         }
//     )
//
//     axios.get(aURL).then((successResponse) => {
//         const responseData = successResponse.data;
//
//         // Snake-case from API to camel-case for React.
//         const data = camelizeKeys(responseData);
//
//         // Bugfixes.
//         console.log("getSkillSetSelectOptionListAPI | pre-fix | results:", data);
//         if (data.results !== undefined && data.results !== null && data.results.length > 0) {
//             data.results.forEach(
//                 (item, index) => {
//                     item.createdAt = DateTime.fromISO(item.createdAt).toLocaleString(DateTime.DATETIME_MED);
//                     console.log(item, index);
//                 }
//             )
//         }
//         console.log("getSkillSetSelectOptionListAPI | post-fix | results:", data);
//
//         // Return the callback data.
//         onSuccessCallback(data);
//     }).catch( (exception) => {
//         let errors = camelizeKeys(exception);
//         onErrorCallback(errors);
//     }).then(onDoneCallback);
// }
//
export function postSkillSetCreateAPI(data, onSuccessCallback, onErrorCallback, onDoneCallback, onUnauthorizedCallback) {
    const axios = getCustomAxios(onUnauthorizedCallback);

    // To Snake-case for API from camel-case in React.
    let decamelizedData = decamelizeKeys(data);

    axios.post(DATABOUTIQUE_SKILL_SETS_API_ENDPOINT, decamelizedData).then((successResponse) => {
        const responseData = successResponse.data;

        // Snake-case from API to camel-case for React.
        const data = camelizeKeys(responseData);

        // Return the callback data.
        onSuccessCallback(data);
    }).catch( (exception) => {
        let errors = camelizeKeys(exception);
        onErrorCallback(errors);
    }).then(onDoneCallback);
}

export function getSkillSetDetailAPI(organizationID, onSuccessCallback, onErrorCallback, onDoneCallback, onUnauthorizedCallback) {
    const axios = getCustomAxios(onUnauthorizedCallback);
    axios.get(DATABOUTIQUE_SKILL_SET_API_ENDPOINT.replace("{id}", organizationID)).then((successResponse) => {
        const responseData = successResponse.data;

        // Snake-case from API to camel-case for React.
        const data = camelizeKeys(responseData);

        // For debugging purposeso pnly.
        console.log(data);

        // Return the callback data.
        onSuccessCallback(data);
    }).catch( (exception) => {
        let errors = camelizeKeys(exception);
        onErrorCallback(errors);
    }).then(onDoneCallback);
}

export function putSkillSetUpdateAPI(decamelizedData, onSuccessCallback, onErrorCallback, onDoneCallback, onUnauthorizedCallback) {
    const axios = getCustomAxios(onUnauthorizedCallback);
    axios.put(DATABOUTIQUE_SKILL_SET_API_ENDPOINT.replace("{id}", decamelizedData.id), decamelizedData).then((successResponse) => {
        const responseData = successResponse.data;

        // Snake-case from API to camel-case for React.
        const data = camelizeKeys(responseData);

        // Return the callback data.
        onSuccessCallback(data);
    }).catch( (exception) => {
        let errors = camelizeKeys(exception);
        onErrorCallback(errors);
    }).then(onDoneCallback);
}

export function deleteSkillSetAPI(id, onSuccessCallback, onErrorCallback, onDoneCallback, onUnauthorizedCallback) {
    const axios = getCustomAxios(onUnauthorizedCallback);
    axios.delete(DATABOUTIQUE_SKILL_SET_API_ENDPOINT.replace("{id}", id)).then((successResponse) => {
        const responseData = successResponse.data;

        // Snake-case from API to camel-case for React.
        const data = camelizeKeys(responseData);

        // Return the callback data.
        onSuccessCallback(data);
    }).catch( (exception) => {
        let errors = camelizeKeys(exception);
        onErrorCallback(errors);
    }).then(onDoneCallback);
}

// export function postSkillSetCreateCommentOperationAPI(organizationID, content, onSuccessCallback, onErrorCallback, onDoneCallback, onUnauthorizedCallback) {
//     const axios = getCustomAxios(onUnauthorizedCallback);
//     const data = {
//         organization_id: organizationID,
//         content: content,
//     };
//     axios.post(DATABOUTIQUE_TAG_CREATE_COMMENT_OPERATION_API_ENDPOINT, data).then((successResponse) => {
//         const responseData = successResponse.data;
//
//         // Snake-case from API to camel-case for React.
//         const data = camelizeKeys(responseData);
//
//         // Return the callback data.
//         onSuccessCallback(data);
//     }).catch( (exception) => {
//         let errors = camelizeKeys(exception);
//         onErrorCallback(errors);
//     }).then(onDoneCallback);
// }
