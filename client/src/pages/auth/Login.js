import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';

export const Login = () => {
    
    const [email,SetEmail]=useState("");
    const [password,SetPassword]=useState("");
    const navigate=useNavigate();
      //form function

      const handleSubmit= async (e) => {
        e.preventDefault();
        try{
        const res=await axios.post('/api/v1/auth/login',{email,password});
        if(res && res.data.success){
          navigate("/");
          toast.success(res.data.message);
        }
        else{
          toast.error(res.data.message);
        }
        }
        catch(error){
          console.log(error);
          toast.error('something went wrong');
        }
            };
  return (
    <Layout title={"Register ecommerce app"}> 
    <div className='register'>   <h1>Register Page</h1>
   
   <form onSubmit={handleSubmit}>
{/* email */}
 <div className="mb-3">
 
   <input type="email" value={email} onChange={(e) => SetEmail(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email address' required/>
   <div id="emailHelp" className="form-text"></div>
 </div>

 {/* password */}
 <div className="mb-3">
  
   <input type="password" value={password} onChange={(e) => SetPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='enter password' required/>
 </div>

 
 <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  </Layout>
  )
}
