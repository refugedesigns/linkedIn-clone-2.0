import { Avatar } from "@material-ui/core"
import { ShieldCheckIcon, BookmarkIcon, PlusIcon } from "@heroicons/react/solid"
import { username, userProfession, userPic } from "../store/userSlice"
import { useSelector } from "react-redux"


const Sidebar = () => {
    const user = useSelector(username)
    const profession = useSelector(userProfession)
    const profilePicture = useSelector(userPic)
    return (
        <section className="max-w-screen-sm mx-auto mt-2 sm:px-8 md:mx-0 md:px-0 md:mt-10 md:w-max">
            <div className="relative mt-3 bg-white border-b sm:border sm:rounded-lg">
                <div className="mx-auto">
                    <img src="/images/cover.jpg" alt="" loading="lazy" className="object-cover h-16 w-full sm:border sm:rounded-t-lg" />
                    <div className="absolute top-8 left-1/2 -ml-8 border-2 rounded-full border-white md:left-[48%]"><Avatar src={profilePicture} style={{height: "70px", width: "70px"}} /></div>
                    <div className="mt-14 pb-4 border-b text-center">
                        <h3 className="text-md font-semibold hover:cursor-pointer hover:text-underline">{user}</h3>
                        <p className="text-xs text-gray-500">{ profession !== "" ? profession : "Add a headline"}</p>
                    </div>
                </div>
                <div className=" border-b pb-2">
                    <div className="py-1 mt-3 hover:hover-class">
                        <p className="flex justify-between w-32 px-4 text-xs text-gray-500 md:w-full">Connections <span className="text-blue-600 font-semibold"> 46 </span></p>
                        <p className="text-xs font-semibold px-4">Grow your network</p>
                    </div>
                    <div className="py-1 hover:hover-class">
                        <p className="flex justify-between items-center w-48 text-xs px-4 whitespace-nowrap text-gray-500 md:w-full">Who viewed your profile <span className="text-blue-600 font-semibold">2</span></p>
                    </div>
                </div>
                <div className="py-2 space-x-1 border-b hover:hover-class">
                    <p className="text-xs px-4 text-gray-500 whitespace-nowrap">Access exclusive tools & insights</p>
                    <div className="flex items-center px-4 space-x-1">
                    <ShieldCheckIcon className="h-5 text-yellow-600" />
                    <p className="text-xs font-semibold">Try Premium for free</p>
                    </div>
                </div>
                <div className="flex items-center py-3 hover:hover-class">
                    <BookmarkIcon className="h-5 pl-4 text-gray-500" />
                    <p className="text-xs font-semibold">My items</p>
                </div>
            </div>
            <div className="bg-white mt-2 border-t border-b space-y-2 pt-1 sm:rounded-lg  md:sticky top-20">
                <p className="text-xs font-semibold pl-4 text-blue-700 hover:cursor-pointer hover:underline">Groups</p>
                <p className="flex items-center justify-between w-20 text-xs font-semibold text-blue-700 pl-4 hover:cursor-pointer hover:underline">Events <span><PlusIcon className="h-5 text-gray-500" /></span></p>
                <p className="text-xs pl-4 font-semibold text-blue-700 hover:cursor-pointer hover:underline">Followed Hashtags</p>
                <h4 className="text-center text-sm border-t border-b py-2 pl-4 font-semibold text-gray-500 hover:hover-class">Discover more</h4>
            </div>
        </section>
    )
}

export default Sidebar
