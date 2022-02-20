import { useRef } from "react";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import Loading from "../UI/Loading";
import Control from "../UI/Control";
import Actions from "../UI/Actions";

const QuoteForm = (props) => {
    // optional: add Prompt to prevent unwanted route transitions

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
