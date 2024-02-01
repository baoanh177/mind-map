"use client"
import { Fragment, memo, useContext, useState } from "react"
import Header from "./Header";
import clsx from "clsx"
import OwnerShareModal from "./OwnerShareModal"
import { FlowContext } from "~/providers/FlowProvider"
import ViewerShareModal from "./ViewerShareModal"

function ToolLayout({ children, id, flow, flows }) {
    const [shareModel, setShareModel] = useState(false)
    const { editable } = useContext(FlowContext)

    return <>
        <Header flowId={id} flow={flow} setShareModel={setShareModel}/>
        {shareModel && <Fragment>
            {editable ?
            <OwnerShareModal setShareModel={setShareModel} flows={flows} flow={flow}/>:
            <ViewerShareModal />}    
            <div
                className={clsx("overlay", "bg-black bg-opacity-50 fixed inset-0 z-20")}
                onClick={() => setShareModel(false)}
            ></div>
        </Fragment>}
        {children}
    </>
}

export default memo(ToolLayout);