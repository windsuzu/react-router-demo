import React from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
    const navigate = useNavigate();

    const addQuoteHandler = (data) => {
        // data = { author, text }
        console.log(data);

        navigate("/quotes", { replace: false });
    };
    return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
