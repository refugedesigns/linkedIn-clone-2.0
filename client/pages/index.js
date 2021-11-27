import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

import { isAuth, token, expiryDate } from "../store/authSlice"
import { logout } from "../store/authSlice"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {useRouter} from 'next/router';
import { useState } from "react";
import { Fragment } from "react";
import Spinner from "../components/UI/Spinner";
import Modal from "../components/UI/Modal"
import { modalIsVisible, errorState, message, showError } from "../store/uiSlice";
import { updateUser } from "../store/userSlice";
import { userPic, userProfession } from "../store/userSlice";
import openSocket from "socket.io-client"
import { ErrorModal } from "../components/UI/Modal";



export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(isAuth)
  const tokenData = useSelector(token)
  const adjexpireDate = useSelector(expiryDate)
  const showModal = useSelector(modalIsVisible)
  const profilePicture = useSelector(userPic)
  const displayProfession = useSelector(userProfession)
  const isError = useSelector(errorState)
  const errorMessage = useSelector(message)

  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    setLoading(true)
    if(!tokenData || !adjexpireDate || !isAuthenticated) {
      return router.replace("/sign-in")
    }
    if(new Date(adjexpireDate) <= new Date()) {
      dispatch(logout())
      return router.replace("/sign-in")
    }

    const remainingMilliseconds = new Date(adjexpireDate).getTime() - new Date().getTime()
    setTimeout(() => {
      dispatch(logout())
      router.replace("/sign-in")
    }, remainingMilliseconds)

    fetch(`${process.env.SERVER}/auth/user`, {
      headers: {
        Authorization: `Bearer ${tokenData}`
      }
    }).then(res => {
      if(res.status !== 200) {
        throw new Error("An error occured!")
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
    }).catch(err => {
      dispatch(showError("Could not fetch user info!"))
    })

    fetch(`${process.env.SERVER}/feed/posts`, {
      headers: {
        Authorization: `Bearer ${tokenData}`
      }
    }).then(res => {
      if(!res.ok) {
        throw new Error("Could not fetch posts")
      }
      return res.json()
    }).then(data => {  
      console.log(data.posts)
      setPosts(data.posts)
      setLoading(false)
    }).catch(err => {
      setLoading(false)
      dispatch(showError("Could not fetch posts!"))
    })
    

    const socket = openSocket(`${process.env.SERVER}`, {
      withCredentials: true
    })
    socket.on("posts", data => {
      setPosts(prevPosts => {
        let updatedPosts = [...prevPosts]
        if(prevPosts.length > 0) {
          updatedPosts.unshift(data.posts)
        }else {
          updatedPosts.concat(data.posts)
        }
  
        return updatedPosts
      })
    })

    return () => {
      setPosts([])
    }
  }, [tokenData, adjexpireDate, isAuthenticated, dispatch, router, profilePicture, displayProfession])
  

  let content = (
    <Spinner />
  )

  if(!loading) {
    content = (
      <>
      <Header />
      {showModal && <Modal />}
      {isError && <ErrorModal errorMessage={errorMessage} />}
      <main className="max-w-screen-xl md:mx-auto md:flex justify-center md:space-x-6 lg:px-6">
      <Sidebar />
        <div className="lg:flex lg:justify-center lg:space-x-6">
          <div className="lg:flex-1"><Feed posts={posts} /></div>
          <Widgets />
        </div>
      </main> 
      </>
    )
  }
  
  return (
    <Fragment>
         {content}
    </Fragment>
  )
}
