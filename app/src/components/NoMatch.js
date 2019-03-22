import React from 'react'

const NoMatch = props =>  {
    return (
        <div className="not-found">
            <div>
                <h3>No Results Found :(</h3>
                <p>You search for <i>{props.searchQuery}</i> returned no results. Try a different search!</p>
            </div>
        </div>  
    );
};

export default NoMatch;
