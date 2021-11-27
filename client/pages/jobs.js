import { BookmarkIcon } from "@heroicons/react/solid";
import { ArrowDropDown } from "@material-ui/icons";
import Header from "../components/Header";
import JobCard from "../components/Jobs/JobCard";
import JobMenuItems from "../components/Jobs/JobMenuItems";
import NewsletterCard from "../components/network/NewsletterCard";
import { useEffect, useState, Fragment } from "react"
import { isAuth, token, expiryDate, logout } from "../store/authSlice"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import Spinner from "../components/UI/Spinner"

export default function Jobs({jobData}) {
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
        <Fragment>
            <Header />
            <main className="mb-6 md:flex justify-center md:space-x-4 sm:px-16 lg:px-10 mx-auto max-w-screen-xl">
                <section className="hidden md:inline-flex">
                    <JobMenuItems />
                </section>
                <section className="md:max-w-lg lg:max-w-full lg:flex lg:space-x-4">
                    <div className="lg:flex-grow lg:max-w-md">
                        <div className="bg-white mt-4 flex items-center justify-between px-4 py-2 border-t border-b max-w-screen-sm mx-auto sm:rounded-lg md:hidden">
                            <div className="flex items-center space-x-1 cursor-pointer">
                                <BookmarkIcon className="h-6 text-gray-500" />
                                <p className="text-sm font-semibold text-gray-500">My Jobs</p>
                            </div>
                            <div className="flex items-center space-x-1 cursor-pointer p-2 rounded-md hover:bg-gray-100">
                                <p className="text-sm font-semibold text-gray-500">More</p>
                                <ArrowDropDown className="text-gray-500" />
                            </div>
                        </div>
                        <div className="mt-6 bg-white p-4 border-t border-b sm:border max-w-screen-sm mx-auto sm:rounded-lg">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-800">Recent job searches</h2>
                                <p className="text-sm font-semibold text-gray-500 px-2 cursor-pointer rounded-sm hover:bg-gray-200">Clear</p>
                            </div>
                                <p className="mt-4 font-semibold text-sm">node.js/react <span className="text-green-700 cursor-pointer">(1,018 new)</span></p>
                                <p className="text-xs">Worldwide</p>
                        </div>
                        <div className="mt-4 bg-white pb-4 border-t border-b sm:border max-w-screen-sm mx-auto sm:rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 pt-6 px-4">Remote opportunities</h3>
                            <p className="text-sm px-4 text-gray-500 pb-4">Because you expressed interest in remote work</p>
                            <div className="space-y-4 mb-2">
                                {jobData?.slice(0, 4).map((data, index) => (
                                    <JobCard
                                    key={index}
                                    img={data.img}
                                    title={data.title}
                                    location={data.location}
                                    company={data.company}
                                    age={data.age}
                                    />
                                ))}
                            </div>
                            <p className="w-min whitespace-nowrap mx-auto font-semibold cursor-pointer text-blue-600 px-1 rounded-md  hover:bg-blue-100">See more jobs</p>
                        </div>
                        <div className="mt-4 pb-4 bg-white border-t border-b sm:border max-w-screen-sm mx-auto sm:rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 pt-6 px-4">node js/react</h3>
                            <p className="text-sm px-4 text-gray-500 pb-4">Worldwide</p>
                            <div className="space-y-4 mb-2">
                                {jobData?.slice(5, 9).map((data, index) => (
                                    <JobCard
                                    key={index}
                                    img={data.img}
                                    title={data.title}
                                    location={data.location}
                                    company={data.company}
                                    age={data.age}
                                    />
                                ))}
                            </div>
                            <p className="w-min whitespace-nowrap mx-auto font-semibold cursor-pointer text-blue-600 px-1 rounded-md  hover:bg-blue-100">See more jobs</p>
                        </div>
                        <div className="mt-4 pb-2 bg-white border-t border-b sm:border max-w-screen-sm mx-auto sm:rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 pt-6 px-4">Recommended for you</h3>
                            <p className="text-sm px-4 text-gray-500 pb-4">Based on your profile and search history</p>
                            <div className="space-y-4 mb-2">
                                {jobData?.slice(10, jobData.length).map((data, index) => (
                                    <JobCard
                                    key={index}
                                    img={data.img}
                                    title={data.title}
                                    location={data.location}
                                    company={data.company}
                                    age={data.age}
                                    />
                                ))}
                            </div>
                            <p className="w-[90%] whitespace-nowrap mx-auto font-semibold cursor-pointer text-gray-500 px-1 border border-gray-500 rounded-full text-center  hover:bg-gray-100 hover:border-2">See more jobs</p>
                        </div>
                    </div>
                    <div className="">
                        <NewsletterCard />
                    </div>
                </section>
            </main>
        </Fragment>
    )

    if (loading) {
        content = <Spinner />
    }

    return (
        <Fragment>
            {content}
        </Fragment>
    )
}



export async function getStaticProps() {
    const jobData = await fetch("https://jsonkeeper.com/b/9PUC").then(res => res.json())

    return {
        props: {
            jobData
        }
    }
}