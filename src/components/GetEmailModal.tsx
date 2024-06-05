"use client";
import { useEffect } from "react";
import { sendMail } from "@/actions/actions";
import { useFormStatus, useFormState } from "react-dom";
import { motion, AnimatePresence, useAnimate } from "framer-motion";

interface GetEmailModalProps {
  onClose: () => void;
}

export default function GetEmailModal({ onClose }: GetEmailModalProps) {
  const [state, formAction] = useFormState(sendMail, { status: "" });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
      >
        <motion.div
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          className="bg-white dark:bg-slate-800 dark:text-neutral-50 text-neutral-950 p-4 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 mx-auto my-20"
        >
          <h2 className="text-xl font-bold">Get in touch</h2>
          <p className="my-4 text-slate-900 dark:text-slate-100">
            I&apos;m currently looking for new opportunities. If you&apos; like
            to work together, please feel free to reach out.
          </p>
          {state.status === "error" && (
            <p className=" text-slate-900 dark:text-slate-100">
              Error: {state.status}
            </p>
          )}
          {state.status === "success" ? (
            <>
              <p className="mb-10 font-bold text-lg text-slate-900 dark:text-slate-100">
                Message sent successfully! I&apos;ll get back to you as soon as
                possible.
              </p>
              <button
                onClick={onClose}
                type="button"
                className="rounded-lg flex items-center gap-1 px-4 py-2 bg-zinc-300 dark:bg-slate-500 dark:hover:bg-slate-600 hover:bg-zinc-400 transition-all duration-300 text-neutral-950 dark:text-neutral-50"
              >
                Close
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 18 12M12 6l6 6-6 6"
                  ></path>
                </svg>
              </button>
            </>
          ) : (
            <form action={formAction} className="flex flex-col gap-4">
              <Form onClose={onClose} />
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (pending) {
      animate(
        scope.current,
        { x: 200, opacity: 0 },
        { duration: 1, repeat: Infinity }
      );
    }
  }, [pending, animate, scope]);

  return (
    <button
      type="submit"
      className="rounded-lg w-32 overflow-hidden flex items-center justify-center gap-1 px-4 py-2 bg-zinc-300 dark:bg-slate-500 dark:hover:bg-slate-600 hover:bg-zinc-400 transition-all duration-300 text-neutral-950 dark:text-neutral-50"
    >
      <svg
        ref={scope}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
        />
      </svg>
      {pending ? "Sending.." : "Send"}
    </button>
  );
}

function Form({ onClose }: { onClose: () => void }) {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        className="rounded-lg text-neutral-900 p-2 border border-neutral-300 dark:border-neutral-700"
      />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        required
        className="rounded-lg p-2 border text-neutral-900 border-neutral-300 dark:border-neutral-700"
      ></textarea>
      <div className="flex items-center gap-2">
        <SubmitButton />
        <button
          onClick={onClose}
          type="button"
          className="rounded-lg flex items-center gap-1 px-4 py-2 bg-red-100 dark:bg-red-500 text-red-900 dark:text-red-50 dark:hover:bg-red-600 hover:bg-red-200 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          Never mind
        </button>
      </div>
    </>
  );
}
