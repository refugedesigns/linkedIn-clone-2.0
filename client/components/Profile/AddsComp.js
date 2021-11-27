import { DotsHorizontalIcon } from "@heroicons/react/solid"
import { Avatar } from "@material-ui/core"
import { LinkedIn } from "@material-ui/icons"
import { userPic } from "../../store/userSlice"
import { useSelector } from "react-redux"

const AddsComp = () => {
    const profilePicture = useSelector(userPic)
    return (
        <div className="max-w-screen-sm mx-auto">
        <div className="bg-white px-10 py-4 mt-4 md:mt-2 mx-auto sm:rounded-lg lg:w-80 lg:px-5">
        <div className="flex items-center justify-end space-x-2">
            <p className="text-sm">Ad</p>
            <DotsHorizontalIcon className="h-5" />
        </div>
        <p className="text-center text-xs mx-auto text-gray-500">Antwi, unlock your full potential with LinkedIn Premium</p>
        <div className="flex justify-center items-center p-4">
            <Avatar src={profilePicture} style={{ height : "80px", width : "80px"}} />
            <LinkedIn className="text-yellow-600" style={{ height: "90px", width: "90px"}}/>
        </div>
        <p className="text-sm mx-auto text-center text-gray-500">See who&apos;s viewed your profile in the last 90 days</p>
        <button className="mx-auto flex items-center mt-4 p-2 px-4 border border-blue-500 rounded-full">Try for Free</button>
        </div>
    </div>
    )
}

export default AddsComp
