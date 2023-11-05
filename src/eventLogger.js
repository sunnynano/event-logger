import { sendRequest } from "./utils";

/**
 * `sendRequest` is a helper function to send your request with
 * following type signature:
 *
 * sendRequest(body: Object) => Promise<void>
 *
 * You can abort the request "in-flight" via the following:
 *
 * const requestPromise = sendRequest()
 * requestPromise.abort()
 *
 */

export class EventLogger {
  logEvent(eventName, data) {
    // TODO: Implement for Part 1
  }
}

const eventLogger = new EventLogger();
export { eventLogger };
