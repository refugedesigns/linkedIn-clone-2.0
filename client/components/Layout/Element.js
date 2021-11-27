import { Avatar } from "@material-ui/core"
import { PlusIcon } from "@heroicons/react/solid"

const Element = (props) => {
    return (
        <div className="py-4 pr-2 hover:cursor-pointer relative">
            <div className="flex items-center space-x-2 space-y-2 p-2 px-4">
                <Avatar alt={props.alt} src={props.src} />
                <div>
                    <p className="text-sm font-semibold">{props.title}</p>
                    <p className="text-xs whitespace-nowrap text-gray-500">{props.except}</p>
                </div>
            </div>
            <button className="flex items-center font-semibold text-gray-500 border border-gray-500 rounded-full p-1 px-4 ml-16 absolute hover:bg-gray-300 hover:border-2 "><PlusIcon className="h-5 mr-1"/> Follow </button>
        </div>
    )
}

export default Element
