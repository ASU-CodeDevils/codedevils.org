import React from "react";
import { AiOutlineClose } from "react-icons/ai";

type ModalProps = {
  title: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  title,
  showModal,
  setShowModal,
  children,
}: ModalProps) => {
  return (
    <>
      {showModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
            <div className="flex h-[95%] w-11/12 flex-col overflow-y-auto overflow-x-hidden rounded-md bg-white  md:h-[80%] md:w-8/12">
              <div className="sticky top-0 flex items-center justify-between gap-4 bg-white p-4 text-3xl">
                <h1 className="text-2xl font-medium tracking-tighter">
                  {title}
                </h1>
                <button onClick={() => setShowModal(false)} className="">
                  <AiOutlineClose />
                </button>
              </div>
              <div className="grow px-4 py-2">{children}</div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 h-screen w-screen bg-black/50 "
            onClick={() => setShowModal(false)}
          ></div>
        </>
      )}
    </>
  );
};

export default Modal;
