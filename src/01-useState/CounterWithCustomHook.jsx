import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter(5)

    return (
        <>
            <h1>Counter With Hook: {counter}</h1>
            <button className="btn btn-success" onClick={() => increment(3)}>+1</button>
            <button className="btn btn-warning" onClick={reset}>Reset</button>
            <button className="btn btn-danger" onClick={() => decrement(2)}>-1</button>
        </>
    )
}
