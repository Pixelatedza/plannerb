import './app.css';
import App from './App.svelte';

import * as Sentry from '@sentry/svelte';
import { BrowserTracing } from '@sentry/tracing';

// Initialize the Sentry SDK here
if (import.meta.env.PROD) {
  Sentry.init({
    dsn: 'https://9d9e25e615854ac883847a718a898066@o564063.ingest.sentry.io/4504730247888896',
    integrations: [new BrowserTracing()],
    environment: import.meta.env.MODE,

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

const app = new App({
  target: document.getElementById('app'),
});

export default app;
