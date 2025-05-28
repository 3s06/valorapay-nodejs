export class PixApiClient {
  private baseUrl: string;
  private clientId: string;
  private clientSecret: string;

  constructor({
    baseUrl,
    clientId,
    clientSecret,
  }: {
    baseUrl: string;
    clientId: string;
    clientSecret: string;
  }) {
    this.baseUrl = baseUrl;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  private getHeaders(): Headers {
    const credentials = btoa(`${this.clientId}:${this.clientSecret}`);
    return new Headers({
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/json',
    });
  }

  public async get<T>(path: string, params: Record<string, string> = {}): Promise<T> {
    const url = new URL(`${this.baseUrl}${path}`);
    Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));

    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: this.getHeaders(),
    });

    if (!res.ok) throw new Error((await res.json()).error || res.statusText);
    return res.json();
  }

  public async post<T>(path: string, body: any): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error((await res.json()).error || res.statusText);
    return res.json();
  }
}
