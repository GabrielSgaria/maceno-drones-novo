'use server'

const url = process.env.HYGRAPH_URL as string;
const token = process.env.HYGRAPH_TOKEN as string;

export const fetchHygraphQuery = async (query: string) => {
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
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result.data;
    } catch (err) {
        console.error("Error fetching data:", err);
        return null;
    }
};
