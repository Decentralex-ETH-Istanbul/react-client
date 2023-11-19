import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@mui/material";
import lighthouse from '@lighthouse-web3/sdk'
import { useAccount } from "wagmi";
import { API_KEY_USERS } from "../consts";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import crypto from 'crypto';
import { sha256 } from 'hash-wasm';

enum Role{
  Client="Client",
  Freelancer="Freelancer"
}

const Create = () => {

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0();
  

  const { address } = useAccount();

  useEffect(() => {

    if (isAuthenticated) {
      console.log("user", user)
      console.log("address", address)
    }
  }, [isAuthenticated])

  console.log("address", address)

  

  const handleUpload: any = async( role: Role) => {
    // add random numvber between 1 and 1000 to the end of the address to make it unique
    

    const unique = address + role + Math.floor(Math.random() * 1000)

    const hash = await sha256(unique);

    const data = `${address}/${role}/${hash}/rep0`;
    const response = await lighthouse.uploadText(data, API_KEY_USERS, address)
    console.log(response)
  }

  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  // Update local storage whenever count changes, convert count to string
  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  useEffect(() => {

    
    if(user){
      console.log('connected')

      if(count === 0){
        console.log('client: ', count)
        handleUpload(Role.Client)
        window.location.href = "/freelancerProfile";
      }
      else if(count === 1){
        console.log('Freelancer: ', count)
        handleUpload(Role.Freelancer)
      }
    }
  }, [user,count])

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 bg-gradient-to-t from-yellow-100 to-indigo-200">
    <div className="bg-white rounded-xl shadow-l p-8 md:p-12 lg:p-16 w-full max-w-3xl space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Join as a...</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-4 bg-white">
          
          <Button
          
            className=" login-button px-6 py-3  text-white rounded hover:bg-blue-600 transition duration-300 text-xl md:text-2xl "
            variant="contained"
            onClick={() => {
              loginWithRedirect();
              setCount(0);
          }}
            disabled={false}
            href="/freelancerProfile"
          >
            Client
          </Button>
          
          
        </div>
        <div className="flex flex-col space-y-4">
          <Button
            className=" login-button px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-xl md:text-2xl"
            variant="contained"
            disabled={!address}
            onClick={() => {
              loginWithRedirect();
              setCount(1);
          }}
          >
            Freelancer
          </Button>
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-8 md:mt-12">
      <ConnectButton showBalance={false} />
    </div>
  </div>
  
  );
};

export default Create;
