"use client"
import clsx from "clsx"
import { ImBin2 } from "react-icons/im"
import { FaInfoCircle } from "react-icons/fa"
import { deleteFlow } from "../actions/deleteFlow"
import { toast } from "react-toastify"

function MenuContext({ id, top, left, setContextMenu }) {
    const handleDelete = async () => {
        await toast.promise(
            deleteFlow(id),
            {
                pending: "Deleting data...",
                success: "Deleted data successfully",
                error: "Something went wrong, please try again later"
            },
            { autoClose: 1500 }
        )
        setContextMenu(prev => ({...prev, id: null, isOpen: false}))
    }

    return <>
        <div 
            className={clsx("absolute bg-white rounded z-40 overflow-hidden cursor-pointer border flex flex-col select-none")}
            id="context-menu"
            style={{ top: `${top}px`, left: `${left}px`}}
        >
            <div 
                onClick={handleDelete}
                className="hover:bg-red-500 hover:text-white transition flex gap-2 py-1 px-2 items-center"
            >
                <ImBin2 />
                <span>Xóa</span>
            </div>
            <div className="hover:bg-blue-500 hover:text-white transition flex gap-2 py-1 px-2 items-center">
                <FaInfoCircle />
                <span>Thông tin</span>
            </div>
        </div>
    </>
}

export default MenuContext;