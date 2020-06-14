import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Popup = () => {
    return (
        <div>
            <button type='button' onClick={() => alert('popup.html')}>
                Click me! (Popup.html)
            </button>
        </div>
    );
};

function App() {
    return <Popup />;
}

const mountNode = document.getElementById('popup-app');
ReactDOM.render(<App />, mountNode);
