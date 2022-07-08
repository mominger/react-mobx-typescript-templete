import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

const Log = {
  error(msg: string) {
    //send to sentry
    /* Sentry.init({
      dsn: 'xxx',
      integrations: [new BrowserTracing()],
      tracesSampleRate: 1.0,
    });
    */

    console.error(msg);
  },
};
export default Log;
