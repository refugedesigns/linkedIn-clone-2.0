import { ChevronDownIcon, PlusIcon } from "@heroicons/react/solid"
import { PencilIcon } from "@heroicons/react/outline"
import Image from "next/image"
const Background = () => {
    return (
        <div className="bg-white mt-4 pb-6 max-w-screen-sm mx-auto rounded-lg">
            <div className="border-b pb-4">
                <div className="flex justify-between items-center p-6">
                    <p className="text-xl text-gray-800">Experience</p>
                    <PlusIcon className="h-10 text-gray-500 cursor-pointer p-2 rounded-full hover:bg-gray-100" />
                </div>
                <div className="flex items-start space-x-6 px-6 pb-4">
                    <Image src="/images/squares.png" height={60} width={60} alt="" objectFit="contain" />
                    <div className="flex justify-between items-start w-full border-b pb-4">
                        <div className="cursor-pointer hover:underline">
                            <p className="font-semibold">Teacher community Assistant</p>
                            <p className="text-sm text-gray-800">Ghana Edu.</p>
                            <p className="text-sm text-gray-500">Mar 2013 - May 2015 	&#8226; 2 yrs 3 mos</p>
                        </div>
                        <PencilIcon className="h-10 text-gray-500 cursor-pointer p-2 rounded-full hover:bg-gray-100" />
                    </div>
                </div>
                <div className="flex items-start space-x-6 px-6 pb-4">
                    <Image src="/images/squares.png" height={50} width={50} alt="" objectFit="contain" />
                    <div className="cursor-pointer hover:underline">
                        <p className="font-semibold">Graphic Designer</p>
                        <p className="text-sm text-gray-800">Cosbert multimedia</p>
                        <p className="text-sm text-gray-500">Feb 2012 - May 2013 &#8226; 1 yr 4 mos</p>
                        <p className="text-sm text-gray-500">Sunyani, Ghana</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="p-6 flex justify-between items-center">
                    <p className="text-xl text-gray-800">Education</p>
                    <PlusIcon className="h-10 text-gray-500 cursor-pointer p-2 rounded-full hover:bg-gray-100" />
                </div>
                <div className="flex items-start space-x-6 px-6 pb-4">
                    <Image src="/images/squares.png" height={60} width={60} alt="" objectFit="contain" />
                    <div className="flex justify-between w-full border-b pb-4 cursor-pointer hover:underline">
                        <div>
                            <p className="font-semibold">Clever Programmer</p>
                            <p className="text-sm text-gray-800">PWP Course, Python Django</p>
                            <p className="text-sm text-gray-500">2020 - 2020</p>
                        </div>
                        <PencilIcon className="h-10 text-gray-500 cursor-pointer p-2 rounded-full hover:bg-gray-100" />
                    </div>
                </div>
                <div className="flex items-start space-x-6 px-6 pb-4">
                    <Image src="/images/squares.png" height={60} width={60} alt="" objectFit="contain" />
                    <div className="w-full border-b pb-4 cursor-pointer hover:underline">
                        <p className="font-semibold">Online Course</p>
                        <p className="text-sm text-gray-800">Marketing, Digital Marketing</p>
                        <p className="text-sm text-gray-500">2019 - 2019</p>
                    </div>
                </div>
                <div className="flex items-start space-x-6 px-6 pb-4">
                    <Image src="/images/squares.png" height={50} width={50} alt="" objectFit="contain" />
                    <div className="cursor-pointer hover:underline">
                        <p className="font-semibold">Online Course</p>
                        <p className="text-sm text-gray-800">Crypto Trading, Crypto Investments</p>
                        <p className="text-sm text-gray-500">2018 - 2019</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center px-2 text-gray-500 cursor-pointer rounded-md hover:bg-gray-100 w-min whitespace-nowrap ml-6 font-semibold">
                <p>Show 2 more education</p>
                <ChevronDownIcon className="h-8" />
            </div>
        </div>
    )
}

export default Background
