// jsdom has no fetch, so tests install a mock that answers by URL.
export const mockFetch = (routes: Record<string, () => Promise<Partial<Response>>>) => {
  const fetchMock = jest.fn((input: RequestInfo | URL) => {
    const url = String(input)
    const match = Object.keys(routes).find((prefix) => url.startsWith(prefix))
    if (!match) return Promise.reject(new Error(`Unmocked fetch: ${url}`))
    return routes[match]()
  })
  global.fetch = fetchMock as unknown as typeof fetch
  return fetchMock
}

export const json = (body: unknown, ok = true, status = 200): Promise<Partial<Response>> =>
  Promise.resolve({ ok, status, json: () => Promise.resolve(body) })

export const JOKE_URL = 'https://icanhazdadjoke.com/'
export const FEED_URL = 'https://api.rss2json.com/'
