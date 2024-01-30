export const getAllFlows = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/flows`, {
        cache: "no-cache",
        next: {
            tags: ["flows"]
        }
    })
    if(!response.ok) {
        return false
    }
    const data = await response.json()
    return { response, data }
}