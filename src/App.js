import { Navigate, Route, Routes } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Comment from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Navigate to="quotes" replace />} />
                <Route path="/quotes" element={<AllQuotes />} />
                <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
                    <Route
                        path="/quotes/:quoteId/comments"
                        element={<Comment />}
                    />
                </Route>
                <Route path="/new-quote" element={<NewQuote />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    );
}

export default App;
