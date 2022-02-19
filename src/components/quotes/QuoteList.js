import React from "react";
import styled from "styled-components";

import QuoteItem from "./QuoteItem";

const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const QuoteList = (props) => {
    return (
        <>
            <StyledList>
                {props.quotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />
                ))}
            </StyledList>
        </>
    );
};

export default QuoteList;
