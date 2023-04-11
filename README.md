# ts-react-chrome-extension

> This is based on this [project](https://github.com/Samic8/Hippocampus), please, check it out!

- [x] Multiple `.ts` (for chrome scripts) and `.tsx` (react) entry points
- [x] Multiple "application/pages" (each `.html` is an independent React app) as opposed to `create-react-app` (which is single page by design)
- [x] Easy to expand (creating new pages or scripts), develop and build


## Running locally and loading a build in chrome

### Prerequisites

```bash
$ yarn/npm install
```

### Running locally

This will automatically run a build on code changes, so you don't need to update the local chrome extension to see your changes


```bash
$ yarn/npm run start
```

### Production build

This is when you need to load or ship your project to chrome.

1) Build

```bash
$ yarn/npm run build
```

2) Load the `/dist` (located in the root folder) folder to chrome.
