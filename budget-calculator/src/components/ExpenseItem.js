import React from "react";
import {MdEdit, MdDeleteForever} from "react-icons/md";
const ExpenseItem = ({
    expense: { id, charge, amount },
    handleDelete,
    handleEdit
  }) => {
    return (
      <li className="item">
        <div className="info">
          <span className="expense">{charge}</span>
          <span className="amount">${amount}</span>
        </div>
        <div>
          <button
            className="edit-btn"
            aria-label="edit button"
            onClick={() => handleEdit(id)}
          >
            <MdEdit />
          </button>
          <button
            className="clear-btn"
            aria-label="delete button"
            onClick={() => handleDelete(id)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </li>
    );
  };
  
  export default ExpenseItem;
