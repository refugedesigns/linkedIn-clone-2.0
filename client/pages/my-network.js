import { Pages } from "@material-ui/icons"
import Header from "../components/Header"
import NetworkSidebar from "../components/network/NetworkSidebar"
import PagesCard from "../components/network/PagesCard"
import PeopleCard from "../components/network/PeopleCard"
import { useEffect, useState } from "react"
import { isAuth, token, expiryDate, logout } from "../store/authSlice"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import Spinner from "../components/UI/Spinner"
import { Fragment } from "react"


export default function MyNetwork({pageData, groupData, peopleTransformedData}) {
    const isAuthenticated = useSelector(isAuth)
    const tokenData = useSelector(token)
    const adjexpireDate = useSelector(expiryDate)
    const router = useRouter()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

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
    }, [isAuthenticated, tokenData, adjexpireDate, router, dispatch])

    let content = (
        <>
            <Header />
            <main className="mx-auto max-w-screen-xl md:flex justify-center md:space-x-6 md:px-10">
                <section>
                    <NetworkSidebar />
                </section>
                <section className="mt-4 mx-auto max-w-xl md:max-w-3xl md:mx-0  md:flex-grow md:w-full">
                  <div className="bg-white pb-4 sm:rounded-lg">
                   <div>
                        <div className="flex justify-between items-center px-4 pt-6 pb-4">
                            <h2 className="text-gray-800">Trending pages in your network</h2>
                            <p className="font-semibold text-gray-500 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-100">See all</p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-2 px-4 mx-auto">
                            {pageData.map((data, index) => (
                            <PagesCard 
                            key={index}
                            img={data.img}
                            name={data.name}
                            height={80}
                            width={80}
                            followers={data.followers}
                            except="followers"
                            buttonText="Follow"
                            />
                            ))}
                        </div>
                   </div>
                   <div>
                        <div className="flex justify-between items-center px-4 pt-6 pb-4">
                            <h2 className="text-gray-800">Groups you may be interested in</h2>
                            <p className="font-semibold text-gray-500 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-100">See all</p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-2 px-4 mx-auto">
                            {groupData.map((data, index) => (
                            <PagesCard 
                            key={index}
                            img={data.img}
                            name={data.name}
                            followers={data.followers}
                            height={70}
                            width={80}
                            except="members"
                            buttonText="Join"
                            />
                            ))}
                        </div>
                   </div>
                  </div>
                  <div className="my-8 pb-4 bg-white sm:rounded-lg">
                    <div className="flex justify-between items-center px-4 pt-6 pb-4">
                        <h2 className="text-gray-800">More suggestions for you</h2>
                        <p className="font-semibold text-gray-500 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-100">See all</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-2 px-4 mx-auto">
                        {peopleTransformedData.map((data, index) => (
                        <PeopleCard 
                        key={index}
                        img={data.picture}
                        firstName={data.firstName}
                        lastName={data.lastName}
                        connections={data.peopleInfo.connections}
                        profession={data.peopleInfo.profession}
                        except="connections"
                        buttonText="Connect"
                        />
                        ))}
                    </div>
                   </div> 
                </section>
            </main>
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

export async function getStaticProps() {
    const pageData = await fetch("https://jsonkeeper.com/b/9ELF").then(res => res.json())
    const groupData = await fetch("https://jsonkeeper.com/b/JX1L").then(res => res.json())
    const peopleInfo = await fetch("https://jsonkeeper.com/b/XX0Y").then(res => res.json())
    const peopleData = await fetch("https://dummyapi.io/data/v1/user", {
        headers: {
            "app-id": process.env.APP_ID
        }
    }).then(res => res.json())
    const peopleTransformedData = peopleData.data.slice(0,10)
    peopleTransformedData.map((e, i) => e.peopleInfo = peopleInfo[i])

    return {
        props: {
            pageData,
            groupData,
            peopleTransformedData
        }
    }
}