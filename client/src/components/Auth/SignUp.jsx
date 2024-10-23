import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from "axios"


const SignUp = () => {
  const {register,handleSubmit, formState: { errors} } = useForm();
  const onSubmit = async(data)=>{
    const userInfo ={
      fullName:data.fullName,
      email:data.email,
      password:data.password
    }
    await axios.post('http://localhost:3000/api/user/createUser',userInfo).then((res)=>{
      console.log("Register success",res.data);
      if(res){
        alert('User register success')
      }else{
        alert("User doesn't register")
      }
    }).catch((err)=>{
      console.log("Error",err);
      
    })
  }



  return (
     <>
     <div  className='gap-6 flex justify-center items-center  py-16 mt-20'>
        <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className='backdrop-blur-3xl bg-neutral heightform flex flex-col  p-9  rounded-lg gap-7'>
        

 
        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" {...register("fullName")} name='fullName' required={true} className="grow cursor-pointer" placeholder="Username" />
  {errors.fullName && <span className='z-50 text-red-500 text-sm'>This field is required</span>}
</label>

<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="email" {...register("email")} name='email' className="grow cursor-pointer" placeholder="Email" />
  {errors.email && <span className='z-50 text-red-500 text-sm'>This field is required</span>}
</label>

<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" {...register("password")} name='password'  className="grow cursor-pointer" placeholder="Password" />
  {errors.password && <span className='z-50 text-red-500 text-sm'>This field is required</span>}

</label>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" {...register("confirmpassword")}  name='confirmpassword' className="grow cursor-pointer" placeholder="Confirm Password" />
  {errors.confirmpassword && <span className='z-50 text-red-500 text-sm'>This field is required</span>}

</label>

<input type="submit" className="btn btn-block" value={'Sign Up'}/>
<p className='text-sm text-neutral-content'>Account already have created <Link to={'/login'} className='px-4 text-blue-500'>Login </Link></p>
</div>
</form>
 </div>    
     
     
     
     </>




  )
}

export default SignUp