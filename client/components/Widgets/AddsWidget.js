import { DotsHorizontalIcon, ChevronDownIcon } from "@heroicons/react/solid"
import { KeyIcon } from "@heroicons/react/solid"
import { Avatar } from "@material-ui/core"
import { LinkedIn } from "@material-ui/icons"
import { userPic } from "../../store/userSlice"
import { useSelector } from "react-redux"
const AddsWidget = () => {
    const profilePicture = useSelector(userPic)
    return (
        <div className="lg:sticky lg:top-20">
            <div className="bg-white px-10 py-4 mt-4 mx-auto border-b border-t sm:rounded-lg lg:w-72 lg:px-5">
            <div className="flex items-center justify-end space-x-2">
                <p className="text-sm">Ad</p>
                <DotsHorizontalIcon className="h-5" />
            </div>
            <p className="text-center text-xs w-72 mx-auto text-gray-500">Antwi, unlock your full potential with LinkedIn Premium</p>
            <div className="flex justify-center items-center p-4">
                <Avatar src={profilePicture} style={{ height : "80px", width : "80px"}} />
                <LinkedIn className="text-yellow-600" style={{ height: "90px", width: "90px"}}/>
            </div>
            <p className="text-sm w-64 mx-auto text-center text-gray-500">See who&apos;s viewed your profile in the last 90 days</p>
            <button className="mx-auto flex items-center mt-4 p-2 px-4 border border-blue-500 rounded-full">Try for Free</button>
            </div>
            <div>
                <div className="flex justify-center items-center flex-wrap mt-4 space-x-4 text-xs text-gray-500 mx-auto lg:w-60">
                    <p className="cursor-pointer hover:text-blue-500 hover:underline">About</p>
                    <p className="cursor-pointer hover:text-blue-500 hover:underline">Accessibility</p>
                    <p className="cursor-pointer hover:text-blue-500 hover:underline">Help Center</p>
                    <p className="flex items-center cursor-pointer hover:text-blue-500 hover:underline">Privacy & Terms <span><ChevronDownIcon className="h-5" /></span></p>
                    <p className="cursor-pointer hover:text-blue-500 hover:underline">Ad Choices</p>
                </div>
                <div className="flex justify-center items-center flex-wrap mt-2 space-x-4 text-xs text-gray-500 mx-auto lg:w-60">
                    <p className="cursor-pointer hover:text-blue-500 hover:underline">Advertising</p>
                    <p className="flex justify-center items-center cursor-pointer hover:text-blue-500 hover:underline">Business Services <span><ChevronDownIcon className="h-5" /></span></p>
                    <p className="cursor-pointer hover:text-blue-500 hover:underline">Get the LinkedIn app</p>
                    <p className="cursor-pointer hover:text-blue-500 hover:underline">More</p>
                </div>
                <div className="flex justify-center items-center mt-4">
                    <p className="flex justify-center items-center text-sm font-bold text-blue-600">Linked <span><LinkedIn /></span></p>
                    <p className="text-xs">LinkedIn Corporation &copy;2021</p>
                </div>
            </div>
        </div>
    )
}

export default AddsWidget
