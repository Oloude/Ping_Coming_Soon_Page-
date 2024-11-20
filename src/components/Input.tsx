import { useState } from "react"

 

function Input() {

  const [email,setEmail] = useState(''   )
  const [error, setError] = useState('')

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  function handleEmail(value:string){
setEmail(value )
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email) {
      setError("Whoops! It looks like you forgot to add your email.");
    } else if (!regex.test(email)) {
      setError("Please provide a valid email address.");
    } else {
      setError("");
       
    }
  }
 
  return (
   <form onSubmit={(e)=>handleSubmit(e)} action="  " className="flex flex-col gap-4 mb-16 lg:flex-row">
    <div className="flex flex-col gap-1 lg:basis-2/3">
        <input onChange={(e)=> handleEmail(e.target.value)} value={email} type="email" name=" " id="" placeholder="Your email address" className={`${
          error  ? 'border-lightRed' :
          'border-gray'
        } border outline-none w-full border-gray py-3 rounded-full px-4 text-gray text-base placeholder::text-gray"`}/>
        <span className="text-lightRed text-sm text-center block lg:text-left">{error}</span>
    </div>
    <button className="text-white font-medium text-base bg-blue py-3 px-4 rounded-full lg:basis-1/3 lg:self-start">Notify Me</button>
   </form>
  )
}

export default Input