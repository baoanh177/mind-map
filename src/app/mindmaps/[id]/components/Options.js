"use client"

import clsx from "clsx"

function Options({ isPublic, setPublic }) {
    return <>
        <div className="flex justify-around h-8 w-full rounded-md border border-green-600 overflow-hidden p-[2px]">
                <label htmlFor="private" 
                    className={clsx(`flex items-center rounded-sm justify-center gap-1 [&>*]:cursor-pointer 
                    cursor-pointer w-1/2`, !isPublic && "bg-green-500 text-white")}>
                    <input
                        hidden
                        type="radio"
                        name="status"
                        id="private"
                        onChange={() => setPublic(false)}
                        defaultChecked={!isPublic}
                    />
                    <span>Private</span>
                </label>
                <label htmlFor="public" 
                    className={clsx(`flex items-center rounded-sm justify-center gap-1 [&>*]:cursor-pointer 
                    cursor-pointer w-1/2`, isPublic && "bg-green-500 text-white")}>
                    <input
                        hidden
                        type="radio"
                        name="status"
                        value="public"
                        id="public"
                        defaultChecked={isPublic}
                        onChange={() => setPublic(true)}
                    />
                    <span>Public</span>
                </label>
            </div>
    </>
}

export default Options;