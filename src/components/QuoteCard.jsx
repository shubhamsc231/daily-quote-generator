import { useState, useEffect } from "react";

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

  if (!quoteData) {
    return <div>Loading...</div>;
  }
  const handleClick = () => {
    fetchData();
  };

  return (
    <section className="w-3/6 bg-white  rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-5">
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
        <h3 className="text-lg italic font-light text-gray-400 self-end">
          -{quoteData?.author}
        </h3>
        <hr />
        <div>
          <div></div>
          <button
            className="bg-[#5372F0] p-3 rounded-xl text-white font-bold disabled-opacity-5 hover:bg-[#3f5cd9] transition-all duration-300 ease-in-out"
            onClick={() => handleClick()}
            disabled={loading}
          >
            {loading ? `Loading...` : `New Quote`}{" "}
          </button>
        </div>
      </>
    </section>
  );
};

export default QuoteCard;
