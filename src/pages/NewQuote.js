import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
    const { sendRequest, status } = useHttp(addQuote);
    const navigate = useNavigate();

    useEffect(() => {
        if (status === "completed") {
            navigate("/quotes", { replace: false });
        }
    }, [navigate, status]);

    const addQuoteHandler = (data) => {
        // data = { author, text }
        sendRequest(data);
    };

    return (
        <QuoteForm
            isLoading={status === "pending"}
            onAddQuote={addQuoteHandler}
        />
    );
};

export default NewQuote;
