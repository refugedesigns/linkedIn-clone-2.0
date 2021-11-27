import { LinkedIn } from "@material-ui/icons"
import { blue } from "@material-ui/core/colors"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRouter } from "next/router"

import { login } from "../store/authSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import Spinner from "./UI/Spinner"
import { Fragment } from "react"

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })

const Signin = () => {
    const {
        register,
        reset,
        handleSubmit,
        setError,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(null)
    const dispatch = useDispatch()
    
    const signinHandler = (data) => {
        setLoading(true)
        fetch(`${process.env.SERVER}/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                email: data.email,
                password: data.password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if(res.status === 422) {
                const error = new Error("This user does not exist!")
                error.data = "Authentication failed! Please enter a valid username or password."
                throw error
            }
            if(res.status !== 200 && res.status !== 201) {
                const error = new Error("Authentication failed!")
                error.data = "Could not authenticate you!"
                throw error
            }
            return res.json()
        }).then(data => {
            const remainingMilliseconds = 60 * 60 * 1000
            const expiryDate = new Date(new Date().getTime() + remainingMilliseconds)
            dispatch(login({
                token: data.token,
                userId: data.userId,
                expiryDate: expiryDate.toISOString(),
                remainingTime: remainingMilliseconds
            }))
            router.replace("/")
        }).catch(error => {
            setIsError("Authentication failed! Please check and try again.")
            setLoading(false)
            setTimeout(() => {
                setIsError(null)
            }, 5000)
        })
    }

    let content = (
        <div className="bg-white h-screen">
            <div className="max-w-screen-sm mx-auto md:flex md:flex-col md:justify-center md:h-full">
            <div className="flex items-center pt-8 px-8 md:pb-0 md:ml-16 md:pt-16">
                <h3 className="text-3xl font-bold" style={{color: blue[700]}}>Linked</h3>
                <LinkedIn style={{ color: blue[700], height: "46px", width: "46px"}} />
            </div>
            <div className="m-16 w-80 mx-auto space-y-6 md:bg-white md:drop-shadow-lg md:m-24 md:mt-4 md:mb-0 md:w-2/3 md:mx-auto md:p-8 md:rounded-lg">
                <div className="space-y-1">
                    {isError && <p className="text-red-600">{isError}</p>}
                    <h3 className="text-3xl font-semibold">Sign in</h3>
                    <p className="text-sm whitespace-nowrap">Stay updated on your professional world</p>
                </div>
                <form 
                className="flex flex-col justify-center space-y-3"
                onSubmit={handleSubmit(signinHandler)}
                >
                    <input 
                    {...register("email")}
                    type="email" 
                    id="email" 
                    placeholder="Email" 
                    className="p-3 rounded-md border border-gray-500 focus:outline-none focus:border-2 focus:border-blue-600"
                     />
                     {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
                    <input 
                    {...register("password")} 
                    type="password" 
                    id="password" 
                    placeholder="password" 
                    className="p-3 rounded-md mt-2 border border-gray-500 focus:outline-none focus:border-2 focus:border-blue-600" 
                    />
                    {errors.password && <p className="text-xs text-red-600">{errors.password.message}</p>}
                    <p className="font-semibold p-1 px-2 rounded-full w-min whitespace-nowrap text-blue-600 cursor-pointer hover:underline hover:bg-blue-100">Forgot password? </p>
                    <button 
                    className="p-4 text-white font-semibold bg-blue-600 rounded-full cursor-pointer hover:bg-blue-800"
                    onClick={() => {
                        [
                          {
                            type: "manual",
                            name: "email",
                            message: "please provide a email",
                          },
                          {
                            type: "manual",
                            name: "password",
                            message: "your password must be a min of 8 chars",
                          },
                        ].forEach(({ name, type, message }) =>
                          setError(name, { type, message })
                        );
                      }}
                    >Sign in</button>
                </form>
            </div>
            <div className="mt-36 flex justify-center items-center md:mt-12">
                <p>New to LinkedIn?</p>
                <p onClick={() => router.push("/sign-up")} className="font-semibold text-blue-600 p-1 px-2 rounded-full cursor-pointer hover:underline hover:bg-blue-100">Join now</p>
            </div>
            </div>
            <div className="hidden md:flex justify-center items-center absolute bottom-2 w-screen mx-auto">
                <div className="flex justify-center items-center flex-wrap mx-2">
                    <p className="flex justify-center items-center text-sm font-semibold text-black">Linked <span><LinkedIn /></span></p>
                    <p className="text-xs">&copy;2021</p>
                </div>
                <div className="flex justify-center items-center flex-wrap text-xs space-x-2 text-gray-500">
                    <p className="whitespace-nowrap cursor-pointer hover:underline">User Agreement</p>
                    <p className="whitespace-nowrap cursor-pointer hover:underline">Privacy Policy</p>
                    <p className="whitespace-nowrap cursor-pointer hover:underline">Community Guidelines</p>
                    <p className="whitespace-nowrap cursor-pointer hover:underline">Cookie Policy</p>
                    <p className="whitespace-nowrap cursor-pointer hover:underline">Copyright Policy</p>
                    <p className="whitespace-nowrap cursor-pointer hover:underline">Send Feedback</p>
                    <p className="whitespace-nowrap cursor-pointer hover:underline">Language</p>
                </div>
            </div>
        </div>
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

export default Signin
