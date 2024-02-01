"use client"
import { useRef } from "react"
import { MdOutlineContentCopy } from "react-icons/md"

function ViewerShareModal() {
    const linkInputRef = useRef()

    return (
        <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 
            w-96 shadow-sm shadow-gray-600 border rounded-md bg-white z-30"
        >
            <h3 className="text-2xl font-bold text-center mb-3">
                Share Mindmap
            </h3>
            <div className="mt-2">
                <span className="text-gray-600">Shared link</span>
                <div className="border w-full h-9 rounded-md overflow-hidden border-black relative">
                    <input
                        ref={linkInputRef}
                        type="text"
                        name="shared_link"
                        defaultValue={window.location.href}
                        readOnly
                        className="w-full h-full py-1 px-3 pr-7 outline-none"
                    />
                    <MdOutlineContentCopy
                        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer" 
                        onClick={() => navigator.clipboard.writeText(linkInputRef.current.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default ViewerShareModal