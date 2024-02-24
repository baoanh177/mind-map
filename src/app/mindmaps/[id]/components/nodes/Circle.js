import { Handle, Position } from "reactflow"

function CircleNode({ id, data }) {
    return <>
        <Handle type="source" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
        <Handle type="target" position={Position.Left} />
        <Handle type="target" position={Position.Right} />
        <div 
            className="min-w-[40px] min-h-[40px] rounded-[50%] border justify-center items-center border-black overflow-hidden
            p-2"
        >
            <span className="text-xs text-center leading-none">{data.label}</span>
        </div>
    </>
}

export default CircleNode;