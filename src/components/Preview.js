import React from 'react';

export default (props) =>

    <div className="border rounded p-3 mb-4">
        {
            props.text.split('').map((s,i) => {
                let color;
                if (i < props.userInput.length) {
                    color = s === props.userInput[i] ? '#dfffa0' : '#fcbea4';
                }
                return <span key={i} style={{backgroundColor: color}}>{s}</span>
            })
        }
    </div>

