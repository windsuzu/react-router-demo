import React from "react";
import { Outlet, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    { id: "q1", author: "Max", text: "Learning React is fun!" },
    { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

    if (!quote) return <HighlightedQuote text="No Quote Found!" author="" />;

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Outlet />
        </>
    );
};

export default QuoteDetail;