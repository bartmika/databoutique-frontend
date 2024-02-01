import { React, useState } from "react";
import 'bulma/css/bulma.min.css';
import './index.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { RecoilRoot } from 'recoil';

// System, Login, Register, Index, etc
import LogoutRedirector from "./Components/Gateway/LogoutRedirector";
import Login from "./Components/Gateway/Login";
import Index from "./Components/Gateway/Index";
import Register from "./Components/Gateway/Register/View";
import TopAlertBanner from "./Components/Misc/TopAlertBanner";
import Sidebar from "./Components/Menu/Sidebar";
import Topbar from "./Components/Menu/Top";
import NotFoundError from "./Components/Misc/NotFoundError";
import NotImplementedError from "./Components/Misc/NotImplementedError";
import ForgotPassword from "./Components/Gateway/ForgotPassword";
import PasswordReset from "./Components/Gateway/PasswordReset";

// Root
import RootDashboard from "./Components/Root/Dashboard";
import RootTenantList from "./Components/Root/Tenant/List";
import RootTenantDetail from "./Components/Root/Tenant/Detail";
import RootTenantUpdate from "./Components/Root/Tenant/Update";
import ToTenantRedirector from "./Components/Root/ToTenantRedirector";

// Admin Dashboard, Help
import AdminDashboard from "./Components/Admin/Dashboard/View";
import AdminDashboardCommentList from "./Components/Admin/Dashboard/Comments/List";
import AdminHelp from "./Components/Admin/Help";

// Admin Users
import AdminUserList from "./Components/Admin/User/List";
import AdminUserSearchResult from "./Components/Admin/User/Search/Result";
import AdminUserSearch from "./Components/Admin/User/Search/Search";
import AdminUserAddStep1PartA from "./Components/Admin/User/Add/Step1PartA";
import AdminUserAddStep1PartB from "./Components/Admin/User/Add/Step1PartB";
import AdminUserAddStep2 from "./Components/Admin/User/Add/Step2";
import AdminUserAddStep3 from "./Components/Admin/User/Add/Step3";
import AdminUserAddStep4 from "./Components/Admin/User/Add/Step4";
import AdminUserAddStep5 from "./Components/Admin/User/Add/Step5";
import AdminUserAddStep6 from "./Components/Admin/User/Add/Step6";
import AdminUserDetailLite from "./Components/Admin/User/DetailLite";
import AdminUserDetailFull from "./Components/Admin/User/DetailFull";
import AdminUserUpdate from "./Components/Admin/User/Update";
import AdminUserDetailThreadList from "./Components/Admin/User/Thread/List";
import AdminUserDetailThreadDetail from "./Components/Admin/User/Thread/Detail";
import AdminUserDetailCommentList from "./Components/Admin/User/DetailCommentList";
import AdminUserDetailAttachmentList from "./Components/Admin/User/Attachment/List";
import AdminUserDetailMore from "./Components/Admin/User/DetailMore";
import AdminUserDeleteOperation from "./Components/Admin/User/Operation/Delete";
import AdminUserArchiveOperation from "./Components/Admin/User/Operation/Archive";
import AdminUserUnarchiveOperation from "./Components/Admin/User/Operation/Unarchive";
import AdminUserUpgradeOperation from "./Components/Admin/User/Operation/Upgrade";
import AdminUserDowngradeOperation from "./Components/Admin/User/Operation/Downgrade";
import AdminUserAvatarOperation from "./Components/Admin/User/Operation/Avatar";
import AdminUserAttachmentAdd from "./Components/Admin/User/Attachment/Add";
import AdminUserAttachmentDetail from "./Components/Admin/User/Attachment/Detail";
import AdminUserAttachmentUpdate from "./Components/Admin/User/Attachment/Update";

// Admin Assistant Files
import AdminAssistantFileList from "./Components/Admin/AssistantFile/List/View";
import AdminAssistantFileAdd from "./Components/Admin/AssistantFile/Add/View";
import AdminAssistantFileDetail from "./Components/Admin/AssistantFile/Detail/View";
import AdminAssistantFileUpdate from "./Components/Admin/AssistantFile/Update/View";
import AdminAssistantFileSearch from "./Components/Admin/AssistantFile/Search/Search";
import AdminAssistantFileSearchResult from "./Components/Admin/AssistantFile/Search/Result";

// Admin Assitant
import AdminAssistantList from "./Components/Admin/Assistant/List/View";
import AdminAssistantAdd from "./Components/Admin/Assistant/Add/View";
import AdminAssistantDetail from "./Components/Admin/Assistant/Detail/View";
import AdminAssistantUpdate from "./Components/Admin/Assistant/Update/View";
import AdminAssistantSearch from "./Components/Admin/Assistant/Search/Search";
import AdminAssistantSearchResult from "./Components/Admin/Assistant/Search/Result";
import AdminAssistantThreadList from "./Components/Admin/Assistant/Thread/List";
import AdminAssistantThreadDetail from "./Components/Admin/Assistant/Thread/Detail";

// Admin Program
import AdminProgramList from "./Components/Admin/Program/List/View";
import AdminProgramAdd from "./Components/Admin/Program/Add/View";
import AdminProgramDetail from "./Components/Admin/Program/Detail/View";
import AdminProgramUpdate from "./Components/Admin/Program/Update/View";
import AdminProgramSearch from "./Components/Admin/Program/Search/Search";
import AdminProgramSearchResult from "./Components/Admin/Program/Search/Result";
// import AdminProgramThreadList from "./Components/Admin/Program/Thread/List";
// import AdminProgramThreadDetail from "./Components/Admin/Program/Thread/Detail";

// Program Category
import AdminProgramCategoryList from "./Components/Admin/ProgramCategory/List/View";
import AdminProgramCategoryAdd from "./Components/Admin/ProgramCategory/Add/View";
import AdminProgramCategoryDetail from "./Components/Admin/ProgramCategory/Detail/View";
import AdminProgramCategoryUpdate from "./Components/Admin/ProgramCategory/Update/View";
import AdminProgramCategorySearch from "./Components/Admin/ProgramCategory/Search/Search";
import AdminProgramCategorySearchResult from "./Components/Admin/ProgramCategory/Search/Result";

// Customer Dashboard
import CustomerDashboard from "./Components/Customer/Dashboard/View";

// Customer Upload Directory
import CustomerUploadDirectoryList from "./Components/Customer/UploadDirectory/List/View";
import CustomerUploadDirectoryAdd from "./Components/Customer/UploadDirectory/Add/View";
import CustomerUploadDirectoryDetail from "./Components/Customer/UploadDirectory/Detail/View";
import CustomerUploadDirectoryUploadFileList from "./Components/Customer/UploadDirectory/Detail/UploadFile/List/View";
import CustomerUploadDirectoryUploadFileAdd from "./Components/Customer/UploadDirectory/Detail/UploadFile/Add/View";
import CustomerUploadDirectoryUploadFileDetail from "./Components/Customer/UploadDirectory/Detail/UploadFile/Detail/View";
import CustomerUploadDirectoryUploadFileUpdate from "./Components/Customer/UploadDirectory/Detail/UploadFile/Update/View";

// Executables
import CustomerExecutableList from "./Components/Customer/Executable/List/View";
import CustomerExecutableAddStep1 from "./Components/Customer/Executable/Add/Step1/View";
import CustomerExecutableAddStep2 from "./Components/Customer/Executable/Add/Step2/View";
import CustomerExecutableDetail from "./Components/Customer/Executable/Detail/View";

// import CustomerAssistantFileList from "./Components/Customer/AssistantFile/List/View";
// // import CustomerAssistantFileAdd from "./Components/Customer/AssistantFile/Add/View";
// // import CustomerAssistantFileDetail from "./Components/Customer/AssistantFile/Detail/View";
// // import CustomerAssistantFileUpdate from "./Components/Customer/AssistantFile/Update/View";
// // import CustomerAssistantFileSearch from "./Components/Customer/AssistantFile/Search/Search";
// // import CustomerAssistantFileSearchResult from "./Components/Customer/AssistantFile/Search/Result";
// import CustomerAssistantList from "./Components/Customer/Assistant/List/View";
// // import CustomerAssistantAdd from "./Components/Customer/Assistant/Add/View";
// // import CustomerAssistantDetail from "./Components/Customer/Assistant/Detail/View";
// // import CustomerAssistantUpdate from "./Components/Customer/Assistant/Update/View";
// // import CustomerAssistantSearch from "./Components/Customer/Assistant/Search/Search";
// // import CustomerAssistantSearchResult from "./Components/Customer/Assistant/Search/Result";
// import CustomerAssistantThreadList from "./Components/Customer/AssistantThread/List/View";
// import CustomerAssistantThreadAddStep1 from "./Components/Customer/AssistantThread/Add/Step1/View";
// import CustomerAssistantThreadAddStep2Discussion from "./Components/Customer/AssistantThread/Add/Step2Discussion/View";
// import CustomerAssistantThreadAddStep3Discussion from "./Components/Customer/AssistantThread/Add/Step3Discussion/View";
// import CustomerAssistantThreadDetail from "./Components/Customer/AssistantThread/Detail/View";
// // import CustomerAssistantThreadUpdate from "./Components/Customer/AssistantThread/Update/View";
// // import CustomerAssistantThreadSearch from "./Components/Customer/AssistantThread/Search/Search";
// // import CustomerAssistantThreadSearchResult from "./Components/Customer/AssistantThread/Search/Result";


function AppRoute() {
    return (
        <div class="is-widescreen is-size-5-desktop is-size-6-tablet is-size-7-mobile">
            {/*
                NOTES FOR ABOVE
                USE THE FOLLOWING TEXT SIZES BASED ON DEVICE TYPE
                - is-size-5-desktop
                - is-size-6-tablet
                - is-size-7-mobile
            */}
            <RecoilRoot>
                <Router>
                    <TopAlertBanner />
                    <Topbar />
                    <div class="columns">
                        <Sidebar />
                        <div class="column">
                            <section class="main-content columns is-fullheight">
                                <Routes>
                                    {/*
                                    <Route exact path="/assistant-thread/:id" element={<CustomerAssistantThreadDetail/>}/>
                                    <Route exact path="/assistant-threads/add/step-3-discussion" element={<CustomerAssistantThreadAddStep3Discussion/>}/>
                                    <Route exact path="/assistant-threads/add/step-2-discussion" element={<CustomerAssistantThreadAddStep2Discussion/>}/>
                                    <Route exact path="/assistant-threads/add/step-1" element={<CustomerAssistantThreadAddStep1/>}/>
                                    <Route exact path="/assistant-threads" element={<CustomerAssistantThreadList/>}/>
                                    */}

                                    <Route exact path="/executable/:id" element={<CustomerExecutableDetail/>}/>
                                    <Route exact path="/executables/add/step-2" element={<CustomerExecutableAddStep2/>}/>
                                    <Route exact path="/executables/add/step-1" element={<CustomerExecutableAddStep1/>}/>
                                    <Route exact path="/executables" element={<CustomerExecutableList/>}/>

                                    <Route exact path="/upload-directory/:udid/upload-file/:ufid/edit" element={<CustomerUploadDirectoryUploadFileUpdate/>}/>
                                    <Route exact path="/upload-directory/:udid/upload-file/:ufid" element={<CustomerUploadDirectoryUploadFileDetail/>}/>
                                    <Route exact path="/upload-directory/:udid/upload-files/add" element={<CustomerUploadDirectoryUploadFileAdd/>}/>
                                    <Route exact path="/upload-directory/:udid/upload-files" element={<CustomerUploadDirectoryUploadFileList/>}/>
                                    <Route exact path="/upload-directory/:id" element={<CustomerUploadDirectoryDetail/>}/>
                                    <Route exact path="/upload-directories/add" element={<CustomerUploadDirectoryAdd/>}/>
                                    <Route exact path="/upload-directories" element={<CustomerUploadDirectoryList/>}/>

                                    <Route exact path="/dashboard" element={<CustomerDashboard/>}/>

                                    <Route exact path="/admin/user/:cid/downgrade" element={<AdminUserDowngradeOperation/>}/>
                                    <Route exact path="/admin/user/:cid/upgrade" element={<AdminUserUpgradeOperation/>}/>
                                    <Route exact path="/admin/user/:cid/threads" element={<AdminUserDetailThreadList/>}/>
                                    <Route exact path="/admin/user/:cid/thread/:tid" element={<AdminUserDetailThreadDetail/>}/>
                                    <Route exact path="/admin/user/:cid/unarchive" element={<AdminUserUnarchiveOperation/>}/>
                                    <Route exact path="/admin/user/:cid/archive" element={<AdminUserArchiveOperation/>}/>
                                    <Route exact path="/admin/user/:cid/permadelete" element={<AdminUserDeleteOperation/>}/>
                                    <Route exact path="/admin/user/:cid/avatar" element={<AdminUserAvatarOperation/>}/>
                                    <Route exact path="/admin/user/:cid/more" element={<AdminUserDetailMore/>}/>
                                    <Route exact path="/admin/user/:cid/attachment/:aid/edit" element={<AdminUserAttachmentUpdate/>}/>
                                    <Route exact path="/admin/user/:cid/attachment/:aid" element={<AdminUserAttachmentDetail/>}/>
                                    <Route exact path="/admin/user/:cid/attachments/add" element={<AdminUserAttachmentAdd/>}/>
                                    <Route exact path="/admin/user/:cid/attachments" element={<AdminUserDetailAttachmentList/>}/>
                                    <Route exact path="/admin/user/:cid/comments" element={<AdminUserDetailCommentList/>}/>
                                    <Route exact path="/admin/user/:cid/edit" element={<AdminUserUpdate/>}/>
                                    <Route exact path="/admin/user/:cid/detail" element={<AdminUserDetailFull/>}/>
                                    <Route exact path="/admin/user/:cid" element={<AdminUserDetailLite/>}/>
                                    <Route exact path="/admin/users/add/step-6" element={<AdminUserAddStep6/>}/>
                                    <Route exact path="/admin/users/add/step-5" element={<AdminUserAddStep5/>}/>
                                    <Route exact path="/admin/users/add/step-4" element={<AdminUserAddStep4/>}/>
                                    <Route exact path="/admin/users/add/step-3" element={<AdminUserAddStep3/>}/>
                                    <Route exact path="/admin/users/add/step-2" element={<AdminUserAddStep2/>}/>
                                    <Route exact path="/admin/users/add/step-1-results" element={<AdminUserAddStep1PartB/>}/>
                                    <Route exact path="/admin/users/add/step-1-search" element={<AdminUserAddStep1PartA/>}/>
                                    <Route exact path="/admin/users/search-result" element={<AdminUserSearchResult/>}/>
                                    <Route exact path="/admin/users/search" element={<AdminUserSearch/>}/>
                                    <Route exact path="/admin/users" element={<AdminUserList/>}/>

                                    <Route exact path="/admin/assistant/:id/threads" element={<AdminAssistantThreadList/>}/>
                                    <Route exact path="/admin/assistant/:aid/thread/:tid" element={<AdminAssistantThreadDetail/>}/>
                                    <Route exact path="/admin/assistant/:id/update" element={<AdminAssistantUpdate/>}/>
                                    <Route exact path="/admin/assistant/:id/edit" element={<AdminAssistantUpdate/>}/>
                                    <Route exact path="/admin/assistant/:id" element={<AdminAssistantDetail/>}/>
                                    <Route exact path="/admin/assistants/search-result" element={<AdminAssistantSearchResult/>}/>
                                    <Route exact path="/admin/assistants/search" element={<AdminAssistantSearch/>}/>
                                    <Route exact path="/admin/assistants/add" element={<AdminAssistantAdd/>}/>
                                    <Route exact path="/admin/assistants" element={<AdminAssistantList/>}/>

                                    {/*<Route exact path="/admin/program/:id/threads" element={<AdminProgramThreadList/>}/>
                                    <Route exact path="/admin/program/:aid/thread/:tid" element={<AdminProgramThreadDetail/>}/>*/}
                                    <Route exact path="/admin/program/:id/update" element={<AdminProgramUpdate/>}/>
                                    <Route exact path="/admin/program/:id/edit" element={<AdminProgramUpdate/>}/>
                                    <Route exact path="/admin/program/:id" element={<AdminProgramDetail/>}/>
                                    <Route exact path="/admin/programs/search-result" element={<AdminProgramSearchResult/>}/>
                                    <Route exact path="/admin/programs/search" element={<AdminProgramSearch/>}/>
                                    <Route exact path="/admin/programs/add" element={<AdminProgramAdd/>}/>
                                    <Route exact path="/admin/programs" element={<AdminProgramList/>}/>

                                    <Route exact path="/admin/program-category/:id/update" element={<AdminProgramCategoryUpdate/>}/>
                                    <Route exact path="/admin/program-category/:id/edit" element={<AdminProgramCategoryUpdate/>}/>
                                    <Route exact path="/admin/program-category/:id" element={<AdminProgramCategoryDetail/>}/>
                                    <Route exact path="/admin/program-categories/search-result" element={<AdminProgramCategorySearchResult/>}/>
                                    <Route exact path="/admin/program-categories/search" element={<AdminProgramCategorySearch/>}/>
                                    <Route exact path="/admin/program-categories/add" element={<AdminProgramCategoryAdd/>}/>
                                    <Route exact path="/admin/program-categories" element={<AdminProgramCategoryList/>}/>

                                    <Route exact path="/admin/assistant-file/:id/update" element={<AdminAssistantFileUpdate/>}/>
                                    <Route exact path="/admin/assistant-file/:id/edit" element={<AdminAssistantFileUpdate/>}/>
                                    <Route exact path="/admin/assistant-file/:id" element={<AdminAssistantFileDetail/>}/>
                                    <Route exact path="/admin/assistant-files/search-result" element={<AdminAssistantFileSearchResult/>}/>
                                    <Route exact path="/admin/assistant-files/search" element={<AdminAssistantFileSearch/>}/>
                                    <Route exact path="/admin/assistant-files/add" element={<AdminAssistantFileAdd/>}/>
                                    <Route exact path="/admin/assistant-files" element={<AdminAssistantFileList/>}/>

                                    <Route exact path="/admin/help" element={<AdminHelp/>}/>
                                    <Route exact path="/admin/dashboard" element={<AdminDashboard/>}/>
                                    <Route exact path="/admin/dashboard/comments" element={<AdminDashboardCommentList/>}/>
                                    <Route exact path="/root/tenant/:tid/start" element={<ToTenantRedirector/>}/>
                                    <Route exact path="/root/tenant/:tid/edit" element={<RootTenantUpdate/>}/>
                                    <Route exact path="/root/tenant/:tid" element={<RootTenantDetail/>}/>
                                    <Route exact path="/root/tenants" element={<RootTenantList/>}/>
                                    <Route exact path="/root/dashboard" element={<RootDashboard/>}/>
                                    <Route exact path="/register" element={<Register/>}/>
                                    <Route exact path="/login" element={<Login/>}/>
                                    <Route exact path="/logout" element={<LogoutRedirector/>}/>
                                    <Route exact path="/forgot-password" element={<ForgotPassword/>}/>
                                    <Route exact path="/password-reset" element={<PasswordReset/>}/>
                                    <Route exact path="/501" element={<NotImplementedError/>}/>
                                    <Route exact path="/" element={<Index/>}/>
                                    <Route path="*" element={<NotFoundError/>}/>
                                </Routes>
                            </section>
                            <div>
                                {/* DEVELOPERS NOTE: Mobile tab-bar menu can go here */}
                            </div>
                            <footer class="footer is-hidden">
                                <div class="container">
                                    <div class="content has-text-centered">
                                        <p>Hello</p>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </Router>
            </RecoilRoot>
        </div>
    );
}

export default AppRoute;
