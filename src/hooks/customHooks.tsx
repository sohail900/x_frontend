import { useState, MouseEventHandler } from 'react'
export const useSidebarToggle = () => {
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false)
    const toggleSidebar: MouseEventHandler<HTMLButtonElement> = () =>
        setSidebarOpen((pre) => !pre)
    console.log(isSidebarOpen)

    return [isSidebarOpen, toggleSidebar]
}
