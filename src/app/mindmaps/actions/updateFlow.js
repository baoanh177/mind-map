"use server"
import { revalidateTag } from "next/cache"

export const updateFlow = async (flow, updateData) => {
    Object.keys(updateData).forEach(key => {
        flow[key] = updateData[key]
    })
    console.log(flow)
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/flows/${flow.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(flow)
    })
    if(!response.ok) return false
    // revalidateTag("flows")
}