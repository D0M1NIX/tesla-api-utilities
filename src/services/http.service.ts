import fetch from 'node-fetch';
import fetchCookie from 'fetch-cookie';

const fetchWithCookies = fetchCookie(fetch);

export class HttpService {
    private baseUrl: string;
    
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    
    async get<T>(endpoint: string, query: any): Promise<T> {
        const queryString = `query=${encodeURIComponent(JSON.stringify(query))}`;
        const endpointWithQueryString = `${this.baseUrl}${endpoint}${queryString ? '?' + queryString : ''}`;
        
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000); // 15-second timeout
        
        const headers = {
            'User-Agent': 'Mozilla/5.0',
            'Host': 'www.tesla.com',
            'Accept': '*/*',
            'Connection': 'keep-alive',
        };
        
        try {
            console.log(`Getting required cookies from Tesla...`);
            const dummy = await fetchWithCookies(this.baseUrl, {
                headers: headers,
                signal: controller.signal,
            });
            console.log(`Base call completed - ${dummy.status} ${dummy.statusText}`);

            clearTimeout(timeout);

            console.log(`Calling inventory endpoint...`);
            const response = await fetchWithCookies(endpointWithQueryString, {
                headers: headers,
                signal: controller.signal,
            });
            console.log(`Inventory call completed - ${response.status} ${response.statusText}`);
            // response.headers.forEach((value, key) => {
            //     console.log(`${key}: ${value}`);
            // });

            clearTimeout(timeout);

            if (!response.ok) {
                if (response.status === 429) {
                    throw new Error('Rate limited');
                }
                const errorString = `HTTP error! status: ${response.status}`;
                console.error(errorString);
                throw new Error(errorString);
            }

            return JSON.parse(await response.text()) as T;
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                console.error('Request timed out');
            } else {
                console.error(`Error in GET request: ${error}`);
            }
            throw error;
        }
    }
    
    async post<T>(endpoint: string, data: any): Promise<T> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return JSON.parse(await response.text()) as T;
    }
}
