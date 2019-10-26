import React from 'react';

function RandomQuotes({ quotes }) {
    return (
        <div className="RandomQuotes">
            <h2>{quotes.character}</h2>
            <img src={quotes.image} alt={quotes.character} />
            <i>{quotes.quote}</i>
        </div>
    )
}

export default RandomQuotes;