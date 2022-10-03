import React, { useLayoutEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

export const BlockQuote = ({quote, author}) => {
    const pRef = useRef()

    const [boxSize, setBoxSize] = useState({width: 0, height: 0})

    useLayoutEffect(() => { // "useLayoutEffect" se dispara una vez que se hayan cargado los componentes del DOM, y este caso depende de "quote" para dispararse, y cuando el DOM cargue se disparara de nuevo... (Siempre es mejor usar "useEffect" este "useLayoutEffect" ya no se utiliza)
        const { width, height } = pRef.current.getBoundingClientRect()
        setBoxSize({
            width,
            height
        })
    }, [quote])

    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{display: 'flex'}}
            >
                <p 
                    ref={pRef}
                    className="mb-2">{quote}
                </p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}

// Config Prop-Types
BlockQuote.propTypes = {
    author: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
}
