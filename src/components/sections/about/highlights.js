import React from 'react'
import data from '../../../data/about.json';

const Highlights = () => {
    return (
        <div>
            <div id="highlights-heading">
                <h3 className="text-primary"> Highlights </h3>
            </div>

            <div className="entry-content" id="highlights">
                <ul id="highlights_list">
                    {
                        Object.keys(data["highlights"]).map((key, index) => ( 
                            <li><span className="text-primary" id="highlight_date">{key}: </span>{data["highlights"][key]}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Highlights
