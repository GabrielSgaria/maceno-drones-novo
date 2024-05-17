'use server'
import { unstable_cache, revalidateTag }  from "next/cache";

const url = process.env.HYGRAPH_URL as string;
const token = process.env.HYGRAPH_TOKEN as string;

export const fetchHygraphQuery = unstable_cache(async (query: string) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ query }),
        });
        
        if (!response.ok) {
            throw new Error(`response erro! status: ${response.status}`);
        }
        
        // revalidateTag(`cache-portfolio`);
        const result = await response.json();
        return result.data;
    } catch (err) {
        console.error("Error fetching data:", err);
        return null;
    }
}, ['cache-portfolio'], {
    tags: ['cache-portfolio']
})
