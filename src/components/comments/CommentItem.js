import styled from "styled-components";

const Item = styled.li`
    margin: 1rem 0;
    color: #4a5555;
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid teal;
`;

const CommentItem = (props) => {
    return (
        <Item>
            <p>{props.text}</p>
        </Item>
    );
};

export default CommentItem;
