/**
 * Fetch a URL given as the first URL and parse the response as JSON
 */
async function fetchJson<T>(...args: Parameters<typeof fetch>): Promise<T> {
  const resp = await fetch(...args);
  return resp.json();
}

/**
 * Make a POST request to the `url` with `body` and parse response as JSON
 */
export function postJson<T>(url: string, body: any): Promise<T> {
  return fetchJson(url, {
    body,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function listGroups() {
  return fetchJson<GroupInfo[]>("/groups");
}

export type GroupInfo = {
  id: string;
  name: string;
};
