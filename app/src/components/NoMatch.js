import React, { Component } from 'react'

const NoMatch = props =>  {
    return (
        <div className="not-found">
            <div>
                <h3>No Results Found</h3>
                <p>You search for {props} did not return any results. Please try again.</p>
            </div>
        </div>  
    );
};

export default NoMatch;
