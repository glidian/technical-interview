/**
 * Fetch a URL given as the first URL and parse the response as JSON
 */
async function fetchJson(...args) {
  const resp = await fetch(...args);
  return resp.json();
}

/**
 * Make a POST request to the `url` with `body` and parse response as JSON
 */
// eslint-disable-next-line no-unused-vars
function postJson(url, body) {
  return fetchJson(url, {
    body,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function listGroups() {
  return fetchJson("/groups");
}
