import React, { useEffect, useState } from "react";
import Sidebar from "../../navigation/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import moment from "moment/moment";

const columns = [
  { field: "_id", headerName: "OrderId", width: 250 },
  { field: "price", headerName: "Price $", width: 200 },
  {
    field: "customerName",
    headerName: "Customer Name",
    type: "string",
    width: 150,
  },
  {
    field: "products",
    headerName: "Products",
    type: "string",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date",
    type: "string",
    width: 250,
  },
  {
    field: "brand",
    headerName: "Brand",
    type: "string",
    width: 200,
  },
];

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      let res = await axios("http://localhost:5001/order");
      const formatedDates = res.data.map((data) => {
        return {
          ...data,
          date: moment(data.date).format("MMMM Do YYYY, h:mm:ss a"),
        };
      });
      setOrders(formatedDates);
    } catch (error) {}
  };

  useEffect(() => {
    getOrders();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between">
        <Sidebar />
        <div className="col-xs-4 col-md-8 col-lg-12 d-flex align-items-center justify-content-center">
          <div
            style={{ height: 660, width: "100%" }}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <div className="d-flex justify-content-between col-6">
              <h4>Orders</h4>
              <span>{orders.length}</span>
            </div>
            <DataGrid
              rows={orders}
              getRowId={(row) => row._id}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[10, 25]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
