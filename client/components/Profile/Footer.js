import { ChevronDownIcon, CogIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid"
import { LinkedIn } from "@material-ui/icons"
import { Fragment } from "react"

const Footer = () => {
    return (
        <Fragment>
        <div className="mx-auto grid grid-cols-3 sm:grid-cols-4 mt-20 mb-4 max-w-screen-lg w-full sm:px-8">
            <div className="space-y-4">
                <div className="flex items-center text-blue-700 mb-4">
                    <p className="text-2xl font-bold">Linked</p>
                    <LinkedIn fontSize="large" />
                </div>
                <p className="text-xs font-bold text-gray-500 cursor-pointer hover:text-blue-700 hover:underline">About</p>
                <p className="text-xs font-bold text-gray-500 cursor-pointer hover:text-blue-700 hover:underline">Community Guidelines</p>
                <div className="flex items-center text-xs font-bold text-gray-500 cursor-pointer hover:text-blue-700 hover:underline">
                    <p>Privacy & Terms</p>
                    <ChevronDownIcon className="h-5" />
                </div>
                <p className="text-xs font-bold text-gray-500 cursor-pointer hover:text-blue-700 hover:underline">Sales Solutions</p>
                <p className="text-xs font-bold text-gray-500 cursor-pointer hover:text-blue-700 hover:underline">Safety Center</p>
                <p className="text-xs text-gray-500">LinkedIn Corporation &copy; 2021</p>
            </div>
            <div className="mt-12 sm:col-span-2 sm:grid grid-cols-2">
            <div className="space-y-2 mb-2">
                <p className="text-xs font-bold text-gray-500 cursor-pointer hover:text-blue-700 hover:underline">Accessibility</p>
                <p className="text-xs font-bold text-gray-500 cursor-pointer hover:text-blue-700 hover:underline">Careers</p>
                <p className="text-xs font-bold text-gray-500 cursor-pointer hover:text-blue-700 hover:underline">Ad Choices</p>
                <p className="text-xs font-bold text-gray-500 cursor-pointer hover:text-blue-700 hover:underline">Mobile</p>
            </div>
            <div className="space-y-2">
                <p className="text-xs font-bold text-gray-500 cursor-pointer hover:text-blue-700 hover:underline">Talent Solutions</p>
                <p className="text-xs font-bold text-gray-500 cursor-pointer hover:text-blue-700 hover:underline">Marketing Solutions</p>
                <p className="text-xs font-bold text-gray-500 cursor-pointer hover:text-blue-700 hover:underline">Advertising</p>
                <p className="text-xs font-bold text-gray-500 cursor-pointer hover:text-blue-700 hover:underline">Small Business</p>
            </div>
            </div>
            <div className="mt-12 space-y-4">
                <div className="flex space-x-1 text-gray-500">
                    <QuestionMarkCircleIcon className="h-6" />
                    <div>
                        <p className="text-sm font-semibold cursor-pointer hover:underline">Questions?</p>
                        <p className="text-xs">Visit our Help Center</p>
                    </div>
                </div>
                <div className="flex space-x-1">
                    <CogIcon className="h-6 text-gray-500" />
                    <div>
                        <p className="text-sm font-semibold text-purple-400">Manage your account and privacy</p>
                        <p className="text-xs text-gray-500">Go to your Settings</p>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Footer
