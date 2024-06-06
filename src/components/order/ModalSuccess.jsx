import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function ModalSuccess() {
  return (
    <>
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal-body__success">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="modal-body__success-icon"
          />
          <span>Bạn đã đặt hàng thành công</span>
          <Link to={"/orderStatus"}>
            <button className="modal-body__success-button">OK</button>
          </Link>
        </div>
      </div>
    </>
  );
}
