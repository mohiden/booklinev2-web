import { Order } from '@lib';
import { useUpdateOrderMutation } from '../../generated/graphql';
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { MultiValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useApolloClient } from '@apollo/client';

interface EditSwalProps {
    order: Order;
    onUpdateClickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, order: Order) => void;
}


export const EditSwal = ({ order: propOrder, onUpdateClickHandler }: EditSwalProps) => {
    const [order, setOrder] = useState<Order>(propOrder);
    const [selectValues, setSelectValues] = useState<MultiValue<any> | null>(
        propOrder.books.map(b => {
            return { label: b, value: b, __isNew: true }
        })
    );



    return (

        <div
            className="widget-content-area br-4 text-left"
            style={{ maxWidth: "1000px" }}
        >
            <form>
                <div className="form-row mb-4">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">Name</label>
                        <input
                            value={order.name}
                            onChange={(e) => setOrder({ ...order, name: e.target.value })}
                            type="text"
                            className="form-control"
                            id="inputCity"
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">Phone Number</label>
                        <input
                            value={order.phoneNumber}
                            onChange={(e) => setOrder({ ...order, phoneNumber: e.target.value })}
                            type="text"
                            className="form-control"
                            id="inputCity"
                        />
                    </div>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="inputAddress">Area</label>
                    <input
                        value={order.area}
                        onChange={(e) => setOrder({ ...order, area: e.target.value })}
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                    />
                </div>
                <div className="">
                    <label htmlFor="">Books</label>
                    <CreatableSelect
                        placeholder="books1,2,3"
                        openMenuOnClick={false}
                        isMulti
                        isClearable
                        value={selectValues}
                        onChange={(v) => {
                            console.log(v);
                            setSelectValues(v);
                            setOrder({ ...order, books: v.map(val => val.value.trim()) })
                        }}
                    />
                </div>
                <button
                    onClick={(e) => onUpdateClickHandler(e, order)}
                    disabled={false}
                    type="submit"
                    className="btn btn-primary mt-3"
                >
                    update
                </button>
            </form>
        </div>
    )
}
