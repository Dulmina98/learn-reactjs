import React from "react";

const Hello = () => {

    /*return (
        <div>
            <h1>Hello Dulmina</h1>
        </div>
    )*/

    return React.createElement(
        'div',
        {className: 'Hello'},
        React.createElement('h1', null, "Hello Dulmina"))
}

export default Hello;