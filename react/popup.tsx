import * as React from 'react';
import * as ReactDOM from 'react-dom';

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '301px',
  gap: '30px',
  padding: '35px',
};

function sendMessageToContentScript() {
  console.log(
    "Sending message from 'react/popup.tsx' to 'chrome/content-script.ts'"
  );
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(
      activeTab.id || 0,
      { greeting: 'Greetings!' },
      (response) => {
        console.log('Send message response = ');
        console.log({ response });
      }
    );
  });
}

const Popup = () => {
  return (
    <div style={divStyle as React.CSSProperties}>
      <button
        type='button'
        onClick={() => console.log('Popup send button clicked!')}
        id='popup-button-send'
      >
        Click to send message to content script!
      </button>

      <button
        type='button'
        onClick={() => chrome.runtime.openOptionsPage(() => {})}
      >
        Options page (react/options.tsx)
      </button>

      <button
        type='button'
        onClick={() => {
          chrome.tabs.create({ active: true, url: 'html/localpage.html' });
        }}
      >
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

document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('popup-button-send')
    ?.addEventListener('click', sendMessageToContentScript);
});
