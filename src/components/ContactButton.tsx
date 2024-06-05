"use client";
import { useState } from "react";
import GetEmailModal from "./GetEmailModal";

export default function ContactButton() {
  const [showModal, setShowModal] = useState(false);

  function handleOpen() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }
  return (
    <>
      {showModal && <GetEmailModal onClose={handleClose} />}

      <button
        onClick={handleOpen}
        className="text-gray-950 underline my-1 block"
      >
        E-mail
      </button>
    </>
  );
}
