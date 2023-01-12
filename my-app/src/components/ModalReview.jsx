import React from "react";

export const ModalReview = ({ children, isOpen, modalClose }) => {
  return (
    <article
      className={
        isOpen
          ? "fixed z-50 top-0 left-0 w-full min-h-screen bg-gray-200 flex"
          : "fixed z-50 top-0 left-0 w-full min-h-screen bg-gray-200 hidden"
      }
    >
      <div className="relative rounded pb-4 h-full w-full">{children}</div>
    </article>
  );
};
