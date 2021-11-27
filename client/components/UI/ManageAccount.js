import { Avatar } from "@material-ui/core"
import onClickOutside from "react-onclickoutside"
import { logout } from "../../store/authSlice"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { userPic, username, userProfession } from "../../store/userSlice"
import { useSelector } from "react-redux"


const ManageAccount = ({setShowAccount}) => {

    const dispatch = useDispatch()
    const router = useRouter()
    const profilePicture = useSelector(userPic)
    const user = useSelector(username)
    const profession =  useSelector(userProfession)

    ManageAccount.handleClickOutside = (event) => {
        setShowAccount(false)
    }
    return (
        <div className="absolute border drop-shadow-lg top-[54px] sm:right-36 md:left-[36%] lg:left-[58%] xl:left-[55%] rounded-lg bg-white w-64">
            <div className="border-b p-4 pb-2">
                <div className="flex justify-center items-start space-x-2 mb-2">
                    <Avatar src={profilePicture} style={{ height: "60px", width: "60px"}} />
                    <div>
                        <p className="text-base font-semibold">{user}</p>
                        <p className="text-sm">{profession || "Add Headline"}</p>
                    </div>
                </div>
                <button onClick={() => router.push("/profile")} className="mt-2 text-center border border-blue-800 rounded-full text-blue-800 font-semibold w-full text-sm hover:border-2 hover:border-blue-800 hover:bg-blue-100">View Profile</button>
            </div>
            <div className="p-4 py-2 space-y-2 border-b">
                <p className="font-semibold">Account</p>
                <p className="text-sm text-gray-500 cursor-pointer hover:underline">Settings & Privacy</p>
                <p className="text-sm text-gray-500 cursor-pointer hover:underline">Help</p>
                <p className="text-sm text-gray-500 cursor-pointer hover:underline">Language</p>
            </div>
            <div className="p-4 py-2 space-y-2 border-b">
                <p className="font-semibold">Manage</p>
                <p className="text-sm text-gray-500 cursor-pointer hover:underline">Posts & Activity</p>
                <p className="text-sm text-gray-500 cursor-pointer hover:underline">Job Posting Account</p>
            </div>
            <p onClick={() => dispatch(logout())} className="text-sm p-4 py-2 text-gray-500 cursor-pointer hover:underline">Sign Out</p>
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => ManageAccount.handleClickOutside,
}

export default onClickOutside(ManageAccount, clickOutsideConfig)
