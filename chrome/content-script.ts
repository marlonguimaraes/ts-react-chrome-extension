console.log('Content script loaded! Find me at chrome/content-script.ts');

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Received request message in 'chrome/content-script.ts' ");
  console.log({ request, tab: sender.tab });

  if (request.greeting) {
    sendResponse({ farewell: 'goodbye' });
  }
});
