import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
    const addQuoteHandler = (value) => {
        console.log(value)
    }
    return (
        <div>
            <h1>New Quote Page</h1>
            <QuoteForm onAddQuote={addQuoteHandler}/>
        </div>
            
    )
}
export default NewQuote;