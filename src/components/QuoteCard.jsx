import useQuoteApi from "../utils/useQuoteApi";

const QuoteCard = () => {
  const quotes = useQuoteApi();
  if (!quotes) {
    return <div>Loading...</div>;
  }
  return (
    <section className="w-3/6 bg-white  rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-5">
      {quotes ? (
        <>
          <h3 className="text-3xl">Quote of the Day</h3>
          <h1 className="text-xl italic font-medium text-gray-600">
            “ {quotes?.quote} ”
          </h1>
          <h3 className="text-lg italic font-light text-gray-400 self-end">
            -{quotes?.author}
          </h3>
          <hr />
          <div>
            <div></div>
            <button className="bg-[#5372F0] p-3 rounded-xl text-white font-bold ">
              New Quote
            </button>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default QuoteCard;
