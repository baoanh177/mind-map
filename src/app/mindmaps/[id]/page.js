"use client"
import ReactFlow, {
    Background,
    Controls,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    MiniMap,
    useReactFlow,
} from "reactflow"
import { useCallback, useRef, useMemo, useContext, useEffect } from "react"
import "reactflow/dist/style.css"
import { EditNode, CircleNode } from "./components/nodes"
import { FlowContext } from "~/providers/FlowProvider"
import { updateFlow } from "../actions/updateFlow"

function Mindmap() {
    const connectingNodeId = useRef(null)
    const { nodes, setNodes, edges, setEdges, saveStatus, setSaveStatus, flowMeta, flow, editable } = useContext(FlowContext)
    const { screenToFlowPosition } = useReactFlow()
    const nodeTypes = useMemo(() => ({ 
        editNode: EditNode,
        circle: CircleNode
    }), [])

    document.onkeydown = async e => {
        if(saveStatus == "noSave" && editable) {
            if (e.key === 's' && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                e.preventDefault()
                await updateFlow(flow, {
                    ...flowMeta,
                    data: {nodes, edges}
                })
                setSaveStatus("saved")
            }
        }
    }

    const getChildNodePosition = (event, parentNode) => {
        const panePosition = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        })

        return {
            x: panePosition.x - parentNode.width / 2,
            y: panePosition.y - parentNode.height / 2,
        }
    }

    const onNodeDoubleClick = (e, activeNode) => {
        if(editable) {
            const newNodes = nodes.map(node => {
                if(node.id == activeNode.id) {
                    node.type = 'editNode'
                }
                return node
            })
            setNodes(newNodes)
        }
    }

    const onConnect = useCallback((params) => {
        if(editable) setEdges((eds) => addEdge(params, eds))
    }, [setEdges, saveStatus])

    const onNodesChange = useCallback((changes) => {
        if(editable) {
            setNodes((nds) => applyNodeChanges(changes, nds))
            if(saveStatus != "noSave") {
                setSaveStatus("noSave")
            }
        }
    }, [saveStatus])

    const onEdgesChange = useCallback((changes) => {
        if(editable) {
            setEdges((eds) => applyEdgeChanges(changes, eds))
            if(saveStatus != "noSave") {
                setSaveStatus("noSave")
            }
        }
    }, [saveStatus])

    const onConnectStart = useCallback((e, { nodeId }) => {
        if(editable) connectingNodeId.current = nodeId
    }, [nodes, edges, saveStatus])

    const onConnectEnd = useCallback((e) => {
        const targetIsPane = e.target.classList.contains("react-flow__pane")

        if (targetIsPane && connectingNodeId.current) {
            const childNodePosition = getChildNodePosition(e, nodes[0])
            const newNodeId = (+nodes[nodes.length - 1].id + 1).toString()
            setNodes([...nodes, {
                id: newNodeId,
                position: childNodePosition,
                type: "",
                data: { label: `Node ${newNodeId}` },
            }])
            setEdges([...edges, { 
                id: `f${connectingNodeId.current}-${newNodeId}`, 
                source: connectingNodeId.current, 
                target: newNodeId 
            }])
        }
    }, [nodes, edges])

    const onDrop = event => {
        const type = event.dataTransfer.getData('application/reactflow')

        if (typeof type === 'undefined' || !type) {
            return
        }

        const targetIsPane = event.target.classList.contains("react-flow__pane")

        if (targetIsPane) {
            const childNodePosition = getChildNodePosition(event, nodes[0])
            const newNodeId = (+nodes[nodes.length - 1].id + 1).toString()
            const newNode = {
                id: newNodeId,
                type,
                position: childNodePosition,
                data: { label: `node` },
            }
            setNodes([...nodes, newNode])
        }
    }
    
    const onDragOver = event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
    }

    return (
        <div className="w-full h-full react-flow__pane">
            <ReactFlow
                nodeTypes={nodeTypes}
                nodesDraggable={editable}
                nodes={nodes}
                edges={edges}
                fitView
                deleteKeyCode={editable && 'Backspace'}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onConnectEnd={onConnectEnd}
                onNodeDoubleClick={onNodeDoubleClick}
                onConnectStart={onConnectStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
            >
                <Background variant="dots" />
                <MiniMap />
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default Mindmap
