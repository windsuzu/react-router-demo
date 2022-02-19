import { useRef } from "react";
import styled from "styled-components";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

const Loading = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
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

const Control = styled.div`
    margin-bottom: 0.5rem;
    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }
    input,
    textarea {
        font: inherit;
        padding: 0.35rem;
        border-radius: 4px;
        background-color: #f0f0f0;
        border: 1px solid #c1d1d1;
        display: block;
        width: 100%;
        font-size: 1.25rem;

        &:focus {
            background-color: #cbf8f8;
            outline-color: teal;
        }
    }
`;

const Actions = styled.div`
    text-align: right;
    button {
        font-size: 1.25rem;
    }
`;

const QuoteForm = (props) => {
    const authorInputRef = useRef();
    const textInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;

        // optional: Could validate here

        props.onAddQuote({ author: enteredAuthor, text: enteredText });
    }

    return (
        <Card>
            <form style={{ position: "relative" }} onSubmit={submitFormHandler}>
                {props.isLoading && (
                    <Loading>
                        <LoadingSpinner />
                    </Loading>
                )}

                <Control>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" ref={authorInputRef} />
                </Control>
                <Control>
                    <label htmlFor="text">Text</label>
                    <textarea id="text" rows="5" ref={textInputRef}></textarea>
                </Control>
                <Actions>
                    <button className="btn">Add Quote</button>
                </Actions>
            </form>
        </Card>
    );
};

export default QuoteForm;
