import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";
import { useParams } from "react-router-dom";

const Section = styled.section`
    text-align: center;

    button {
        font-size: 1.25rem;
    }
`;

const Comments = () => {
    const params = useParams();
    const [isAddingComment, setIsAddingComment] = useState(false);
    const {
        sendRequest,
        status,
        data: loadedComments,
    } = useHttp(getAllComments);

    useEffect(() => sendRequest(params.quoteId), [sendRequest, params.quoteId]);

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    const addedCommentHandler = useCallback(() => {
        sendRequest(params.quoteId);
    }, [sendRequest, params.quoteId]);

    let content;

    if (status === "pending") {
        content = (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (status === "completed" && loadedComments && loadedComments.length > 0) {
        content = <CommentsList comments={loadedComments} />;
    }

    if (
        status === "completed" &&
        (!loadedComments || loadedComments.length === 0)
    ) {
        content = <p className="centered">No comments were added yet!</p>;
    }

    return (
        <Section>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className="btn" onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && (
                <NewCommentForm
                    quoteId={params.quoteId}
                    onAddedComment={addedCommentHandler}
                />
            )}
            {content}
        </Section>
    );
};

export default Comments;
