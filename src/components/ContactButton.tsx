"use client";
import { useState } from "react";
import ContactModal from "./ContactModal";

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
      {showModal && <ContactModal onClose={handleClose} />}

      <button
        onClick={handleOpen}
        className="text-gray-950 underline my-3 block hover:text-sky-950"
      >
        Send me an email
      </button>
    </>
  );
}
