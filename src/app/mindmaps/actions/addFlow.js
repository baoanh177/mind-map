"use server"
import { revalidatePath, revalidateTag } from "next/cache"

export const addFlow = async newFlow => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/flows`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFlow)
    })
    if(response.ok) {
        revalidateTag("flows")
    }
}