import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid"
import { LinkedIn} from "@material-ui/icons"
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

const Signup = () => {
    const {
        register,
        reset,
        handleSubmit,
        setError,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    const [isError, setIsError] = useState(null)

    const router = useRouter()

    const signupHandler = ({name, email, password}) => {
        fetch(`${process.env.SERVER}/auth/signup`, {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
          console.log(res)
          if(!res.ok) {
            throw new Error("Could not sign you up, please check and try again")
          }
          return res.json()
        }).then(data => {
            router.replace("/sign-in")
        }).catch(err => {
          setIsError(err.data || err.Error || "Could not sign you up! Please check and try again")
          setTimeout(() => {
            setIsError(null)
          }, 5000)
        })

        
    }

    return (
        <div className="bg-white h-screen overflow-y-auto overflow-x-hidden lg:bg-[#f3f2ef]">
            <div className="p-4 flex flex-col items-center justify-center">
            <div className="flex justify-center items-center p-4">
                <p className="text-3xl font-bold text-blue-700">Linked</p>
                <LinkedIn className="text-blue-700" style={{ height: "45px", width: "45px"}}/>
            </div>
            <h3 className="text-3xl text-center p-2">Make the most of your professional life</h3>
            <form 
            className="flex flex-col justify-center my-4 lg:w-96 lg:bg-white lg:p-6 lg:rounded-lg"
            onSubmit={handleSubmit(signupHandler)}
            >
               {isError && <p className="text-red-600">{isError}</p>}
                <label className="text-sm py-1 text-gray-500" htmlFor="name">Name</label>
                <input {...register("name")} className="p-1 border focus:bg-blue-50 rounded-md focus:outline-none focus:ring focus:ring-gray-400" type="text" id="name" />
                {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
                <label className="text-sm py-1 text-gray-500 mt-4" htmlFor="email">Email</label>
                <input {...register("email")} className="p-1 border custom-input rounded-md focus:outline-none focus:ring focus:ring-gray-400 appearance-none" type="email" id="email" />
                {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
                <label className="text-sm py-1 text-gray-500 mt-4" htmlFor="password">Password (6 or more characters)</label>
                <input {...register("password")} className="p-1 border custom-input rounded-md focus:outline-none focus:ring focus:ring-gray-400" type="password" id="password" />
                {errors.password && <p className="text-xs text-red-600">{errors.password.message}</p>}
                <p className="text-center text-xs py-4 text-gray-500">By clicking Agree & Join, you agree to the LinkedIn <span className="font-bold text-blue-700 cursor-pointer hover:underline">User Agreement,</span> <span className="font-bold text-blue-700 cursor-pointer hover:underline">Privacy Policy,</span> and <span className="font-bold text-blue-700 cursor-pointer hover:underline">Cookie Policy</span></p>
                <button 
                className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800"
                onClick={() => {
                    [
                      {
                        type: "manual",
                        name: "name",
                        message: "please provide a valid name",
                      },
                      {
                        type: "manual",
                        name: "email",
                        message: "please provide a valid email",
                      },
                      {
                        type: "manual",
                        name: "password",
                        message:
                          "provide a strong password, min 8 including a symbol, uppercase and lowercase letters",
                      }
                    ].forEach(({ name, type, message }) =>
                      setError(name, { type, message })
                    );
                  }}
                >Agree & Join</button>
                <p onClick={() => router.push("/sign-in")} className="text-center py-4">Already on LinkedIn? <span className="text-blue-700 font-bold cursor-pointer hover:underline">Sign in</span></p>
            </form>
            </div>
            <>
                <div className="grid grid-cols-3 space-x-44 p-4 text-xs text-gray-500 lg:grid-cols-none lg:flex justify-center lg:space-x-4 lg:absolute bottom-0 lg:bg-white lg:w-screen">
                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        <div className="flex items-center mb-4 ml-2 lg:ml-0 lg:flex justify-center lg:mb-0 lg:mr-4">
                        <p className="text-gray-800 font-bold whitespace-nowrap">Linked<span><LinkedIn /></span></p>
                        <p>&copy; 2021</p>     
                        </div>
                    <div className="space-y-4 lg:flex lg:justify-center lg:items-center lg:space-y-0 lg:space-x-4">
                        <p className="cursor-pointer hover:text-blue-700 hover:underline whitespace-nowrap">Accessibility</p>
                        <p className="cursor-pointer hover:text-blue-700 hover:underline whitespace-nowrap">Privacy Policy</p>
                        <p className="cursor-pointer hover:text-blue-700 hover:underline whitespace-nowrap">Copyright Policy</p>
                        <p className="cursor-pointer hover:text-blue-700 hover:underline whitespace-nowrap">Guest Controls</p>
                        <p className="flex items-center cursor-pointer hover:text-blue-700 hover:underline">Language <span><ChevronDownIcon className="h-5" /></span></p>
                    </div>
                    </div>
                    <div className="space-y-4 lg:flex lg:justify-center lg:items-center lg:space-y-0 lg:space-x-4">
                        <p className="cursor-pointer hover:text-blue-700 hover:underline whitespace-nowrap">About</p>
                        <p className="cursor-pointer hover:text-blue-700 hover:underline whitespace-nowrap">User Agreement</p>
                        <p className="cursor-pointer hover:text-blue-700 hover:underline whitespace-nowrap">Cookie Policy</p>
                        <p className="cursor-pointer hover:text-blue-700 hover:underline whitespace-nowrap">Brand Policy</p>
                        <p className="cursor-pointer hover:text-blue-700 hover:underline whitespace-nowrap">Community Guidelines</p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Signup
