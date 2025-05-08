import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext/AuthCOntext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const GoogleSignin = () => {
    const {googlelogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGooglelogin = ()=>{
        googlelogin()
        .then(result=>{
            console.log(result.user);
            toast.success('Successfull!!!!!!!!')
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className='m-4'>
              <div className="divider">OR</div>
              <div>
                <button onClick={handleGooglelogin} className='btn'>Google</button>
              </div>
        </div>
    );
};

export default GoogleSignin;