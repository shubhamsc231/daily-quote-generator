import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
const QuoteCard = () => {
  const [quoteData, setquoteData] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setloading(true);
    let response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "RwZ+sXnGfFlopV8DLSTbpQ==z3STdPH1Ods7R9yP",
      },
    });
    const data = await response.json();
    setquoteData(data[0]);
    setloading(false);
  };

  const handleClick = () => {
    fetchData();
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(`${quoteData?.quote}`);
    toast("Copied to Clipboard!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <section className="w-3/6 sm:w-full sm:m-4 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-5">
      <>
        <h3 className="text-3xl">Quote of the Day</h3>
        {quoteData && !loading ? (
          <h1 className="text-xl italic font-medium text-gray-600">
            “ {quoteData?.quote} ”
          </h1>
        ) : (
          <>
            <div className="bg-gray-200 p-2 w-full"></div>
            <div className="bg-gray-200 p-2 w-2/6"></div>
          </>
        )}
        <strong className="text-lg italic font-light text-gray-400 self-end">
          -{quoteData?.author}
        </strong>
        <hr />
        <div className="w-full flex items-center justify-center gap-5">
          <button
            className="bg-[#5372F0] p-3 rounded-xl text-white font-bold disabled-opacity-5 hover:bg-[#3f5cd9] transition-all duration-300 ease-in-out"
            onClick={() => handleClick()}
            disabled={loading}
          >
            {loading ? `Loading...` : `New Quote`}{" "}
          </button>
          <button
            className="bg-[#5372F0] p-3 rounded-xl text-white font-bold disabled-opacity-5 hover:bg-[#3f5cd9] transition-all duration-300 ease-in-out"
            onClick={handleCopyClick}
          >
            Copy to Clipboard
          </button>
        </div>
      </>
      <ToastContainer />
    </section>
  );
};

export default QuoteCard;
