"use client"

function NodeOptions() {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData("application/reactflow", nodeType)
        event.dataTransfer.effectAllowed = "move"
    }

    return (
        <>
            <div 
                className="fixed bottom-3 left-1/2 -translate-x-1/2 p-1 bg-white z-50 shadow shadow-gray-300 [&>div]:cursor-grab
                flex items-center gap-2"
            >
                <div
                    className="w-8 h-8 bg-gray-300"
                    draggable
                    onDragStart={event => onDragStart(event, "default")}
                ></div>
                <div
                    className="w-8 h-8 bg-gray-300 rounded-[50%]"
                    draggable
                    onDragStart={event => onDragStart(event, "circle")}
                ></div>
            </div>
        </>
    )
}

export default NodeOptions
