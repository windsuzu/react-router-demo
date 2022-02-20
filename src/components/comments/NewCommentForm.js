import { useEffect, useRef } from "react";
import styled from "styled-components";
import Control from "../UI/Control";
import Actions from "../UI/Actions";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";

const Form = styled.form`
    margin-top: 1rem;
    position: relative;
    text-align: center;
`;

const NewCommentForm = ({ quoteId, onAddedComment }) => {
    const commentTextRef = useRef();
    const { sendRequest, status, error } = useHttp(addComment);

    useEffect(() => {
        if (status === "completed" && !error) {
            onAddedComment();
        }
    }, [error, onAddedComment, status]);

    const submitFormHandler = (event) => {
        event.preventDefault();
        const enteredText = commentTextRef.current.value;

        // optional: Could validate here

        // send comment to server
        sendRequest({ quoteId, commentData: { text: enteredText } });
    };

    return (
        <Form onSubmit={submitFormHandler}>
            <Control onSubmit={submitFormHandler}>
                <label htmlFor="comment">Your Comment</label>
                <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
            </Control>
            <Actions>
                <button className="btn">Add Comment</button>
            </Actions>
        </Form>
    );
};

export default NewCommentForm;
