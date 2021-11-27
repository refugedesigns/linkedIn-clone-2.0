import { BookmarkIcon, EyeOffIcon } from "@heroicons/react/solid"
import { CenterFocusStrong, LinkedIn } from "@material-ui/icons"
import Image from "next/image"
import { Fragment } from "react"

const JobCard = ({title, company, location, age, img}) => {
    return (
        <Fragment>

        <div className="grid grid-cols-5 gap-x-1 px-4 border-b pb-4 cursor-pointer group">
            <div className="relative h-16 w-16">
                <Image src={img} layout="fill" alt="" />
            </div>
            <div className="col-span-3">
                <div>
                    <h3 className="font-semibold text-blue-600 group-hover:underline">{title}</h3>
                    <p className="text-sm text-gray-500">{company}</p>
                    <p className="text-sm text-gray-500">{location}</p>
                </div>
                <div className="flex items-center space-x-1">
                    <CenterFocusStrong className="text-green-700"/>
                    <p className="text-xs text-gray-500">Actively recruiting</p>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                    <p>{age} &#8226; <span><LinkedIn fontSize="small" className="text-blue-600" /> Easy Apply</span></p> 
                </div>
            </div>
            <div className="flex justify-end space-x-2">
                <EyeOffIcon className="h-9 opacity-0 text-gray-500 p-2 rounded-full hover:bg-gray-100 group-hover:opacity-100" />
                <BookmarkIcon className="h-9 text-gray-500 p-1 rounded-full hover:bg-gray-100" />
            </div>
        </div>
        </Fragment>
    )
}

export default JobCard
