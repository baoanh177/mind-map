"use client"
import { useContext, useEffect } from "react"
import { IoArrowBackCircleOutline } from "react-icons/io5"
import { FlowContext } from "~/providers/FlowProvider"
import { useRouter } from "next/navigation"
import Actions from "./Actions"

function Header({ flow, setShareModel }) {
    const router = useRouter()
    const { nodes, edges, saveStatus, setSaveStatus, flowMeta, setFlowMeta, editable } = useContext(FlowContext)

    useEffect(() => {
        document.title = flowMeta.title
        if(flowMeta.title?.trim() == "") {
            document.title = "Mindmap Flow"
        }
    }, [flowMeta])
    
    const handleChangeTitle = e => {
        if(saveStatus != "noSave") {
            setSaveStatus("noSave")
        }
        setFlowMeta({...flowMeta, title: e.target.value})
    }

    const handleBack = () => {
        // Xử lí save confirm model tại đây
        router.push("/mindmaps")
    }

    return <>
        <header className="flex bg-transparent fixed top-0 left-0 right-0 px-5 py-2 z-20 gap-3">
            <button 
                onClick={handleBack}
                className="
                    h-10 w-10 bg-white flex items-center justify-center rounded-sm shadow-sm 
                    shadow-gray-400 hover:bg-gray-50 transition cursor-pointer
                "
            >
                <IoArrowBackCircleOutline className="text-2xl"/>
            </button>
            <div className="flex gap-3 items-center h-10 bg-white px-4 py-1 rounded-sm shadow-sm shadow-gray-400">
                <h2 className="text-xl font-semibold text-green-600 select-none">Flow</h2>
                {editable ? 
                <input 
                    type="text" 
                    defaultValue={flow.title}
                    spellCheck={false}
                    className="border-x-2 px-2 outline-none border-gray-400"
                    onChange={handleChangeTitle}
                />:
                <input 
                    type="text" 
                    defaultValue={flow.title}
                    spellCheck={false}
                    readOnly
                    className="border-x-2 px-2 outline-none border-gray-400"
                />}
                <Actions 
                    saveStatus={saveStatus} 
                    setSaveStatus={setSaveStatus} 
                    flow={flow} 
                    nodes={nodes} 
                    edges={edges} 
                    flowMeta={flowMeta} 
                    setShareModel={setShareModel}
                />
            </div>
        </header>
    </>
}

export default Header