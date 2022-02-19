import React from "react";
import styled from "styled-components";

import QuoteItem from "./QuoteItem";

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const QuoteList = (props) => {
    return (
        <>
            <List>
                {props.quotes.map((quote) => (
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
