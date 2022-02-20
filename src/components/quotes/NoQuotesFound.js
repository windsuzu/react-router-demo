import { Link } from "react-router-dom";
import styled from "styled-components";

const NoQuote = styled.div`
    height: 20rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: #262c2c;
        font-size: 3rem;
        font-weight: bold;
    }
`;

const NoQuotesFound = () => {
    return (
        <NoQuote>
            <p>No quotes found!</p>
            <Link to="/new-quote" className="btn">
                Add a Quote
            </Link>
        </NoQuote>
    );
};

export default NoQuotesFound;
