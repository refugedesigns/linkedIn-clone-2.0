import { Avatar } from "@material-ui/core"

import {
    ThumbUpOutlined,
    CommentOutlined,
    ShareOutlined,
    Send
} from "@material-ui/icons"

import { grey } from "@material-ui/core/colors"


const CommentFeed = ({name, profession, content, imageUrl}) => {

    return (
        <div className="my-2 bg-white sm:rounded-lg">
            <div className="p-4">
            <div className="flex items-center space-x-2 mb-3">
                <Avatar src={imageUrl} />
                <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-gray-500">{profession !== "" ? profession : "Add a headline"}</p>
                </div>
            </div>
            <p className="text-sm">{content}</p>
            <div className="flex justify-evenly mt-4">
                <div className="flex items-center space-x-2 p-1 hover:hover-class">
                    <ThumbUpOutlined style={{ color: grey[500]}} />
                    <p className="text-sm text-gray-500">Like</p>
                </div>
                <div className="flex items-center space-x-2 p-1 hover:hover-class">
                    <CommentOutlined style={{ color: grey[500]}} />
                    <p className="text-sm text-gray-500">Comment</p>
                </div>
                <div className="flex items-center space-x-2 p-1 hover:hover-class">
                    <ShareOutlined style={{ color: grey[500]}} />
                    <p className="text-sm text-gray-500">Share</p>
                </div>
                <div className="flex items-center space-x-2 p-1 hover:hover-class">
                    <Send style={{ color: grey[500]}} />
                    <p className="text-sm text-gray-500">Send</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CommentFeed
