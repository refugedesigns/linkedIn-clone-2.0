import { Avatar } from "@material-ui/core"

const ConnectionsItem = ({title, firstName, lastName, picture}) => {
    return (
        <div className="px-4 py-2">
            <div className="flex space-x-2">
                <Avatar src={picture} style={{ height: "50px", width: "50px"}} />
                <div>
                    <p className="text-sm font-semibold"><span className="capitalize">{title}</span> {firstName} {lastName}</p>
                    <p className="text-xs text-gray-500">Branch Manager at Eastern National Bank</p>
                </div>
            </div>
            <button className="py-1 ml-14 -mt-2 px-4 border border-gray-500 rounded-full  w-min hover:border-2 hover:bg-gray-100">Connect</button>
        </div>
    )
}

export default ConnectionsItem
