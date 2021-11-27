import { PermScanWifi } from "@material-ui/icons"
import { ArrowNarrowRightIcon } from "@heroicons/react/solid"

import { grey } from "@material-ui/core/colors"

const JobWidget = () => {
    return (
        <div className="bg-white p-4 mx-auto border-b border-t sm:rounded-lg lg:w-72">
            <div className="flex justify-between mb-4">
                <p className="font-semibold">Today&apos;s top courses</p>
                <PermScanWifi className="hover:cursor-pointer" style={{color: grey[500]}} />
            </div>
            <p className="text-sm font-semibold lg:truncate">1. Excel: VLOOKUP and XLOOKUP for Beginners</p>
            <p className="ml-4 text-xs mb-2 text-gray-500">Jess Stratton</p>
            <p className="text-sm font-semibold">2. What is Graphic Design?</p>
            <p className="ml-4 text-xs mb-2 text-gray-500">Sean Adams</p>
            <p className="text-sm font-semibold lg:truncate">3. Confronting Bias: Thriving Across Our Differences</p>
            <p className="ml-4 text-xs mb-4 text-gray-500">Verna Myers and Arianna Huffington</p>
            <div className="flex items-center p-1 w-min hover:hover-class">
                <p className="pr-4 text-sm font-semibold whitespace-nowrap text-gray-500">Show more on LinkedIn Learning</p>
                <ArrowNarrowRightIcon className="h-5 text-gray-500" />
            </div>
        </div>
    )
}

export default JobWidget
