import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
};

export default Alert;
