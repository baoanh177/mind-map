"use client"
import Switch from "./Switch"
import clsx from "clsx"
import { useState, useCallback, useEffect, memo } from "react"
import { updateFlow } from "../../actions/updateFlow"
import { IoShareSocialOutline, IoSaveOutline } from "react-icons/io5"


function Actions({ saveStatus, nodes, edges, flowMeta, setShareModel, setSaveStatus, flow }) {
    const [autoSave, setAutoSave] = useState(false)

    useEffect(() => {
        if(autoSave) {
            const timerId = setTimeout(handleSave, 2000)
            return () => {
                clearTimeout(timerId)
            }
        }
    }, [nodes, edges, flowMeta])

    const handleSave = useCallback(async () => {
        if(saveStatus != "saved") {
            setSaveStatus("saving")
            await updateFlow(flow, {
                title: flowMeta.title,
                description: flowMeta.description,
                data: { nodes, edges }
            })
            setSaveStatus("saved")
        }
    }, [saveStatus, nodes, edges, flowMeta])

    return <>
        <div className="flex items-center gap-1">
            <span className="text-xs">AutoSave</span> 
            <Switch autoSave={autoSave} setAutoSave={setAutoSave}/>
        </div>
        {saveStatus != "saving" ?
            <button 
                className={clsx("px-4 py-1 w-24 rounded-md flex items-center gap-1 justify-center", 
                    saveStatus == "saved" ? "bg-green-900 text-gray-200" : "bg-green-600 text-white")}
                onClick={handleSave}
            >
                <IoSaveOutline />
                <span>{saveStatus == "saved" ? "Saved" : "Save"}</span>
            </button>
            : 
            <button className="px-4 py-1 w-24 rounded-md bg-green-900 text-gray-200 gap-1 flex items-center">
                <div className="w-3 h-3 rounded-full animate-spin border-2 border-solid border-gray-200 border-t-transparent"></div>
                <span>Saving</span>
            </button>
        }
        <button 
            onClick={() => setShareModel(true)}
            className="px-4 py-1 rounded-md bg-blue-600 text-white flex items-center justify-center gap-1"
        >
            <IoShareSocialOutline />
            <span>Share</span>
        </button>
    </>
}

export default memo(Actions)