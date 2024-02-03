"use server"

import { revalidateTag } from "next/cache"

export const deleteFlow = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/flows/${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "DELETE",
        body: JSON.stringify(id)
    })
    if(!response.ok) return console.log("Delete failed", id)
    revalidateTag("flows")
}