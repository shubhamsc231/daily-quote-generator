import { useState, useEffect } from "react";
const useQuoteApi = () => {
  const [quoteData, setquoteData] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "RwZ+sXnGfFlopV8DLSTbpQ==z3STdPH1Ods7R9yP",
      },
    });
    const data = await response.json();
    setquoteData(data[0]);
  };
  return quoteData;
};

export default useQuoteApi;
