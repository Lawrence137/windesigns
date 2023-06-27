import { useState } from "react";
// import { useNavigate  } from "react-router-dom";


export const SignUp = () => {
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [countryCode, setCountryCode] = useState('')
   const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   //  const redirect = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
    
       fetch({
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                
                firstName:firstName,
                email:email,
                password_hash:password
            })
        }).then((res)=>{
            if(res.ok){
                console.log()
               //  redirect("/tasks/new")

                return res.json()
            }else{
                throw new Error('Email already exists')
            }
        })
    }

  return ( 
   <div className="min-h-screen bg-gradient-to-b from-red-300 to-orange-300">
<form onSubmit={handleSubmit}>
  <div className="container mx-auto w-64 ">
    <h2 className="text-2xl">Sign Up Here</h2>
    <label htmlFor="exampleInputPassword1" className="block mt-4 font-semibold"></label>
    <input type="text" placeholder="First Name" className="border border-gray-300 rounded px-3 py-2 w-full" value={firstName} onChange={e => setFirstName(e.target.value)} />

    <label htmlFor="exampleInputPassword1" className="block mt-4 font-semibold"></label>
    <input type="text" placeholder="Last Name" className="border border-gray-300 rounded px-3 py-2 w-full" value={lastName} onChange={e => setLastName(e.target.value)} />

    {/* <label htmlFor="exampleInputPassword1" className="block font-semibold">Phone Number</label> */}
    <div className="flex items-center">
  <div className="w-1/3 ">
    <label htmlFor="countryCode" className="block mt-4 font-semibold"></label>
    <select name="countryCode" className="border border-gray-300 rounded px-3 py-2 w-full" value={countryCode} onChange={e => setCountryCode(e.target.value)}>
      <option value="+1">+1 (United States)</option>
      <option value="+44">+44 (United Kingdom)</option>
      <option value="+254">+254 (Kenya)</option>
      {/* Add more country codes here */}
    </select>
  </div>

  <div className="w-2/3 mb-6 mt-10">
    <input type="integer" placeholder="Phone Number" className="border border-gray-300 rounded px-3 py-2 w-full" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
  </div>
</div>




    <label htmlFor="exampleInputEmail1" className="block mt-4 font-semibold"></label>
    <input type="email" placeholder="Email Address" className="border border-gray-300 rounded px-3 py-2 w-full" value={email} onChange={e => setEmail(e.target.value)} />
    <div id="emailHelp" className="form-text"></div>

    <label htmlFor="exampleInputPassword1" className="block mt-4 font-semibold"></label>
    <input type="password" placeholder="Password" className="border border-gray-300 rounded px-3 py-2 w-full" value={password} onChange={e => setPassword(e.target.value)} />

    <button type="submit" className="mt-4 bg-blue-800 text-white font-semibold py-2 px-4 rounded">Submit</button>
  </div>
</form>
</div>


);
}
 
