import React from 'react'
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse, googleLogout } from '@react-oauth/google'
import jwt_decode from "jwt-decode"

import { GoogleData } from '../Interface/User'
import CustomBtn from './CustomBtn'

// const handleSubcribe = (event: React.FormEventHandler<HTMLButtonElement>) => {
//     console.log("You're have subscribed")
// }

/**
 * 
 * Create props which checks that user clicked on subscirbe button if yes then change text on button to be subscribed with ... useremail
 * else display subscribe with gmail.
 * 
 * props will look like 
 * interface props {
 *  subscribe: function
 * }/// not sure
 * eg: 
 * function Greeting(props) {
  if (props.signedIn == false) {
    return <h1>Please login.</h1>;
  } else {
    return (
      <>
        <h1>Welcome back, {props.name}!</h1>
        <article>
          Latest Movie: A Computer Bug's Life
        </article>
      </>
    )
  }
}
 */

const GoogleOauth = () => {
    const handleSuccessLogin = (credentialResponse: CredentialResponse) => {
        const { credential } = credentialResponse
        if (credential) {
            const decoded = jwt_decode<GoogleData>(credential)
            console.log(decoded)
            googleLogout()
        }
    }
    const handleErrorLogin = () => {
        console.log('Login Failed')
    }
    return (
        <div>
            <CustomBtn>
                <GoogleOAuthProvider clientId="24853632599-3erbn3jd3rs9nsjrvfdugokdpv2picrc.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={handleSuccessLogin}
                        onError={handleErrorLogin}
                        useOneTap
                    />
                </GoogleOAuthProvider>
            </CustomBtn>
        </div>
    )
}

export default GoogleOauth 
