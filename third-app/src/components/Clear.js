import React from "react";
import '../styesheets/Clear.css';

const Clear = (props) => (
    <div className="clear"
        onClick={ () => props.handlerClear(props.children) }>
            {props.children}
    </div>
);

export default Clear;