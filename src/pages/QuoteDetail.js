import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from '../components/comments/Comments'
const QuoteDetail = () => {
    const params = useParams();
    const prQuote = params.quoteId;
    return (
        <Fragment>
            <h1>Quote Detail Page</h1>
            <p>{prQuote}</p>
            <Route path={`/quotes/${prQuote}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
}
export default QuoteDetail;