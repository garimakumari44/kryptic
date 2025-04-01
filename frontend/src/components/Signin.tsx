import { BACKEND_URL } from "../config";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export function Signin() {
          const usernameRef = useRef<HTMLInputElement>(null)
          const passwordRef  = useRef<HTMLInputElement>(null)
          console
          const navigate = useNavigate()

          async function signin() {
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;

            console.log(username)

            const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
              username, 
              password

            });
            const jwt = response.data.token;
            localStorage.setItem("token", jwt)
            alert('loggedin')
             navigate("/dashboard")
          }

         
         
    return <div className=" flex justify-center w-full bg-primary h-screen">

          <div className=" flex flex-col justify-center border-dashed mx-4 space-y-4 p-20 shadow-2xl drop-shadow-md shadow-gray-200 bg-white rounded-lg mt-60 mb-60 sm:mt-50 sm:mb-50">
            <p className="text-2xl text-center font-bold font-lora border-2 border-gray-200 rounded-full "> Signin</p>
            <div>
                
                <Input  reference={usernameRef}    placeholder="email"/>
                <Input placeholder="password" reference={passwordRef}/>

            </div>
            <div className="ml-3 font-lora text-2xl">
              <Button   size="sm" title="Submit" font="lora" variant="first" width="Bold" textstyle="size-6" onClick={signin}/>
            </div>

          </div>
    </div>
}