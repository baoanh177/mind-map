"use client"
import { 
    ReactFlowProvider,
    useNodesState,
    useEdgesState
} from "reactflow"
import { createContext, useEffect, useState } from "react"

export const FlowContext = createContext()

function FlowProvider({ children, flow, isOwner }) {
    const [nodes, setNodes] = useNodesState([])
    const [edges, setEdges] = useEdgesState([])
    const [flowMeta, setFlowMeta] = useState({})
    const [editable, setEditable] = useState(true)
    const [saveStatus, setSaveStatus] = useState("noSave")

    useEffect(() => {
        if(flow.data) {
            setNodes(flow.data.nodes)
            setEdges(flow.data.edges)
            setFlowMeta({ title: flow.title, description: flow.description })
        }
    }, [flow.data])

    useEffect(() => {
        if(!isOwner && flow.share_data.role != 'editor') setEditable(false)
    }, [flow, isOwner])

    return <>
        <ReactFlowProvider>
            <FlowContext.Provider 
                value={{ 
                    nodes, setNodes, 
                    edges, setEdges, 
                    flowMeta, setFlowMeta, 
                    saveStatus, setSaveStatus, 
                    flow,
                    editable
                }}
            >
                { children }
            </FlowContext.Provider>
        </ReactFlowProvider>
    </>
}

export default FlowProvider;