import { notFound } from "next/navigation"
import FlowProvider from "~/providers/FlowProvider";
import ToolLayout from "./components/ToolLayout"
import { getFlowById } from "../actions/getFlowById"
import { getSession } from "@auth0/nextjs-auth0"

export async function generateMetadata({ params }) {
    const { id } = params
    const { data: flow } = await getFlowById(id)
    return {
        title: flow.title,
        description: flow.description,
        openGraph: {
            title: flow.share_data?.title,
            description: flow.share_data?.description,
            images: [flow.share_data?.shared_image],
        }
    }
}

async function MindmapLayout({ params, children }) {
    const { id } = params
    const { data: flow } = await getFlowById(id)
    let isOwner = true

    // Check private
    const userSession = await getSession()
    if(!flow.isPublic && userSession?.user.sub != flow.user_id) {
        return notFound()
    }

    if(userSession?.user.sub != flow.user_id) isOwner = false

    if(!flow) {
        return notFound()
    }

    return <>
        <FlowProvider flow={flow} isOwner={isOwner}>
            <ToolLayout id={id} flow={flow} user_id={userSession?.user.sub}/>
            <main className="h-[100vh] flex">
                { children }
            </main>
        </FlowProvider>
    </>
}

export default MindmapLayout;