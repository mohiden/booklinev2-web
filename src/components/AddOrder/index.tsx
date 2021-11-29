import { Order } from "@lib";
import { useCreateOrderMutation } from "../../generated/graphql";
import React, { useState } from "react";
import { MultiValue } from "react-select";
import CreatableSelect from "react-select/creatable";
import { useNavigate } from "react-router";
export const AddOrder = () => {
  const navigate = useNavigate();
  const [createOrder, { error, loading, data }] = useCreateOrderMutation();

  const [order, setOrder] = useState<Order>({
    name: "",
    area: "",
    phoneNumber: "",
    books: [],
    isDelivered: false,
  });
  const [selectValues, setSelectValues] = useState<MultiValue<any> | null>([]);

  async function formSubmitHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    console.log(order);

    const res = await createOrder({
      variables: {
        ...order,
      },
    });

    if (res.data && !res.errors) {
      setOrder({
        name: "",
        area: "",
        phoneNumber: "",
        books: [],
        isDelivered: false,
      });
      setSelectValues(null);
      navigate("/app/order/all");
    }
  }

  return (
    <div id="content" className="main-content">
      <div className="layout-px-spacing">
        {/* CONTENT AREA */}
        <div className="row layout-top-spacing">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
            <div
              className="widget-content-area br-4"
              style={{ maxWidth: "1000px" }}
            >
              <div className="widget-one">
                <form>
                  <div className="form-row mb-4">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCity">Name</label>
                      <input
                        value={order.name}
                        onChange={(e) =>
                          setOrder({ ...order, name: e.target.value })
                        }
                        type="text"
                        className="form-control"
                        id="inputCity"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCity">Phone Number</label>
                      <input
                        value={order.phoneNumber}
                        onChange={(e) =>
                          setOrder({ ...order, phoneNumber: e.target.value })
                        }
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
                      onChange={(e) =>
                        setOrder({ ...order, area: e.target.value })
                      }
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
                      onChange={(v: MultiValue<any>) => {
                        setSelectValues(v);
                        setOrder({
                          ...order,
                          books: v.map((val) => val.value.trim()),
                        });
                      }}
                    />
                  </div>
                  <button
                    disabled={loading ? true : false}
                    type="submit"
                    onClick={(e) => formSubmitHandler(e)}
                    className="btn btn-primary mt-3"
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* CONTENT AREA */}
      </div>
    </div>
  );
};
