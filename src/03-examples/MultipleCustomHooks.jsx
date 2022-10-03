import { useCounter, useFetch } from "../hooks/index.barril";

// Components
import { LoadingQuotes, BlockQuote } from "./index.barril";

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter()
    // NOTA: La API solo llega hasta 30
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const {quote, author} = !!data && data[0]
    // undefined => !undefined => true => !true => false // Por lo tanto SI
    // !!undefined === false

    // if(isLoading) {
    //     return <h1>Cargando...</h1>
    // }

    // console.log(data, isLoading, hasError);

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
