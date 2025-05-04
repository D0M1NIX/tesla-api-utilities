import { chromium, Browser, Page, Cookie } from 'playwright';

export class HttpService {
    private baseUrl: string;
    
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    
    async get<T>(endpoint: string, query: any): Promise<T> {                
        const browser: Browser = await chromium.launch({ headless: true });
        const context = await browser.newContext();
        const page: Page = await context.newPage();

        try {
            // Set headers to mimic a browser
            await page.setExtraHTTPHeaders({
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'accept-language': 'en-US,en;q=0.9',
                'cache-control': 'max-age=0',
                'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': 'Windows',
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'none',
                'sec-fetch-user': '?1',
                'sec-gpc': '1',
                'upgrade-insecure-requests': '1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            });

            const queryString = query ? `query=${encodeURIComponent(JSON.stringify(query))}` : null;
            const endpointWithQueryString = `${this.baseUrl}${endpoint}${queryString ? '?' + queryString : ''}`;
            console.log(`Calling endpoint...`);
            const response = await page.goto(endpointWithQueryString, { waitUntil: 'networkidle' });
            if (!response) throw new Error('No response received from the endpoint');

            // const endpointCookies: Cookie[] = await context.cookies();
            // console.log('Cookies after endpoint call:', endpointCookies.map(c => `${c.name}=${c.value}`).join('; '));

            // Handle response
            const status = response.status();
            const headers = response.headers();
            const text = await response.text();

            if (status !== 200) {
                if (status === 429) throw new Error('Rate limited');
                throw new Error(`HTTP error! status: ${status}`);
            }

            return JSON.parse(text) as T;
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                console.error('Request timed out');
            } else {
                console.error(`Error in GET request: ${error}`);
            }
            throw error;
        } finally {
            await browser.close();
        }
    }
}
