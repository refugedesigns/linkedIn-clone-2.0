import { Avatar } from "@material-ui/core"
import { 
    SendRounded, 
    Photo, 
    VideoLibraryRounded, 
    EventNoteRounded,
    Assignment 
} from "@material-ui/icons"

import { green, blue, orange, pink } from '@material-ui/core/colors';
import CommentFeed from "./CommentFeed"
import { showModal } from "../store/uiSlice"
import { useDispatch, useSelector } from "react-redux";
import { userPic } from "../store/userSlice";


const Feed = ({posts}) => {
    const dispatch = useDispatch()
    const profilePicture = useSelector(userPic)
    console.log(posts)
    return (
        <section className="max-w-screen-sm mx-auto sm:px-8 md:mx-0 md:mt-14 md:px-0  md:max-w-lg">
            <div className="mt-3 bg-white py-4 sm:rounded-lg">
            <div className="flex justify-between items-center space-x-4 px-4">
                <div><Avatar src={profilePicture} /></div>
                <div className="flex-1 flex space-x-4">                 
                    <div onClick={() => dispatch(showModal())} className="w-full rounded-full p-3 border border-gray-400 cursor-pointer text-sm font-semibold text-gray-500 hover:bg-gray-100 focus:outline-none active:text-black">Start a post</div>
                </div>
            </div>
            <div className="flex justify-evenly items-center pt-3">
                <div className="flex justify-center items-center space-x-2 p-2 hover:hover-class">
                    <Photo style={{ color: blue[500] }} />
                    <p className="text-sm font-semibold text-gray-500">Photo</p>
                </div>
                <div className="flex justify-center items-center space-x-2 p-2 hover:hover-class">
                    <VideoLibraryRounded style={{ color: green[500] }} />
                    <p className="text-sm font-semibold text-gray-500">Video</p>
                </div>
                <div className="flex justify-center items-center space-x-2 p-2 hover:hover-class">
                    <EventNoteRounded style={{ color: orange[500] }} />
                    <p className="text-sm font-semibold text-gray-500">Event</p>
                </div>
                <div className="flex justify-center items-center space-x-2 p-2 hover:hover-class">
                    <Assignment style={{ color: pink[300] }} />
                    <p className="text-sm font-semibold text-gray-500 whitespace-nowrap">Write article</p>
                </div>
            </div>
        </div>
        {posts && posts.map(post => (
             <CommentFeed 
             key={post._id}
             name={post.creator.name}
             profession={post.creator.profession}
             content={post.content}
             imageUrl={post.creator.imageUrl}
             />
        ))}
        </section>   
    )
}

export default Feed
