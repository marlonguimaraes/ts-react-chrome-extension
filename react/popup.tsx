import * as React from 'react';
import * as ReactDOM from 'react-dom';

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '300px',
  gap: '30px',
};

const Popup = () => {
  return (
    <div style={divStyle}>
      <button type='button' onClick={() => alert('popup.html')}>
        Click me! (react/popup.tx)
      </button>

      <button
        type='button'
        onClick={() => chrome.runtime.openOptionsPage(() => {})}>
        Options page (react/options.tsx)
      </button>

      <button
        type='button'
        onClick={() => {
          chrome.tabs.create({ active: true, url: 'html/localpage.html' });
        }}>
        Options custom local page (react/localpage.tsx)
      </button>
    </div>
  );
};

function App() {
  return <Popup />;
}

const mountNode = document.getElementById('popup-app');
ReactDOM.render(<App />, mountNode);
