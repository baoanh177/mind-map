export const getFlowById = async id => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/flows/${id}`, {
        cache: "no-cache"
    })
    if(!response.ok) {
        return false
    }
    const data = await response.json()
    return { response, data }
}