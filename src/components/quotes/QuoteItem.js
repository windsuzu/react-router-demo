import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled.li`
    margin: 1rem 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: #c2e7f0;
    &:last-of-type {
        border-bottom: none;
    }
    p {
        margin: 0;
        margin-bottom: 0.25rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    @media (max-width: 768px) {
        p {
            font-size: 1rem;
        }
        .btn {
            font-size: 0.9rem;
            padding: 0.5rem 0.5rem;
        }
    }
`;

const Figure = styled.figure`
    margin: 0;
    padding: 0;
    width: 70%;
`;

const Blockquote = styled.blockquote`
    margin: 0;
    text-align: left;
    font-size: 1.5rem;
    color: #212929;
`;

const FigCaption = styled.figcaption`
    font-style: italic;
    color: #566d6d;
`;

const QuoteItem = (props) => {
    return (
        <Item>
            <Figure>
                <Blockquote>
                    <p>{props.text}</p>
                </Blockquote>
                <FigCaption>{props.author}</FigCaption>
            </Figure>
            <Link to={props.id} className="btn">
                View Fullscreen
            </Link>
        </Item>
    );
};

export default QuoteItem;
