
import { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 const [formData, setFormData] = useState({
  name:'',
  age:'',
  email:''
 })
 const [apidata, setapidata] = useState([]);



 const insertINtoDatabase =async ()=>{
  try{
let response = await fetch("http://localhost:8000/api/users/insert", { method:"post",
  headers:{
    "Content-Type" : "application/json"
  },
  body:JSON.stringify({
   name:formData.name,
    age:formData.age,
    email:formData.email
  })
})
let data = await response.json();

    // Debug response and data objects
    console.log("Response:", response);
    console.log("Data:", data);

    // Check response status and show corresponding alert
    if (response.ok) {
      alert("Success");
    } else {
      alert("No success");
    }
  }catch(e){
    console.log("Error", e);
  }
 }

 const handelinput = (e)=>{

  let name = e.target.name;
  let value = e.target.value;
  
  setFormData((prev)=>({
      ...prev,
      [name]: value
  }));
      }

      const display = (e)=>{
        e.preventDefault();
        console.log(formData);
        insertINtoDatabase();
    }

    const showUser =async ()=>{
      try{
let response = await fetch("http://localhost:8000/api/users/userdetail");
let data = await response.json();
console.log(data.get);
setapidata(data.get);



      }catch(e){
        console.log("Error", e);
      }
    }

    useEffect(()=>{
showUser();
    },[])

const deleteuser =async (id)=>{
try{
let response = await fetch(`http://localhost:8000/api/users/delete/${id}`,{
  method:"delete",
  headers:{
    "Content-Type" : "application/json"
  },
  
})
let data = await response.json();
if(data){
  toast.success("Success");
}
}catch(e){
  console.log("Error", e)
}
}

  return (
    <>
   {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

{
 apidata.map((item, index)=>{
  return(
    <div key={index}>
      <button onClick={()=>{deleteuser(item._id)}} className='bg-green-200 cursor-pointer border-rounded p-1'>Delete</button>
<p className='text-red-300'>{item.name}</p>
    </div>

  )
 })
}

<section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

      <p className="mt-4 text-gray-500">
      I am learning MERN stack development, Here i am using node js, express js and mongodb
      </p>
    </div>

    <form onSubmit={display} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">Name</label>

        <div className="relative">
          <input value={formData.name} onChange={handelinput}
          name='name'
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Name"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Age</label>

        <div className="relative">
          <input value={formData.age} onChange={handelinput}
          name='age'
            type="number"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Age"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input value={formData.email} onChange={handelinput}
          name='email'
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          No account?
          <a className="underline" href="#">Sign up</a>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Sign
        </button>

       
      </div>
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt=""
      src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>
<ToastContainer/>
    </>
  )
}

export default App
