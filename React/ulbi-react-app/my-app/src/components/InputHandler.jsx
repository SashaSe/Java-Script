import React, {useState} from 'react';

const InputHandler = () => {
    const [text, setText] = useState("")

    return (
        <div>
            <input type="text" value={text} onChange={event => setText(event.target.value)}/>
            <h2>{text}</h2>
        </div>
    );
};

export default InputHandler;