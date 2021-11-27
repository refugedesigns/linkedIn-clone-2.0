import { ChevronDownIcon, UsersIcon } from "@heroicons/react/solid"
import { LinkedIn } from "@material-ui/icons"
import AddsComp from "../Profile/AddsComp"
const NetworkSidebar = () => {
    return (
        <div className="sticky top-16 bg-white mt-2 pb-4 max-w-xl mx-auto sm:rounded-lg md:mt-4 md:mx-0 md:max-w-[350px]">
            <h2 className="px-4 pt-4 pb-1 text-gray-800">Manage my network</h2>
            <div className="flex items-center justify-between px-4 py-2 text-gray-500 cursor-pointer hover:bg-gray-100">
                <UsersIcon className="h-6" />
                <p className="flex-grow pl-4">Connections</p>
                <p>46</p>
            </div>
            <div className="flex ml-2 mb-4 px-2 py-2 text-gray-500 cursor-pointer rounded-md bg-gray-100 w-min whitespace-nowrap">
                <p>Show more</p>
                <ChevronDownIcon className="h-6" />
            </div>
            <hr />
            <AddsComp />
            <hr />
            <div className="pt-6 w-full flex flex-col items-center text-center border-b pb-4">
                <h4 className="text-gray-800">Add personal contacts</h4>
                <p className="py-2 px-4 text-xs text-gray-500">We&apos;ll periodically import and store your contacts to help you and others connect. You choose who to connect to and who to invite. <span className="font-semibold text-blue-600 cursor-pointer hover:underline">Learn more</span></p>
                <input type="text" className="w-[90%] mx-4 py-1 pl-2 border border-gray-500 rounded-md outline-none focus:ring-1 focus:ring-gray-500" />
                <button className="my-2 py-1 px-4 border border-blue-600 rounded-full text-blue-600 font-semibold w-min hover:bg-blue-100 hover:border-2">Continue</button>
                <p className="text-sm text-gray-500 cursor-pointer hover:underline">More options</p>
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

export default NetworkSidebar
