export const fetchHygraphQuery = async (query: string) => {
    try {
        const response = await fetch("https://api-sa-east-1.hygraph.com/v2/clqf317ob0bdq01uq9mo5hrrg/master"!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTU2Mjc5NDAsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xxZjMxN29iMGJkcTAxdXE5bW81aHJyZy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1zYS1lYXN0LTEuaHlncmFwaC5jb20vIiwic3ViIjoiYTlmMWU1MzgtY2VlOS00ZmE2LTg0YTktYjA1ZDgyZjFjMGFlIiwianRpIjoiY2x3NWNrdXVrMDJrbDA3bHJkbDI2ZDlvZiJ9.ZdFk87wNGu43Vsr6FR-5VJKIfMMZ3mJSQTjkgT8u61ly75a6MA9B0Q6-5LcpP6fsgUwGI0Z8frFILAckXTjtIsa_7ORSIZFyuDRYXtoKL_iFzJNMPpv0d5JaTRU8DNG5fHRpHlH5zCv2PrfcsL6ZhkPEgyHz3rR3ncs0stMF9RPZ9kLRYHUi7oPgIK2MbafVlD-3q74iPNIJVa-6goGrWTt81T7_moGv_Rj-o1QbemKt3W9kJVrEAtTzF-yfmoH-MwbQUeSEKpgFGubxjW5-xa_YEvsIZI77wy8A5MCyYMkwJEQ18wJd85XPCXv1WpJTgDsg5wjUkJgYrqSFRclaNZ-MByEtxjWCXpybMybznuYyxJFxP9adtbFg38E_1MPQrS13ev6V5j8nbcF5s-RDpBAFfEizC2pd4MAOu2N9XyGKebPrevqYMymX2m2Cwz_6sszoXRg5Usj0UyTk4AKFECky75gD7iHkpgGKHGc2_tw_5lKy9GwhfulUXERLtWya4dFjvYFnSnrLwEAnQY1eW_fDWL_4npSAo7FvmcyupmbDgrtoaai_smz7PEpS0oUUP9ShnBXe15Z4Em3gsXOnEo3eQ8U0WeOPQ_RfZrwrwFgNzjEXFMBXLs5epGKgFNKCDq3-jFJirrv1d1nJYI_QTnQ-g3XnqXdyz67VkTuVLqQ"`
            },
            body: JSON.stringify({ query }),
            next: {
                revalidate: 60 * 60 * 24 //24 hours
            }
        })

        const { data } = await response.json()
        return data
    } catch (err) {
        console.log(err)
        return [];
    }
}