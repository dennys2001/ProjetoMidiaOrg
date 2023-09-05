import React, { Fragment } from "react";

const BadgeList = ({ itemList }) => {

    // Check if itemList is null or undefined
  if (itemList === null || itemList === undefined) {
    return null; // Or display an error message or handle it in another way
  }


    // Split the list of values by semicolon
    const items = itemList.split(';');
  
    return (
      <div>
        {items.map((item, filhos) => (
          <span key={[filhos.marcas]} className="badge bg-primary me-2">
            {item.trim()} {/* Trim any leading/trailing whitespace */}
          </span>
        ))}
      </div>
    );
  };

export default BadgeList;