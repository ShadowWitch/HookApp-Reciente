import { useCounter, useFetch } from "../hooks/index.barril";

// Components
import { LoadingQuotes, BlockQuote } from "../05-useLayoutEffect/index.barril";

export const Layout = () => {
    const {counter, increment} = useCounter()
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const {quote, author} = !!data && data[0]

    return (
        <>
            <h1>Braking Bad Quotes</h1>
            <hr />

            {
                isLoading 
                ? <LoadingQuotes />
                : <BlockQuote 
                        quote={quote}
                        author={author}
                 />
            }
            <button 
                className="btn btn-success" 
                onClick={() => increment()}
                disabled={isLoading}
                >
                Next Quote
            </button>
        </>
    )
}
