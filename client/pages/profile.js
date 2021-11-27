import { Fragment, useEffect, useState } from "react"
import Header from "../components/Header"
import TopSection from "../components/Profile/TopSection"
import Dashboard from "../components/Profile/Dashboard"
import AddsComp from "../components/Profile/AddsComp"
import { isAuth, token, expiryDate, logout } from "../store/authSlice"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import Spinner from "../components/UI/Spinner"
import Background from "../components/Profile/Background"
import Footer from "../components/Profile/Footer"
import ViewedPeople from "../components/Profile/ViewedPeople"
import SuggestedPeople from "../components/Profile/SuggestedPeople"
import { PictureModal, RenderPicture, ErrorModal, AddHeadline } from "../components/UI/Modal"
import { modalIsVisible, errorState, message } from "../store/uiSlice"


function ProfilePage({userData}) {
    const isAuthenticated = useSelector(isAuth)
    const tokenData = useSelector(token)
    const adjexpireDate = useSelector(expiryDate)
    const showModal = useSelector(modalIsVisible)
    const isError = useSelector(errorState)
    const errorMessage = useSelector(message)
    const router = useRouter()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [file, setFile] = useState(null)
    const [addProfession, setAddProfession] = useState(false)

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
          
        setLoading(false)
          return () => {
            setLoading(true)
          }
    }, [isAuthenticated, tokenData, adjexpireDate, router, dispatch])

    let content = (
        <>
        <Header />
        {showModal && !file && <PictureModal setFile={setFile} />}
        {showModal && file && <RenderPicture 
        file={file}
        setFile={setFile}
        />}
        {isError && <ErrorModal errorMessage={errorMessage} />}
        {addProfession && <AddHeadline setAddProfession={setAddProfession} />}
        <main className="mx-auto sm:w-[80%] md:mt-10 md:flex items-start justify-center md:space-x-6 xl:space-x-0 max-w-screen-lg">
            <div className="md:flex-1">
                <TopSection setAddProfession={setAddProfession} />
                <Dashboard />
                <Background />
            </div>
            <div>
                <AddsComp />
                <ViewedPeople userData={userData} />
                <SuggestedPeople userData={userData} />
            </div>
        </main>
        <div className="max-w-screen-lg mx-auto">     
            <Footer />
        </div>
        </>
    )

    if(loading) {
        content = <Spinner />
    }

    return (
        <Fragment>
            {content}
        </Fragment>
    )
}

export default ProfilePage

export async function getStaticProps() {
    const userData = await fetch("https://dummyapi.io/data/v1/user", {
              headers: {
                "app-id": process.env.APP_ID
              }
          }).then(res => res.json())

    return {
        props: {
            userData: userData.data
        }
    }
}