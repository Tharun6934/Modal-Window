function Modal({ modalset }) {
  return (
    <div className="flex items-center justify-center z-10">
      <div className="bg-violet-900 rounded-xl w-1/2 p-10">
        <div className="float-right mb-20">
          <button
            className="text-white text-3xl"
            onClick={() => {
              modalset(false);
            }}
          >
            X
          </button>
        </div>
        <center>
          <h3 className="text-white text-4xl font-semibold mt-10 mb-10">
            DOWNLOAD FREE EBOOK
          </h3>
          <h2 className="text-white text-5xl font-semibold mb-10">
            Want to learn How to Crack Web Development interviews Like a Pro!
          </h2>
        </center>
        <div className="flex items-center justify-center flex-col">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-3 rounded-lg mb-8 placeholder-gray-900 text-base "
          />
          <button className="text-white bg-black text-2xl p-3 rounded-lg">
            Download eBook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
