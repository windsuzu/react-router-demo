import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import QuoteItem from "./QuoteItem";

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Sorting = styled.div`
    padding-bottom: 1rem;
    border-bottom: 3px solid #b2d4d4;
    margin-bottom: 2rem;

    button {
        font: inherit;
        color: teal;
        border: 1px solid teal;
        background-color: transparent;
        border-radius: 4px;
        padding: 0.5rem 1.5rem;
        cursor: pointer;
        &:hover {
            background-color: #c2fafa;
        }
    }
`;

const QuoteList = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const isSortAsc = queryParams.get("sort") === "asc";

    const sortedQuotes = props.quotes.sort((a, b) =>
        a.text > b.text ? (isSortAsc ? 1 : -1) : isSortAsc ? -1 : 1
    );

    const changeSortingHandler = () => {
        navigate(`?sort=${isSortAsc ? "desc" : "asc"}`);
    };

    return (
        <>
            <Sorting>
                <button onClick={changeSortingHandler}>
                    Sort {isSortAsc ? "Descending" : "Ascending"}
                </button>
            </Sorting>
            <List>
                {sortedQuotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />
                ))}
            </List>
        </>
    );
};

export default QuoteList;
