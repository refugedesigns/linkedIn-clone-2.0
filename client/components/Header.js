import { useRouter } from "next/router"
import { useState } from "react"
import Link from "next/link"
import { 
    LinkedIn
} from "@material-ui/icons"

import { 
    HomeIcon, 
    UsersIcon,
    BriefcaseIcon,
    ChatIcon,
    BellIcon,
    DotsHorizontalIcon,
    ChevronDownIcon,
    ViewGridIcon
} from "@heroicons/react/solid"


import { SearchIcon } from "@heroicons/react/outline"

import { Avatar } from "@material-ui/core"
import ManageAccount from "./UI/ManageAccount"
import { userPic } from "../store/userSlice"
import { useSelector } from "react-redux"

const Header = () => {
    const router = useRouter()
    const [showAccount, setShowAccount] = useState(false)
    const profilePicture = useSelector(userPic)
    
    return (
        <header className="pl-8 lg:py-0 bg-white z-20 sticky top-0">
            <div className="flex items-center mx-auto overflow-hidden max-w-screen-lg ">
            <div className="flex items-center space-x-4 lg:w-1/3">
                <div><LinkedIn className="text-blue-600 cursor-pointer" style={{ height: "50px", width: "50px"}} /></div>
                <SearchIcon className="icon lg:hidden" />
                <div className="hidden lg:flex flex-1 justify-center items-center bg-blue-100 p-2 space-x-2 rounded-md">
                    <SearchIcon className="h-4 w-4 text-gray-700" />
                    <input type="text" placeholder="Search" className="bg-blue-100 flex-1 focus:outline-none placeholder-gray-600" />
                </div>
            </div>
           
            <nav className="flex-1 ml-5 max-w-sm lg:ml-20 lg:max-w-screen-lg">
                <ul className="flex justify-evenly items-center space-x-4 lg:space-x-8">
                <Link href="/" passHref>
                        <a className={ router.pathname === '/' ? 'active md:p-0 h-11 md:border-b-2 border-gray-800' : 'icon md:p-0 h-11'}>
                        <HomeIcon />
                        <p className="hidden md:inline-block text-xs whitespace-nowrap">Home</p>
                        </a>
                </Link>
                <Link href="/my-network" passHref>
                    <a className={ router.pathname === '/my-network' ? 'active md:p-0 h-11 md:border-b-2 border-gray-800': 'icon md:p-0 h-11'}>
                    <UsersIcon />
                    <p className="hidden md:inline-block text-xs whitespace-nowrap">My Network</p>
                    </a>
                </Link>
                <Link href="/jobs" passHref>
                    <a className={ router.pathname === '/jobs' ? 'active md:p-0 h-11 md:border-b-2 border-gray-800' : 'icon md:p-0 h-11'}>
                    <BriefcaseIcon />
                    <p className="hidden md:inline-block text-xs whitespace-nowrap">Jobs</p>
                    </a>
                </Link>
                <Link href="">
                    <a className={ router.pathname === '/messaging' ? 'active md:p-0 h-11' : 'icon md:p-0 h-11'}>
                    <ChatIcon/>
                    <p className="hidden md:inline-block text-xs whitespace-nowrap">Messaging</p>
                    </a>
                </Link>
                <Link href="">
                    <a className={ router.pathname === '/notification' ? 'active md:p-0 h-11' : 'icon md:p-0 h-11'}>
                    <BellIcon/>
                    <p className="hidden md:inline-block text-xs whitespace-nowrap">Notifications</p>
                    </a>    
                </Link>
                    <a className="cursor-pointer" onClick={() => setShowAccount(true)}>
                    <Avatar src={profilePicture} style={{height: "26px", width: "26px"}}>N</Avatar>
                    <div className="hidden md:flex items-center justify-center">
                        <p className="text-xs text-gray-500">Me</p>
                        <ChevronDownIcon className="h-4 text-gray-500" />
                    </div>
                    </a>
                {showAccount && <ManageAccount setShowAccount={setShowAccount} />}
                <DotsHorizontalIcon className="icon sm:hidden " />
                </ul>
            </nav>
            <div className="hidden sm:flex items-center justify-center border-l sm:mx-4 space-x-2">
                <div className="w-1/2">
                    <ViewGridIcon className="icon" />
                    <div className="hidden">
                        <p>Work</p>
                        <ChevronDownIcon/>
                    </div>
                </div>
                <Link href="">          
                <p className="text-xs text-center text-yellow-800 cursor-pointer hover:underline">Try Premium for free</p>
                </Link>
            </div>
            </div>
        </header>
    )
}

export default Header
