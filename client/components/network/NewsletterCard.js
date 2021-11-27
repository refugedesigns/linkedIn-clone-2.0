import Image from "next/image"
import { Fragment } from "react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { LinkedIn } from "@material-ui/icons"
const NewsletterCard = () => {
    return (
        <div className="max-w-screen-sm mx-auto mt-4 lg:mt-6 lg:w-[300px]">
            <div className="pb-4 bg-white border-b border-t sm:rounded-lg sm:border">
                <p className="p-4 text-xs text-gray-800">Recommended Newsletter</p>
                <div className="h-32 w-full relative">
                    <Image src="/images/people.png" layout="fill" objectFit="cover" objectPosition="center" alt="" />
                </div>
                <div className="space-y-2 mt-6 px-4">
                    <h2 className="text-lg font-semibold ">Looking for a new job? Here&apos;s some help</h2>
                    <p className="text-sm text-gray-800">By Andrew Seaman</p>
                    <p className="text-sm text-gray-800">Looking for work is never easy. The process is filled with ups and downs. Fortunately, there are a few simple steps that can make the path to your next job a little easier. For example:</p>
                    <button className="px-4 py-1 border border-blue-600 rounded-full text-blue-600 font-semibold hover:bg-blue-100 hover:border-2">Read more</button>
                </div>
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

export default NewsletterCard
