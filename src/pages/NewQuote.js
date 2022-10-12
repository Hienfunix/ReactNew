import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
const NewQuote = () => {
    const history = useHistory()
    const addQuoteHandler = (value) => {
        console.log(value)
        history.push('/quotes')
    }
    
    return (
        <div>
            <h1>New Quote Page</h1>
            <QuoteForm onAddQuote={addQuoteHandler}/>
        </div>
            
    )
}
export default NewQuote;