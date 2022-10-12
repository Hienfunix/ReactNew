import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from '../components/comments/Comments'
import HighLightedQuote from '../components/quotes/HighlightedQuote'
const QuoteDetail = () => {
    const params = useParams();
    const prQuote = params.quoteId;
    const DUMMY_QUOTE = [
        { id:'q1', author:'Max', text: 'Learning React is fun'},
        { id:'q2', author:'Maximilian', text: 'Learning React is great'},
        { id:'q3', author:'Hienhij', text: 'Learning React is interested'}
    ]
    const quote = DUMMY_QUOTE.find(value => value.id === prQuote)
    if(!quote){
        return <h1> Quote not found</h1>
    }
    return (
        <Fragment>
            <HighLightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${prQuote}/comments`}>
                <Comments />
            </Route>
            <Route path={`/quotes/${prQuote}`} exact>
                <div className='centered'>
                    <Link to={`/quotes/${prQuote}/comments`} className='btn--flat'>Load Comment </Link>
                </div>
            </Route>
        </Fragment>
    )
}
export default QuoteDetail;