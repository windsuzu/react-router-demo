import styled from "styled-components";
import CommentItem from "./CommentItem";

const List = styled.ul`
    list-style: none;
    margin: 2.5rem 0;
    padding: 0;
`;

const CommentsList = (props) => {
    return (
        <List>
            {props.comments.map((comment) => (
                <CommentItem key={comment.id} text={comment.text} />
            ))}
        </List>
    );
};

export default CommentsList;
