import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import axios from 'axios'
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export function Signup() {
       const usernameRef = useRef<HTMLInputElement>(null);
       const passwordRef = useRef<HTMLInputElement>(null);
       const navigate = useNavigate();


       async function signup() {
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value
        try {
          

          await axios.post(BACKEND_URL + '/api/v1/signup', {
            username, 
            password
          }, {
               headers: {
                  'Content-Type': 'application/json',
               }
          }
          
        );
        
        navigate('/signin')
        alert('Signup successful!');
      } catch (error) {
        console.error('Signup failed:', error);
        alert('Signup failed. Please try again.');
      }
       }




    return <div className=" flex justify-center w-full bg-primary h-screen">

          <div className=" flex flex-col  mx-4 justify-center space-y-4 p-20 bg-white  border-dashed shadow-2xs drop-shadow-md rounded-lg m-64">
            <p className="text-2xl text-center font-bold font-lora "> Signup</p>
            <div>
                
                <Input placeholder="email" reference={usernameRef}/>
                <Input placeholder="password" reference={passwordRef}/>

            </div>
            <div className="ml-2">
              <Button textstyle="size-7" size="sm" title="Submit" font="lora" variant="first" width="Bold" onClick={signup}/>
            </div>

          </div>
    </div>;

}