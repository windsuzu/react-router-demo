import React, { useEffect } from "react";
import { Link, Outlet, useParams, Routes, Route } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
    const {
        sendRequest,
        status,
        data: loadedQuote,
        error,
    } = useHttp(getSingleQuote, true);

    const params = useParams();

    useEffect(() => {
        sendRequest(params.quoteId);
    }, [sendRequest, params.quoteId]);

    if (status === "pending")
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );

    if (error) return <p className="centered">{error}</p>;

    if (!loadedQuote.text)
        return <HighlightedQuote text="No Quote Found!" author="Error" />;

    return (
        <>
            <HighlightedQuote
                text={loadedQuote.text}
                author={loadedQuote.author}
            />
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
        </>
    );
};

export default QuoteDetail;
