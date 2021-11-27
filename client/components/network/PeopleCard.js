import { Avatar } from "@material-ui/core"
import Image from "next/image"

const PeopleCard = ({firstName, lastName, img, profession, connections, except, buttonText}) => {
    return (
        <div className="w-full border relative rounded-lg cursor-pointer hover:shadow-lg">
            <div className="relative h-[60px] w-full">
                <Image src="/images/linkedin-cover.png" layout="fill" alt="" objectFit="cover" className="rounded-t-lg" />
            </div>
            <div className="absolute left-1/3 top-2 md:left-[25%] lg:left-[20%] xl:left-[25%] 2xl:left-[27%]"><Avatar src={img} style={{height: "80px", width: "80px"}} /></div>
            <div className="mt-10 w-full text-center px-2">
                <h3 className="font-semibold whitespace-nowrap truncate">{firstName} {lastName}</h3>
                <p className="text-sm text-gray-500 md:truncate">{profession}</p>
                <p className="text-sm text-gray-500 whitespace-nowrap">{connections} {except}</p>
                <button className="my-2 mb-4 py-1 w-[80%] border border-blue-600 font-semibold text-blue-600 rounded-full hover:bg-blue-100 hover:border-2">{buttonText}</button>
            </div>
        </div>
    )
}

export default PeopleCard
