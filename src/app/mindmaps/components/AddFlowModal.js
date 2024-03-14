"use client"
import { memo, useState } from "react"
import { v4 as uuid } from "uuid"
import { IoMdClose } from "react-icons/io";
import { addFlow } from "../actions/addFlow"

function AddFlowModal({ userId }) {
    const [isModalOpen, setModalOpen] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const handleCreateFlow = async e => {
        e.preventDefault()
        if(isLoading) return
        
        setLoading(true)

        const formData = Object.fromEntries([...new FormData(e.target)])
        const newFlow = {
            id: uuid(),
            user_id: userId,
            title: formData.title.trim() ? formData.title : "Untitled",
            isPublic: formData.status == 'public',
            description: formData.description ?? "Không có mô tả",
            created_at: new Date,
            share_data: formData.status && {
                title: formData.title,
                description: formData.description ?? "Không có mô tả",
                shared_image: formData.shared_image ?? 
                    "https://brandshark.com/wp-content/uploads/2023/02/9DEEF7F5-C215-43B9-BEBD-C8856AF52E30-1080x675.jpeg"
            },
            data: {
                nodes: [{
                    id: '0',
                    position: {
                        x: 0,
                        y: 0,
                    },
                    data: {
                        label: "Mindmap Flow",
                    },
                    type: "input",
                    deletable: false,
                }],
                edges: []
            }
        }
        await addFlow(newFlow)
        setModalOpen(false)
        setLoading(false)
    }

    return <>
        <button 
            className="px-3 py-1 rounded-md bg-green-600 text-white"
            onClick={() => setModalOpen(true)}
        >Add new</button>
        {
            isModalOpen &&
            <>
                <div 
                    className="
                        fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 p-8 z-50
                        w-[400px] border rounded-xl bg-white dark:bg-gray-800 shadow-md select-none
                    "
                >
                    <IoMdClose 
                        className="absolute right-3 top-3 text-xl cursor-pointer w-7 h-7 hover:bg-gray-100 dark:hover:bg-gray-700 transition rounded-[50%]" 
                        onClick={() => setModalOpen(false)} 
                    />
                    <div className="text-2xl font-semibold text-center mb-5">Create new Mind map</div>
                    <form className="w-full h-full flex flex-col gap-5" onSubmit={handleCreateFlow}>
                        <input 
                            type="text" 
                            name="title" 
                            className="border-b outline-none w-full p-1 border-green-600 dark:bg-gray-900 rounded" 
                            placeholder="Title of Mind map *"
                            autoFocus
                        />
                        <div className="flex gap-5">
                            <div className="flex items-center gap-1 [&>*]:cursor-pointer">
                                <input type="radio" id="public" name="status" value="public" defaultChecked className="accent-green-600"/>
                                <label htmlFor="public" className="text-xs">Public</label>
                            </div>
                            <div className="flex items-center gap-1 [&>*]:cursor-pointer">
                                <input type="radio" id="private" name="status"value="private" className="accent-green-600"/>
                                <label htmlFor="private" className="text-xs">Private</label>
                            </div>
                        </div>
                        <button 
                            className="
                                py-2 px-3 rounded bg-green-600 text-white flex justify-center
                                hover:bg-green-700 transition cursor-pointer
                            "
                        >
                        {isLoading ?
                        <div className="flex gap-2">
                           <div className="w-6 h-6 rounded-full animate-spin border-2 border-dashed border-white border-t-transparent"></div>
                            Creating...
                        </div>:
                        'Create'}
                        </button>
                    </form>
                </div>
                <div 
                    className="bg-black fixed inset-0 bg-opacity-30 z-40"
                    onClick={() => setModalOpen(false)}
                ></div>
            </>
        }
    </>
}

export default memo(AddFlowModal)