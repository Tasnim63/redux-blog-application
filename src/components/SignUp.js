import React from "react";
import './Login.css';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import auth from "../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
export default function SignUp() {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
let signInErrorMessage;
 const [updateProfile, updating, updateError] = useUpdateProfile(auth);
 const navigate= useNavigate();
    if( loading || gLoading || updating){
      return <Loading/>
    }
    if( error || gError || updateError){
      signInErrorMessage = <p className=" py-2 text-red-500">{error?.message || gError?.message || updateError?.message}</p>
    }
    if(user ||  gUser){
        console.log(user || gUser);
    }
    const onSubmit = async data =>{ 
      

   await   createUserWithEmailAndPassword(data.email , data.password);
      await updateProfile({ displayName:data.name});
  
      navigate('/')
    };
  return (
    <div className=" flex items-center justify-center h-screen">
    <div className="card w-96  shadow-md rounded-md p-5">
      <h5 className=" text-2xl pb-8 font-bold text-center  text-indigo-700  ">Sign Up</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label >Name:</label>
        <br/>
    <input  className=" w-full rounded border mb-5 py-1 mt-2 border-gray-400 outline-none"
     type="text"
      {...register("name", {
        required:{
           value:true,
           message:"Name is required"
        }
      })} 
     
     placeholder="Your Name"/>
        {errors.name?.type === 'required' && <p className=" text-red-500 font-bold" role="alert">{errors.name.message}</p>}
       
        <label >Email:</label>
        <br/>
    <input  className=" w-full rounded border mb-5 py-1 mt-2 border-gray-400 outline-none"
     type="email"
      {...register("email", {
        required:{
           value:true,
           message:"Email is required"
        },
        pattern: {
          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
          message: 'Provide a valid Email' 
        }
      })} 
     
     placeholder="Write your email"/>
        {errors.email?.type === 'required' && <p className=" text-red-500 font-bold" role="alert">{errors.email.message}</p>}
        {errors.email?.type === 'pattern' && <p className=" text-red-500 font-bold" role="alert">{errors.email.message}</p>}

        <label >Password:</label>
    <input  className=" w-full rounded border mb-5 py-1 mt-2 border-gray-400 outline-none"
     type="password"
      {...register("password", {
        required:{
           value:true,
           message:"password is required"
        },
        minLength: {
          value:6,
          message: 'must be 6 charaecter' 
        }
      })} 
     
     placeholder="Write your password"/>
        {errors.password?.type === 'required' && <p className=" text-red-500 font-bold" role="alert">{errors.password.message}</p>}
        {errors.password?.type === 'minLength' && <p className=" text-red-500 font-bold" role="alert">{errors.password.message}</p>}

    {signInErrorMessage}
    <input className=" w-full bg-indigo-800 text-white rounded-md py-3 my-4  cursor-pointer" type="submit" value="Sign Up" />
  </form>
  <p className=" text-sm">Do you have any account <Link className="text-indigo-700 font-bold ml-2" to="/login">Login</Link></p>
     <div className=" flex items-center justify-center py-4">
       <h6 className="horizontal_line ">or</h6>
     </div>

    <div className=" pb-4">
    <button onClick={() => signInWithGoogle()} className=" bg-indigo-800 w-full text-white py-2 px-12 rounded">Continue With Google</button>
    </div>
    </div>
  </div>
  )
}
