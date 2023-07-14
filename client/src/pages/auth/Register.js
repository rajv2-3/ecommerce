import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';
import "../../styles/AuthStyles.css";
const Register = () => {
    const [name,SetName]=useState("");
    const [email,SetEmail]=useState("");
    const [password,SetPassword]=useState("");
    const [phone,SetPhone]=useState("");
    const [address,SetAddress]=useState("");
    const [answer, setAnswer] = useState("");
    const navigate=useNavigate();
    //form function

    const handleSubmit= async (e) => {
e.preventDefault();
try{
const res=await axios.post('/api/v1/auth/register',{name,email,password,phone,address, answer});
if(res && res.data.success){
  navigate("/login");
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
    console.log(process.env.REACT_APP_API);
  return (
   <Layout title={"Register ecommerce app"}> 
     <div className='register'>   <h1>Register Page</h1>
    
    <form onSubmit={handleSubmit}>
{/* name */}
    <div className="mb-3">
   
    <input type="text" value={name} onChange={(e) => SetName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your name' required />
    <div id="emailHelp" className="form-text"></div>
  </div>
{/* email */}
  <div className="mb-3">
  
    <input type="email" value={email} onChange={(e) => SetEmail(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email address' required/>
    <div id="emailHelp" className="form-text"></div>
  </div>

  {/* password */}
  <div className="mb-3">
   
    <input type="password" value={password} onChange={(e) => SetPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='enter password' required/>
  </div>
 
 {/* phone */}
 <div className="mb-3">
  
    <input type="text" value={phone} onChange={(e) => SetPhone(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phone number' required />
    <div id="emailHelp" className="form-text"></div>
  </div>
{/* address */}
  <div className="mb-3">
    
    <input type="text" value={address} onChange={(e) => SetAddress(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='address' required/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  
{/* answer */}
  <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="What is Your Favorite sports"
              required
            />
          </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
   </Layout>
   
  );
};

export default Register;