"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return

    const handleChangeTheme = () => {
        setTheme(theme == "dark" ? "light" : "dark")
    }

    return (
        <>
            <button
                id="theme-toggle"
                onClick={handleChangeTheme}
                type="button"
                className={`${
                    theme == "dark"
                        ? "text-gray-300 border-gray-300"
                        : "text-gray-800 border-gray-500"
                } border-2 rounded-lg text-sm p-2`}
            >
                <svg
                    id="theme-toggle-dark-icon"
                    className={`${theme == "dark" ? "hidden" : ""} w-5 h-5`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                    id="theme-toggle-light-icon"
                    className={`${theme == "dark" ? "" : "hidden"} w-5 h-5`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>
        </>
    )
}

export default ThemeSwitcher
