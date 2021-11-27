import { BookmarkIcon, UsersIcon, StatusOnlineIcon } from "@heroicons/react/solid"

const Dashboard = () => {
    return (
        <div className="bg-blue-100 mt-4 p-6 space-y-4 max-w-screen-sm mx-auto rounded-lg">
            <div className="space-y-1">
                <p className="text-xl">Your Dashboard</p>
                <p className="italic text-gray-500">Private to you</p>
            </div>
            <div className="bg-white grid grid-cols-3 border sm:rounded-lg">
                <div className="">
                    <div className="p-4 cursor-pointer">
                    <p className="text-4xl text-blue-700 hover:underline">2</p>
                    <p className="text-sm hover:underline">Who viewed your profile</p>
                    </div>
                </div>
                <div className="border-l">
                    <div className="p-4 cursor-pointer">
                    <p className="text-4xl text-blue-700 hover:underline">45</p>
                    <p className="text-sm hover:underline">Post views</p>
                    </div>
                </div>
                <div className="border-l">
                    <div className="p-4 cursor-pointer">
                    <p className="text-4xl text-blue-700 hover:underline">1</p>
                    <p className="text-sm hover:underline">Search appearance</p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-3 space-y-2 border sm:rounded-lg">
                <div className="flex items-start space-x-3">
                   <StatusOnlineIcon className="h-8 text-gray-500 cursor-pointer" />
                   <div className="text-gray-500 text-sm w-full cursor-pointer hover:underline">
                       <p className="font-bold text-gray-700">Creator mode: <span className="text-gray-500">Off</span></p>
                       <p>Grow your audience and get discovered by highlighting content on your profile</p>
                    <hr className="mt-2" />
                   </div>
                </div>
                <div className="flex items-start space-x-2 cursor-pointer">
                    <UsersIcon className="h-8 text-gray-500" />
                    <div className="text-gray-500 text-sm w-full hover:underline">
                        <p className="font-bold text-gray-700">My Network</p>
                        <p>Manage your connections, events, and interests.</p>
                        <hr className="mt-2" />
                    </div>
                </div>
                <div className="flex items-start space-x-2 cursor-pointer">
                    <BookmarkIcon className="h-8 text-gray-500" />
                    <div className="text-gray-500 text-sm pb-2 hover:underline">
                        <p className="font-bold text-gray-700">My items</p>
                        <p>Keep track of your jobs, courses and articles</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
