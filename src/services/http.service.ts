import https from 'https';
import fetch, { RequestInit } from 'node-fetch';

export class HttpService {
    private baseUrl: string;
    
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    
    async get<T>(endpoint: string, query: any): Promise<T> {
        const queryString = `query=${encodeURIComponent(JSON.stringify(query))}`;
        const endpointWithQueryString = `${this.baseUrl}${endpoint}${queryString ? '?' + queryString : ''}`;
        
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000); // 10-second timeout
        
        const cert = await fetchCertificate();
        console.log(`Certificate: ${cert}\n`);
        const httpsAgent = new https.Agent({
            ca: cert,
            rejectUnauthorized: true
        });
        
        try {
            console.log(`GET ${endpointWithQueryString}\n`);
            const response = await fetch(endpointWithQueryString, {
                headers: {
                    'Content-Type': 'application/json',
                    'Origin': 'https://www.tesla.com', // Mimic the browser's origin
                },
                agent: httpsAgent,
                signal: controller.signal,
            });

            clearTimeout(timeout);

            if (!response.ok) {
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

async function fetchCertificate(): Promise<string> {
    return new Promise((resolve, reject) => {
        https.get('https://cacerts.digicert.com/GeoTrustRSACA2018.crt.pem', (res) => {
            let data = '';
            res.on('data', (chunk) => (data += chunk));
            res.on('end', () => resolve(data));
        }).on('error', (err) => reject(err));
    });
}