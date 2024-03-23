import { ReactElement } from 'react'
/**
 * Imports React Icon components from react-icons/md that
 * will be used for the sidebar button icons.
 */
import {
    MdHomeFilled,
    MdOutlineMessage,
    MdOutlineNotifications,
    MdOutlineExplore,
} from 'react-icons/md'
import { HiUser } from 'react-icons/hi'
export const items: RightSideBarType<string, ReactElement>[] = [
    {
        name: 'Home',
        FaIcon: <MdHomeFilled />,
        path: '/home',
    },
    {
        name: 'Profile',
        FaIcon: <HiUser />,
        path: null,
    },
    {
        name: 'Explore',
        FaIcon: <MdOutlineExplore />,
        path: '/home/explore',
    },
    {
        name: 'Notifications',
        FaIcon: <MdOutlineNotifications />,
        path: '/home/notifications',
    },
    {
        name: 'Messages',
        FaIcon: <MdOutlineMessage />,
        path: '/home/messages',
    },
]
