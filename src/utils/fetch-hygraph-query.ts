'use server'
const url = process.env.HYGRAPH_URL as string
const token = process.env.HYGRAPH_TOKEN as string

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
            next: {
                revalidate: 60 * 60 * 24 //24 hours
            }
        })

        const { data } = await response.json()
        return {
            projects: data.portfolios
        }
    } catch (err) {
        console.log(err)
        return [];
    }
}