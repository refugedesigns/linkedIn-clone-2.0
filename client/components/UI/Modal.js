import { Avatar } from "@material-ui/core"
import { Fragment, useState } from "react"

import { Public, ArrowDropDown, Photo, Subscriptions, Description, Work, NewReleases, PollRounded, MessageOutlined, MoreHorizOutlined, CloseOutlined } from "@material-ui/icons"
import { hideModal, hideError} from "../../store/uiSlice"
import { token } from "../../store/authSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { username, updateUser, userPic } from "../../store/userSlice"
import { showError } from "../../store/uiSlice"
import { useForm, } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    posts: yup.string().ensure().trim().required({message: "this is required"}),
  });

const headlineSchema = yup.object().shape({
    headline: yup.string().ensure().trim().required({message: "this is required"}),
  });

const Backdrop = ({setFile, setAddProfession}) => {
    const dispatch = useDispatch()
    
    const hideModalHandler = () => {
        if(setFile) {
            setFile(null)
        }
        if(setAddProfession) {
            setAddProfession(false)
        }
        dispatch(hideModal())
        dispatch(hideError())
    }
    return (
        <div onClick={hideModalHandler} className="h-full w-full top-0 left-0 fixed bg-black bg-opacity-50 z-40" />
    )
}

const ModalOverlay = props => {
    return (
        <div className="z-50 absolute top-20 w-full rounded-lg max-w-lg bg-white">
            {props.children}
        </div>
    )
}



const Modal = props => {
    const dispatch = useDispatch()
    const user = useSelector(username)
    const tokenData = useSelector(token)
    const { register, handleSubmit, formState} = useForm({resolver: yupResolver(schema), mode: "onChange"})
    const isDirty = formState.isDirty
    const isValid = formState.isValid
    const hideModalHandler = () => {
        dispatch(hideModal())
    }

    const addPostHandler = (data) => {
        
        fetch(`${process.env.SERVER}/feed/create-posts`, {
            method: "POST",
            body: JSON.stringify({
                content: data.posts
            }),
            headers: {
                Authorization: `Bearer ${tokenData}`,
                "Content-Type" : "application/json"
            }
        }).then(res => {
            if(!res.ok) {
                throw new Error("Something went wrong!")
            }
            return res.json()
        }).then(data => {
            console.log(data)
            dispatch(hideModal())
        }).catch(err => {
            dispatch(showError("Something went wrong! Please try again."))
            dispatch(hideModal())
        })
        
    }
    return (
        <>
            <Backdrop />
            <div className="flex justify-center h-full w-auto">
            <ModalOverlay>
                <div className="flex justify-between text-gray-500 p-4 border-b">
                <h3 className="text-xl">Create a post</h3>
                <div onClick={hideModalHandler}><CloseOutlined className="cursor-pointer" /></div>
                </div>
                <div className="p-4">
                    <div className="flex items-center space-x-2">
                    <Avatar style={{ height: "50px", width: "50px"}} />
                    <div>
                    <p className="font-semibold">{user}</p>
                    <div className="flex items-center space-x-1 border border-gray-500 w-min p-1 rounded-full text-gray-500 cursor-pointer">
                        <Public fontSize="small" />
                        <p>Anyone</p>
                        <ArrowDropDown />
                    </div>
                    </div>
                    </div>
                        <form onSubmit={handleSubmit(addPostHandler)}>
                            <textarea {...register("posts")} className="w-full h-auto my-4 appearance-none focus-within:outline-none" placeholder="What do you want to talk about?" id="posts" cols="10" rows="4"></textarea>
                            <p className="my-2 p-1 text-blue-600 font-semibold cursor-pointer w-min whitespace-nowrap hover:bg-blue-100 hover:rounded-sm">Add hashtag</p>
                            <div className="flex items-center">
                                <div className="flex items-center my-2 text-gray-500">
                                    <div className="hidden md:flex text-gray-500">
                                        <Photo className="p-2 cursor-pointer hover:bg-gray-200 hover:rounded-full" style={{height: "40px", width: "40px"}} />
                                        <Subscriptions className="p-2 cursor-pointer hover:bg-gray-200 hover:rounded-full" style={{height: "40px", width: "40px"}} />
                                        <Description className="p-2 cursor-pointer hover:bg-gray-200 hover:rounded-full" style={{height: "40px", width: "40px"}} />
                                        <Work className="p-2 cursor-pointer hover:bg-gray-200 hover:rounded-full" style={{height: "40px", width: "40px"}} />
                                        <NewReleases className="p-2 cursor-pointer hover:bg-gray-200 hover:rounded-full" style={{height: "40px", width: "40px"}} />
                                        <PollRounded className="p-2 cursor-pointer hover:bg-gray-200 hover:rounded-full" style={{height: "40px", width: "40px"}} />
                                    </div>
                                        <MoreHorizOutlined className="p-2 cursor-pointer hover:bg-gray-200 hover:rounded-full" style={{height: "40px", width: "40px"}} />
                                </div>
                                <div className="flex flex-1 items-center justify-between mx-2 text-gray-500 border-l">
                                    <div className="flex justify-center items-center space-x-1 mx-2 px-2 py-1 cursor-pointer hover:bg-gray-200 hover:rounded-full">
                                        <MessageOutlined fontSize="small" />
                                        <p>Anyone</p>
                                    </div>
                                    <button disabled={ !isDirty && !isValid } className={ isDirty && isValid ? " bg-blue-700 px-4 py-1 text-white font-semibold rounded-full hover:bg-blue-900" :"bg-gray-200 px-3 py-1 rounded-full text-center cursor-not-allowed"}>Post</button>
                                </div>
                            </div>
                        </form>
                </div>
            </ModalOverlay>
            </div>
        </>
    )
}

export default Modal

import { useDropzone } from "react-dropzone"
import { useCallback } from "react"
import Image from "next/image"

export const PictureModal = ({setFile}) => {  
    
    const onDrop = useCallback(
        (acceptedFile) => {
            setFile(acceptedFile[0])
        },[setFile])
    const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({onDrop, multiple: false, accept: "image/jpeg, image/png"})
    
    return (
        <div>
            <Backdrop />
            <div className="flex justify-center h-full w-auto">
                <ModalOverlay>
                    <div className="p-4 mx-auto max-w-7xl">
                        <div {...getRootProps()} className="h-80 w-full rounded-md cursor-pointer focus:outline-none">
                            <input {...getInputProps()} />
                            <div className={`flex flex-col items-center justify-center h-full border-2 border-dashed border-gray-800 rounded-xl p-4 ${isDragReject ? "border-red-600" : isDragAccept ? "border-green-600" : ''}`}>
                                <Image src="/images/upload.png" alt="" width={80} height={80} className="mb-4"/>
                                {isDragReject ? <p className="mt-2 text-lg text-gray-600 text-center font-semibold">Sorry, This app only supports images and mp3</p> : <div className="flex flex-col items-center justify-center">
                                    <p className="text-gray-600 text-xl">Drop your file here, <span className="text-blue-600 hover:text-blue-600 hover:underline">browse</span></p>
                                <p className="mt-2 text-lg text-gray-600">Only jpeg and png files supported</p>
                                </div> }          
                            </div>
                        </div>
                    </div>
                </ModalOverlay>
            </div>
        </div>
    )
}

import { sizeMb } from "../../lib/sizeMb"
import { useEffect } from "react"

export const RenderPicture = ({file, setFile}) => {
    const sizeInBytes = sizeMb(+file.size)
    const format = file.type.split("/")[1]
    const [uploadState, setUploadState] = useState(null)
    const dispatch = useDispatch()
    const tokenData = useSelector(token)

    const uploadHandler = () => {
        
        if(uploadState === "Uploading...") {
            return
        }

        const formData = new FormData()
        formData.append("profilePic", file)
        setUploadState("Uploading...")

        fetch(`${process.env.SERVER}/user/upload`, {
            method: "POST", 
            body: formData,
            headers: {
                Authorization: `Bearer ${tokenData}`
            }
        }).then(res => {
            if(res.status !== 200) {
                throw new Error("Failed to upload profile picture")
            }
            return res.json()
        }).then(data => {
            dispatch(updateUser({
                name: data.name,
                profession: data.profession,
                profilePic: data.imageUrl,
                userId: data.userId,
                email: data.email
              }))
              setUploadState("Picture uploaded :)")
              dispatch(hideModal())
        }).catch(err => {
            setUploadState("Upload failed!")
            dispatch(showError("Could not upload picture! Please check your connection and try again."))
            dispatch(hideModal())
        })
        
    }
    
    useEffect(() => {
        
        return () => {
            setUploadState(null)
        }
    }, [])

    return (
        <Fragment>
            <Backdrop setFile={setFile} />
            <div className="flex justify-center h-full w-auto">
                <ModalOverlay>
                    <div className="flex flex-col items-center w-full py-4 space-y-6">
                        <div className="border-2 border-dashed border-blue-600 space-y-4 p-4 w-[60%] flex flex-col items-center rounded-lg">
                            <Image src={`/images/${format}.png`} alt="" height={60} width={60} />
                            <div>
                                <span className="text-gray-600 text-md">{file.filename}</span>
                                <span className="text-gray-600 text-md">{sizeInBytes}</span>
                            </div>
                        </div>
                        {uploadState && <p>{uploadState}</p>}
                        <button onClick={uploadHandler} className="w-[80%] py-2 rounded-full text-white bg-blue-600 font-semibold hover:bg-blue-800">Add Picture</button>
                    </div>
                </ModalOverlay>
            </div>
        </Fragment>
    )
}

export const AddHeadline = ({setAddProfession}) => {
    const { register, handleSubmit} = useForm({resolver: yupResolver(headlineSchema)})
    const tokenData = useSelector(token)
    const dispatch = useDispatch()
    
    const addHeadlineHandler = (data) => {
        
        fetch(`${process.env.SERVER}/user/profession`, {
            method: "PUT", 
            body: JSON.stringify({
                headline: data.headline
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenData}`
            }
        }).then(res => {
            if(!res.ok) {
                throw new Error("Something went wrong! Please try again.")
            }
            return res.json()
        }).then(data => {
            dispatch(updateUser({
                name: data.name,
                profession: data.profession,
                profilePic: data.imageUrl,
                userId: data.userId,
                email: data.email
              }))
            setAddProfession(false)
        }).catch(err => {
            setAddProfession(false)
            dispatch(showError("Could not add or update headline!"))
        })
    }
    return (
        <Fragment>
            <Backdrop setAddProfession={setAddProfession} />
            <div className="flex justify-center">
                <ModalOverlay>
                    <form onSubmit={handleSubmit(addHeadlineHandler)} className="flex flex-col items-center p-4 space-y-4">
                        <input {...register("headline")} className="p-1 w-[96%] border border-gray-500 rounded-lg focus:border-0 focus:ring-2 ring-gray-600" />
                        <button className="px-4 py-1 border w-min whitespace-nowrap text-center rounded-md bg-blue-600 text-white hover:bg-blue-800">Add headline</button>
                    </form>
                </ModalOverlay>
            </div>
        </Fragment>
    )
}

export const ErrorModal = ({errorMessage}) => {
    const dispatch = useDispatch()

    const hideErrorHandler = () => {
        dispatch(hideError())
    }
    return (
        <Fragment>
            <Backdrop />
            <div className="flex justify-center w-32 mx-auto">
                <ModalOverlay>
                    <div className="flex flex-col justify-center mx-auto  space-y-6 p-4">
                        <h3 className="text-xl text-red-600">Error!</h3>
                        <p className="text-red-600">{errorMessage}</p>
                        <button onClick={hideErrorHandler} className="self-end px-4 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-700">Close</button>
                    </div>
                </ModalOverlay>
            </div>
        </Fragment>
    )
}
