import React, {useState} from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";

// Component
import { signInWitGoogleAsync } from "../../store/reducers/auth.reducer";

function LoginWithGoogle () {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
    const responseMessage = async (response) => {
        console.log(response.credential );
        setLoading(true);
        try {
          const sendData = {
            user_info_token:response.credential,
            provider: 'google'
          }
          await dispatch(signInWitGoogleAsync(sendData));
          toast.success("User login successfully");
        } catch (error) {
          console.log("Error Sign Up Form:", error);
          toast.error(error?.response?.data?.status?.message);
        } finally {
          setLoading(false);
        }
    };
    const errorMessage = (error) => {
      toast.error(error);
    };
    return (
      <div>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
      </div>
    )
}
export default LoginWithGoogle;