import React from 'react'
import PropTypes from 'prop-types'

export const BlockQuote = ({quote, author}) => {
    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{display: 'flex'}}
            >
                <p className="mb-2">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
        </>
    )
}


// Config Prop-Types
BlockQuote.propTypes = {
    author: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
}
