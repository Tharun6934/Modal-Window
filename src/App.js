import React, { useState } from "react";
import Modal from "./Components/Modal";

function App() {
  const [openmodal, setOpenmodal] = useState(false);
  return (
    <div className="p-10  h-screen bg-black">
      <div className={` ${openmodal ? "blur" : "bg-black"}`}>
        <center className="mb-20">
          <h3 className="text-6xl font-semibold mb-10 text-white">
            Popup Modal
          </h3>
          <button
            className="bg-violet-900 text-2xl font-semibold p-3  rounded-lg text-white border mb-10"
            onClick={() => {
              setOpenmodal(true);
            }}
          >
            Get the eBook
          </button>
        </center>
      </div>
      {openmodal && <Modal modalset={setOpenmodal} />}
    </div>
  );
}

export default App;
