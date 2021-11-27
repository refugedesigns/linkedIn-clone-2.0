import { DotsHorizontalIcon } from "@heroicons/react/solid"
import { Avatar } from "@material-ui/core"
import Image from "next/image"
import { showModal } from "../../store/uiSlice"
import { useDispatch, useSelector } from "react-redux"
import { userPic, username, userProfession } from "../../store/userSlice"

const TopSection = ({setAddProfession}) => {
    const dispatch = useDispatch()
    const profilePicture = useSelector(userPic)
    const user = useSelector(username)
    const profession = useSelector(userProfession)
    return (
        <div className="relative mx-auto mt-2 rounded-lg bg-white w-full max-w-screen-sm">
            <div className="mx-auto rounded-t-lg">
                <Image 
                src="/images/cover.jpg"
                objectFit="cover"
                width={800} 
                height={150}
                alt="profile cover"
                className="mx-auto rounded-t-lg"
                />
            </div>
            <div className="absolute top-4 left-4 md:top-4"><Avatar src={profilePicture} style={{ height: "150px", width: "150px", border: "4px solid white"}} /></div>
            <div className="mt-24 ml-5">
                <p className="text-2xl font-semibold">{user}</p>
                <p className="text-gray-900">{profession || "Add Headline"}</p>
                <p className="mt-8 text-blue-800 font-semibold cursor-pointer hover:underline">46 connections</p>
            </div>
            <div className="flex items-center space-x-2 mx-5 mt-2 pb-4">
                <button onClick={() => dispatch(showModal())} className="bg-blue-700 px-12 sm:px-4 py-1 text-white font-semibold rounded-full whitespace-nowrap hover:bg-blue-900">{ profilePicture !== "" ? "Update profile picture" : "Add profile picture"}</button>
                <button onClick={() => setAddProfession(true)} className="px-12 sm:px-4 py-1 text-gray-500 border border-gray-500 font-semibold rounded-full whitespace-nowrap hover:bg-gray-100 hover:border-2 ">{profession ? "Update headline" : "Add headline"}</button>
                <button className="hidden sm:inline-flex px-4 py-1 text-gray-500 border border-gray-500 font-semibold rounded-full whitespace-nowrap hover:bg-gray-100 hover:border-2 ">More</button>
                <DotsHorizontalIcon className="h-8 border p-1 rounded-full text-gray-500 border-gray-500 cursor-pointer hover:bg-gray-100 hover:border-2 sm:hidden" />
            </div>
        </div>
    )
}

export default TopSection
