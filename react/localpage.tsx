import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Options = () => {
    return (
        <div>
            <h1>This is the local page</h1>
            <p>You can place here any react/HTML content</p>
            <p>
                Since it's shipped with the chrome page, it doesn't need
                internet to be acessible
            </p>
            <button type='button' onClick={() => alert('localpage.html')}>
                Click me! (localpage.html)
            </button>
        </div>
    );
};

function App() {
    return <Options />;
}

const mountNode = document.getElementById('app-localpage');
ReactDOM.render(<App />, mountNode);
