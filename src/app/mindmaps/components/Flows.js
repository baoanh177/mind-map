"use client"
import { useState, useEffect, memo } from "react"
import FlowCard from "./FlowCard"
import ContextMenu from "./ContextMenu"

function Flows({ flows }) {
    const [contextMenu, setContextMenu] = useState({
        id: null,
        top: 0,
        left: 0,
        isOpen: false
    })
    
    useEffect(() => {
        document.onclick = e => {
            if(!e.target.closest("#context-menu")) {
                setContextMenu(prev => ({...prev, isOpen: false}))
            }
        }
    }, [contextMenu])

    return <>
        <ul className="h-[220px] w-full px-4 border-x flex gap-4 overflow-x-auto">
            { contextMenu.isOpen && <ContextMenu {...contextMenu} setContextMenu={setContextMenu} /> }
            {flows && flows.map(flow => 
                <FlowCard 
                    key={flow.id} {...flow} 
                    contextMenu={contextMenu}
                    setContextMenu={setContextMenu}
                />
            )}
        </ul>
    </>
}

export default memo(Flows)