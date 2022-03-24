import React from "react";

export const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-danger my-1" role="alert">
        {props.message}
      </div>
    </div>
  );
};

// export default Alert
