import React from "react";
import { Link, Outlet, useParams, Routes, Route } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

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
            <Routes>
                <Route
                    path=""
                    element={
                        <div className="centered">
                            <Link to={"comments"} className="btn--flat">
                                Load Comments
                            </Link>
                        </div>
                    }
                />
                <Route path="comments" element={<Comments />} />
            </Routes>
            <Outlet />
        </>
    );
};

export default QuoteDetail;
