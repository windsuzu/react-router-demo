import styled from "styled-components";

const Figure = styled.figure`
    background-color: #162b2b;
    color: white;
    border-radius: 6px;
    padding: 3rem;
    margin: 3rem auto;
    width: 90%;
    max-width: 40rem;

    p {
        font-size: 2.5rem;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
`;

const FigCaption = styled.figcaption`
    font-style: italic;
    font-size: 1.5rem;
    text-align: right;
    color: #a1e0e0;

    @media (max-width: 768px) {
        font-size: 1.15rem;
    }
`;

const HighlightedQuote = (props) => {
    return (
        <Figure>
            <p>{props.text}</p>
            <FigCaption>{props.author}</FigCaption>
        </Figure>
    );
};

export default HighlightedQuote;
