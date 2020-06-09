import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Options = () => {
    return (
        <div>
            <button type='button' onClick={() => alert('options.html')}>
                Click me! (options.html)
            </button>
        </div>
    );
};

function App() {
    return <Options />;
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
