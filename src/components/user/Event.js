import React from 'react';

export default function Event(props)
{
    const {description,date}=props.item;

    return(
        <div className="text-center event my-4 py-4 px-1 event">
            {description}
            <span className="publishTime mr-3">{date}</span>
        </div>
    )
}