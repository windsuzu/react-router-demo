import styled from "styled-components";

const Item = styled.li`
    margin: 1rem 0;
    padding-left: 1.25rem;
    color: #4a5555;
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: #c2e7f0;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        font-size: 1.15rem;
    }
`;

const CommentItem = (props) => {
    return (
        <Item>
            <p>{props.text}</p>
        </Item>
    );
};

export default CommentItem;
