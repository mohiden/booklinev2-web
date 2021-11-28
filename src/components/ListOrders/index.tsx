import { useDeleteOrderMutation, useOrdersQuery } from '../../generated/graphql'
import React, { useEffect } from 'react'

export const ListOrders = () => {

    useEffect(() => {
        refetch();
    }, [])
    const { data, error, loading, refetch } = useOrdersQuery({

    });
    const [deleteOrder, { error: deleteOrderError }] = useDeleteOrderMutation();
    (async () => {

    })();

    async function deleteOrderHandler(id: string) {
        const resp = await deleteOrder({
            variables: {
                orderId: id
            }
        });
        if (resp.data?.deleteOrder && !resp.errors) {
            refetch();
            return alert("Deleted Successfully");
        }
        alert("failed");
    }

    return (
        <div id="content" className="main-content">
            <div className="layout-px-spacing">
                {/* CONTENT AREA */}
                <div className="row layout-top-spacing">
                    <div className="col-xl-12 col-lg-12 col-sm-12  layout-spacing">
                        <div className="widget-content widget-content-area br-6">
                            <div className="table-responsive mb-4 mt-4">
                                <table id="zero-config" className="table table-hover" style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>name</th>
                                            <th>phone Number</th>
                                            <th>area</th>
                                            <th>Books</th>
                                            <th>isDelivered</th>
                                            <th>createdAt</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            !loading && !error && data?.orders.map((o, idx) => (
                                                <tr key={idx} onClick={() => deleteOrderHandler(o._id as string)}>
                                                    <td>{o._id}</td>
                                                    <td>{o.phoneNumber}</td>
                                                    <td>{o.name}</td>
                                                    <td>{o.area}</td>
                                                    <td>{o.books.toString()}</td>
                                                    <td>{o.isDelivered ? "true" : "false"}</td>
                                                    <td>{o.createdAt}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th />
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                {/* CONTENT AREA */}
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