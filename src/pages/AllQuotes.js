import QuoteList from '../components/quotes/QuoteList';

const AllQuotes = () => {
    const DUMMY_QUOTE = [
        { id:'q1', author:'Max', text: 'Learning React is fun'},
        { id:'q2', author:'Maximilian', text: 'Learning React is great'}
    ]
    return ( 
    <div>
        <h1>All Quotes Page</h1>
        <QuoteList quotes={DUMMY_QUOTE}/>
    </div>
    )
}
export default AllQuotes;