import React from 'react'

export const AddOrder = () => {
    return (
        <div id="content" className="main-content">
            <div className="layout-px-spacing">
                {/* CONTENT AREA */}
                <div className="row layout-top-spacing">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
                        <div className="widget-content-area br-4" style={{ maxWidth: "1000px" }}>
                            <div className="widget-one">
                                <form>
                                    <div className="form-row mb-4">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">Name</label>
                                            <input type="text" className="form-control" id="inputCity" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">Phone Number</label>
                                            <input type="text" className="form-control" id="inputCity" />
                                        </div>

                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="inputAddress">Area</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div className="form-row mb-4">
                                        <select className="form-control tagging" multiple>
                                            <option>orange</option>
                                            <option>white</option>
                                        </select>

                                    </div>
                                    <div className="form-group">
                                        <div className="form-check pl-0">
                                            <div className="custom-control custom-checkbox checkbox-info">
                                                <input type="checkbox" className="custom-control-input" id="gridCheck" />
                                                <label className="custom-control-label" htmlFor="gridCheck">Check me out</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">Sign in</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                {/* CONTENT AREA */}
            </div>
            <div className="footer-wrapper">
                <div className="footer-section f-section-1">
                    <div id="fs2Tagging" className="col-lg-12 layout-spacing">
                        <div className="statbox widget box box-shadow">
                            <div className="widget-header">
                                <div className="row">
                                    <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Tagging with multi-value select boxes</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-content widget-content-area">
                                <p>Set <code>tags: true</code> to convert select 2 in Tag mode.</p>
                                <select className="form-control tagging" multiple>
                                    <option>orange</option>
                                    <option>white</option>
                                    <option>purple</option>
                                </select>
                                <div className="code-section-container">
                                    <button className="btn toggle-code-snippet"><span>HTML</span></button>
                                    <div className="code-section text-left">
                                        <pre>&lt;select class="form-control tagging" multiple="multiple"&gt;{"\n"}{"    "}&lt;option&gt;orange&lt;/option&gt;{"\n"}{"    "}&lt;option&gt;white&lt;/option&gt;{"\n"}{"    "}&lt;option&gt;purple&lt;/option&gt;{"\n"}&lt;/select&gt;{"\n"}</pre>
                                    </div>
                                </div>
                                <div className="code-section-container">
                                    <button className="btn toggle-code-snippet"><span>JS</span></button>
                                    <div className="code-section text-left">
                                        <pre>$(".tagging").select2({"{"}{"\n"}{"    "}tags: true{"\n"}{"}"});{"\n"}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <p className="">Copyright © 2021 <a target="_blank" href="https://designreset.com">DesignReset</a>, All rights reserved.</p> */}
                </div>
                <div className="footer-section f-section-2">
                    <p className="">Coded with <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></p>
                </div>
            </div>
        </div>
    )
}
