import React from "react";
import Modal from "react-modal";
import Image from 'next/image'

import DataTable from "@/analyticsComponents/dataTable/table";
import moment from "moment";


const customStyles = {
  overlay: {
    backgroundColor: "rgba(6, 6, 6, 0.78)",
    zIndex: 1000,
  },
  content: {
    border: "none",
    background: "transparent",
    maxWidth: "1140px",
    margin: "0 auto",
    padding: "0px",
    top: "0",
    bottom: "0",
    right: "0px",
    left: "0px",
    overflow: "inherit",
    maxHeight: "inherit",
    borderRadius: "8px",
  },
};
const DataModel = ({ currentLogData ,onToggle }) => {

  // Column definitions
  const columns = React.useMemo(
    () => [
    
      {
        Header: "Log type",
        accessor: "log_type",
        Cell: ({ value }) => (
          <span className={`fw_600 color_gray_550`}>{value}</span>
        ),
      },
      {
        Header: "Offer amount",
        accessor: "amount",
    
      },
      {
        Header: "Offer Date",
        accessor: "offer_date",
        Cell: ({ value }) => (
          <span>
            {moment(value).format("DD/MM/YYYY")}
          </span>
        ),
      },
      {
        Header: "Is Extra Amount",
        accessor: "is_extra_amount",
      },
      

      {
        Header: "Message",
        accessor: "message",
      },
      {
        Header: "Created By",
        accessor: "created_by",
       
      },
      {
        Header: "Crerated At",
        accessor: "created_at",
        Cell: ({ value }) => (
          <span>
            {moment(value).format("DD/MM/YYYY")}
          </span>
        ),
      },
      ,
    ],
    []
  );

  return (
    <Modal
      isOpen={true}
      contentLabel="Example Modal"
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="modal_view_log">
        <div className="modal_view_log_col">
          <button className="close" onClick={onToggle}>
            <Image  width={25} height={25} src="/popup-close.svg" alt="close"/> 
          </button>
          <DataTable columns={columns} data={currentLogData} />
        </div>
      </div>
    </Modal>
  );
};

export default DataModel;
