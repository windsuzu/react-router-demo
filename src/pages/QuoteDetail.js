import React from "react";
import { Outlet, useParams } from "react-router-dom";

const QuoteDetail = () => {
    const params = useParams();
    return (
        <>
            <h1>QuoteDetail {params.quoteId}</h1>
            <Outlet />
        </>
    );
};

export default QuoteDetail;
