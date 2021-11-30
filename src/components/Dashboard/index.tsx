import React, { useLayoutEffect } from 'react'

export const Dashboard = () => {
    useLayoutEffect(() => {
    }, [])
    return (
        <div id="content" className="main-content">
            <div className="layout-px-spacing">
                <div className="page-header">
                    <div className="page-title">
                        <h3>Orders</h3>
                    </div>
                </div>
                <div className="row layout-spacing layout-top-spacing" id="cancel-row">
                    <div className="col-lg-12">
                        <div className="widget-content searchable-container list">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-5 col-sm-7 filtered-list-search layout-spacing align-self-center">
                                    <form className="form-inline my-2 my-lg-0">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
                                            <input type="text" className="form-control product-search" id="input-search" placeholder="Search Contacts..." />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xl-8 col-lg-7 col-md-7 col-sm-5 text-sm-right text-center layout-spacing align-self-center">
                                    <div className="d-flex justify-content-sm-end justify-content-center">
                                        <svg id="btn-add-contact" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={20} y1={8} x2={20} y2={14} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                        <div className="switch align-self-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-list view-list active-view"><line x1={8} y1={6} x2={21} y2={6} /><line x1={8} y1={12} x2={21} y2={12} /><line x1={8} y1={18} x2={21} y2={18} /><line x1={3} y1={6} x2={3} y2={6} /><line x1={3} y1={12} x2={3} y2={12} /><line x1={3} y1={18} x2={3} y2={18} /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid view-grid"><rect x={3} y={3} width={7} height={7} /><rect x={14} y={3} width={7} height={7} /><rect x={14} y={14} width={7} height={7} /><rect x={3} y={14} width={7} height={7} /></svg>
                                        </div>
                                    </div>

                                    {/* Modal */}
                                    <div className="modal fade show" id="addContactModal" tabIndex={-1} role="dialog" aria-labelledby="addContactModalTitle" aria-modal="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <i className="flaticon-cancel-12 close" data-dismiss="modal" />
                                                    <div className="add-contact-box">
                                                        <div className="add-contact-content">
                                                            <form id="addContactModalTitle">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="contact-name">
                                                                            <i className="flaticon-user-11" />
                                                                            <input type="text" id="c-name" className="form-control" placeholder="Name" />
                                                                            <span className="validation-text" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="contact-email">
                                                                            <i className="flaticon-mail-26" />
                                                                            <input type="text" id="c-email" className="form-control" placeholder="Email" />
                                                                            <span className="validation-text" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="contact-occupation">
                                                                            <i className="flaticon-fill-area" />
                                                                            <input type="text" id="c-occupation" className="form-control" placeholder="Occupation" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="contact-phone">
                                                                            <i className="flaticon-telephone" />
                                                                            <input type="text" id="c-phone" className="form-control" placeholder="Phone" />
                                                                            <span className="validation-text" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="contact-location">
                                                                            <i className="flaticon-location-1" />
                                                                            <input type="text" id="c-location" className="form-control" placeholder="Location" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button id="btn-edit" className="float-left btn">Save</button>
                                                    <button className="btn" data-dismiss="modal"> <i className="flaticon-delete-1" /> Discard</button>
                                                    <button id="btn-add" className="btn">Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="searchable-items list">
                                <div className="items items-header-section">
                                    <div className="item-content">
                                        <div className="">
                                            <div className="n-chk align-self-center text-center">
                                                <label className="new-control new-checkbox checkbox-primary">
                                                    <input type="checkbox" className="new-control-input" id="contact-check-all" />
                                                    <span className="new-control-indicator" />
                                                </label>
                                            </div>
                                            <h4>Name</h4>
                                        </div>
                                        <div className="user-email">
                                            <h4>Email</h4>
                                        </div>
                                        <div className="user-location">
                                            <h4 style={{ marginLeft: 0 }}>Location</h4>
                                        </div>
                                        <div className="user-phone">
                                            <h4 style={{ marginLeft: 3 }}>Phone</h4>
                                        </div>
                                        <div className="action-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2  delete-multiple"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="item-content">
                                        <div className="user-profile">
                                            <div className="n-chk align-self-center text-center">
                                                <label className="new-control new-checkbox checkbox-primary">
                                                    <input type="checkbox" className="new-control-input contact-chkbox" />
                                                    <span className="new-control-indicator" />
                                                </label>
                                            </div>
                                            <img src="/assets/img/90x90.jpg" alt="avatar" />
                                            <div className="user-meta-info">
                                                <p className="user-name" data-name="Alan Green">Alan Green</p>
                                                <p className="user-work" data-occupation="Web Developer">Web Developer</p>
                                            </div>
                                        </div>
                                        <div className="user-email">
                                            <p className="info-title">Email: </p>
                                            <p className="usr-email-addr" data-email="alan@mail.com">alan@mail.com</p>
                                        </div>
                                        <div className="user-location">
                                            <p className="info-title">Location: </p>
                                            <p className="usr-location" data-location="Boston, USA">Boston, USA</p>
                                        </div>
                                        <div className="user-phone">
                                            <p className="info-title">Phone: </p>
                                            <p className="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                                        </div>
                                        <div className="action-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="item-content">
                                        <div className="user-profile">
                                            <div className="n-chk align-self-center text-center">
                                                <label className="new-control new-checkbox checkbox-primary">
                                                    <input type="checkbox" className="new-control-input contact-chkbox" />
                                                    <span className="new-control-indicator" />
                                                </label>
                                            </div>
                                            <img src="/assets/img/90x90.jpg" alt="avatar" />
                                            <div className="user-meta-info">
                                                <p className="user-name" data-name="Linda Nelson">Linda Nelson</p>
                                                <p className="user-work" data-occupation="Web Designer">Web Designer</p>
                                            </div>
                                        </div>
                                        <div className="user-email">
                                            <p className="info-title">Email: </p>
                                            <p className="usr-email-addr" data-email="linda@mail.com">linda@mail.com</p>
                                        </div>
                                        <div className="user-location">
                                            <p className="info-title">Location: </p>
                                            <p className="usr-location" data-location="Sydney, Australia">Sydney, Australia</p>
                                        </div>
                                        <div className="user-phone">
                                            <p className="info-title">Phone: </p>
                                            <p className="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                                        </div>
                                        <div className="action-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="item-content">
                                        <div className="user-profile">
                                            <div className="n-chk align-self-center text-center">
                                                <label className="new-control new-checkbox checkbox-primary">
                                                    <input type="checkbox" className="new-control-input contact-chkbox" />
                                                    <span className="new-control-indicator" />
                                                </label>
                                            </div>
                                            <img src="/assets/img/90x90.jpg" alt="avatar" />
                                            <div className="user-meta-info">
                                                <p className="user-name" data-name="Lila Perry">Lila Perry</p>
                                                <p className="user-work" data-occupation="UX/UI Designer">UX/UI Designer</p>
                                            </div>
                                        </div>
                                        <div className="user-email">
                                            <p className="info-title">Email: </p>
                                            <p className="usr-email-addr" data-email="lila@mail.com">lila@mail.com</p>
                                        </div>
                                        <div className="user-location">
                                            <p className="info-title">Location: </p>
                                            <p className="usr-location" data-location="Miami, USA">Miami, USA</p>
                                        </div>
                                        <div className="user-phone">
                                            <p className="info-title">Phone: </p>
                                            <p className="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                                        </div>
                                        <div className="action-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="item-content">
                                        <div className="user-profile">
                                            <div className="n-chk align-self-center text-center">
                                                <label className="new-control new-checkbox checkbox-primary">
                                                    <input type="checkbox" className="new-control-input contact-chkbox" />
                                                    <span className="new-control-indicator" />
                                                </label>
                                            </div>
                                            <img src="/assets/img/90x90.jpg" alt="avatar" />
                                            <div className="user-meta-info">
                                                <p className="user-name" data-name="Andy King">Andy King</p>
                                                <p className="user-work" data-occupation="Web Developer">Project Lead</p>
                                            </div>
                                        </div>
                                        <div className="user-email">
                                            <p className="info-title">Email: </p>
                                            <p className="usr-email-addr" data-email="andy@mail.com">andy@mail.com</p>
                                        </div>
                                        <div className="user-location">
                                            <p className="info-title">Location: </p>
                                            <p className="usr-location" data-location="Tokyo, Japan">Tokyo, Japan</p>
                                        </div>
                                        <div className="user-phone">
                                            <p className="info-title">Phone: </p>
                                            <p className="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                                        </div>
                                        <div className="action-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="item-content">
                                        <div className="user-profile">
                                            <div className="n-chk align-self-center text-center">
                                                <label className="new-control new-checkbox checkbox-primary">
                                                    <input type="checkbox" className="new-control-input contact-chkbox" />
                                                    <span className="new-control-indicator" />
                                                </label>
                                            </div>
                                            <img src="/assets/img/90x90.jpg" alt="avatar" />
                                            <div className="user-meta-info">
                                                <p className="user-name" data-name="Jesse Cory">Jesse Cory</p>
                                                <p className="user-work" data-occupation="Web Developer">Web Developer</p>
                                            </div>
                                        </div>
                                        <div className="user-email">
                                            <p className="info-title">Email: </p>
                                            <p className="usr-email-addr" data-email="jesse@mail.com">jesse@mail.com</p>
                                        </div>
                                        <div className="user-location">
                                            <p className="info-title">Location: </p>
                                            <p className="usr-location" data-location="Edinburgh, UK">Edinburgh, UK</p>
                                        </div>
                                        <div className="user-phone">
                                            <p className="info-title">Phone: </p>
                                            <p className="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                                        </div>
                                        <div className="action-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="item-content">
                                        <div className="user-profile">
                                            <div className="n-chk align-self-center text-center">
                                                <label className="new-control new-checkbox checkbox-primary">
                                                    <input type="checkbox" className="new-control-input contact-chkbox" />
                                                    <span className="new-control-indicator" />
                                                </label>
                                            </div>
                                            <img src="/assets/img/90x90.jpg" alt="avatar" />
                                            <div className="user-meta-info">
                                                <p className="user-name" data-name="Xavier">Xavier</p>
                                                <p className="user-work" data-occupation="UX/UI Designer">UX/UI Designer</p>
                                            </div>
                                        </div>
                                        <div className="user-email">
                                            <p className="info-title">Email: </p>
                                            <p className="usr-email-addr" data-email="xavier@mail.com">xavier@mail.com</p>
                                        </div>
                                        <div className="user-location">
                                            <p className="info-title">Location: </p>
                                            <p className="usr-location" data-location="New York, USA">New York, USA</p>
                                        </div>
                                        <div className="user-phone">
                                            <p className="info-title">Phone: </p>
                                            <p className="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                                        </div>
                                        <div className="action-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="item-content">
                                        <div className="user-profile">
                                            <div className="n-chk align-self-center text-center">
                                                <label className="new-control new-checkbox checkbox-primary">
                                                    <input type="checkbox" className="new-control-input contact-chkbox" />
                                                    <span className="new-control-indicator" />
                                                </label>
                                            </div>
                                            <img src="/assets/img/90x90.jpg" alt="avatar" />
                                            <div className="user-meta-info">
                                                <p className="user-name" data-name="Susan">Susan</p>
                                                <p className="user-work" data-occupation="Project Manager">Project Manager</p>
                                            </div>
                                        </div>
                                        <div className="user-email">
                                            <p className="info-title">Email: </p>
                                            <p className="usr-email-addr" data-email="susan@mail.com">susan@mail.com</p>
                                        </div>
                                        <div className="user-location">
                                            <p className="info-title">Location: </p>
                                            <p className="usr-location" data-location="Miami, USA">Miami, USA</p>
                                        </div>
                                        <div className="user-phone">
                                            <p className="info-title">Phone: </p>
                                            <p className="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                                        </div>
                                        <div className="action-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="item-content">
                                        <div className="user-profile">
                                            <div className="n-chk align-self-center text-center">
                                                <label className="new-control new-checkbox checkbox-primary">
                                                    <input type="checkbox" className="new-control-input contact-chkbox" />
                                                    <span className="new-control-indicator" />
                                                </label>
                                            </div>
                                            <img src="/assets/img/90x90.jpg" alt="avatar" />
                                            <div className="user-meta-info">
                                                <p className="user-name" data-name="Traci Lopez">Traci Lopez</p>
                                                <p className="user-work" data-occupation="Web Developer">Web Developer</p>
                                            </div>
                                        </div>
                                        <div className="user-email">
                                            <p className="info-title">Email: </p>
                                            <p className="usr-email-addr" data-email="traci@mail.com">traci@mail.com</p>
                                        </div>
                                        <div className="user-location">
                                            <p className="info-title">Location: </p>
                                            <p className="usr-location" data-location="Edinburgh, UK">Edinburgh, UK</p>
                                        </div>
                                        <div className="user-phone">
                                            <p className="info-title">Phone: </p>
                                            <p className="usr-ph-no" data-phone="+1 (070) 123-4567">+1 (070) 123-4567</p>
                                        </div>
                                        <div className="action-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2 edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-minus delete"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><line x1={23} y1={11} x2={17} y2={11} /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-wrapper">
                <div className="footer-section f-section-1">
                    <p className="">Copyright © 2021 <a target="_blank" href="https://designreset.com">DesignReset</a>, All rights reserved.</p>
                </div>
                <div className="footer-section f-section-2">
                    <p className="">Coded with <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></p>
                </div>
            </div>
        </div>
    )
}