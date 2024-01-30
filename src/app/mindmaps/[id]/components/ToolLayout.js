"use client"
import { memo, useState } from "react"
import Header from "./Header";
import ShareModel from "./ShareModel"

function ToolLayout({ children, id, flow, flows }) {
    const [shareModel, setShareModel] = useState(false)

    return <>
        <Header flowId={id} flow={flow} setShareModel={setShareModel}/>
        {shareModel && <ShareModel setShareModel={setShareModel} flows={flows} flow={flow}/>}
        {children}
    </>
}

export default memo(ToolLayout);