import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ChatView, ChatUIProvider, darkChatTheme } from "@pushprotocol/uiweb";
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";

import { ethers } from 'ethers'
import React, { useState, useEffect } from 'react';

import axios from 'axios';

// // src/components/About.js
// const Chat = () => {

//   // const groupId = 'c51420c8a053ead33b286edff58fa2cc379497da5420e895b73b5a2a9b1f4817'

//   // const prvt = 'aede9a7690e6596b4b06d3f02abcaf0c350b48300d7ebb19d5383e64959c2c7b'

//   const signer = ethers.Wallet.createRandom();


//     return (

//       <>
      
//         <button onClick={handleCreateGroup} style={{ backgroundColor: "lightblue", padding: "5px 10px 5px 10px", borderRadius: "5px", marginLeft: '10px',marginTop: '10px' ,marginRight: '10px' }} >Create New Group</button>
//         <label htmlFor="">{groupId}</label>
//         <div style={{ marginLeft: '10px' }}> <br />

//         <input type="text" placeholder="Enter Recipient Address" style={{ padding: '5px 10px 5px 10px' }}/>

//         <button style={{ backgroundColor: "lightblue", padding: "5px 10px 5px 10px", borderRadius: "5px" }} >Add recipient</button>
//         </div>





//         <div style={{ height: "100vh", margin: "20px auto" }}>
        //   <ChatUIProvider theme={darkChatTheme} env={"prod"}>
        //     <ChatView
        //       chatId={groupId}
        //       limit={10}
        //       isConnected={true}
        //       // verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}
        //     />
        // </ChatUIProvider>
//         </div>
//     </>

//     );
//   };
  
//   export default Chat;
  
import { Button } from "@mui/material";
import { useAccount, useSigner } from "wagmi";


// src/components/About.js
const Chat = () => {

  const {address: clientAddress} = useAccount();
  const userSigner = useSigner()

  const freelanceAddress = '0x2A52c31958Bcc72680991373daC2EBf482b610f2'

  const [data, setData] = useState<any>([]);

  const handleChatCreation = async (clientAddress: string, freelancerAddress: string, chatId: any) => {
    const response = await axios.post('http://localhost:3000/AddToArray', { clientAddress, freelancerAddress, chatId })

    console.log('resdata: ',response.data)

  }


  useEffect(() => {
    axios.get('http://localhost:3000/fetchArray')
      .then((response) => {
        // Update state with fetched data
        setData(response.data);
        console.log('Response data:', response.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  // Use data safely here. It will be updated once the request completes.
  useEffect(() => {
    if (data.length > 0) {
      const chatItem = data.find((item: { client: string | undefined; freelancer: string; }) => item.client === clientAddress && item.freelancer === freelanceAddress);

      console.log('chatItem: ', chatItem)
    if(chatItem == undefined) {

      console.log('undfn')

      const initializeUser = async (userSigner: any) => {
        const createdUser = await PushAPI.initialize(userSigner, { env: "prod" });
        
        return createdUser;
      }
      
      const user = initializeUser(userSigner);

      const groupDetails = {
        name: "Freelance Chat",
        options: {
          description: "Freelance Chat",
          members: [freelanceAddress],
          admins: [],
          private: false
        }
      };


      const createGroup = async () => {
        const createdGroup = (await user).chat.group.create(groupDetails.name, groupDetails.options);

        console.log('createdGroup: ', createdGroup)

        return createdGroup;
      }

      const handleGroupCreation = async () => {

        console.log('creating')
        const group =  await createGroup();
        console.log('ghroup: ', group)

        // const chatId = group.chatId;

        // console.log('chatIddd: ', chatId)
        
        console.log('group: ', group);

        // handleChatCreation(clientAddress!, freelanceAddress, chatId)

      }

      handleGroupCreation();

    }
      console.log('chatItem:', chatItem);
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-8">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 lg:p-16 w-full max-w-4xl">
          <div className="text-center mb-8 md:mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Logo for web3 startup
            </h1>
            <Button
              className="mt-2 px-4 py-2 bg-white-500 text-black rounded hover:bg-white-600"
              variant="outlined"
              href="/supportForm"
            >
              Report an issue
            </Button>
            <div className="flex flex-col items-center justify-center h-64 md:h-96 bg-gray-200 w-full rounded-lg mb-8 md:mb-12">
            <ChatUIProvider theme={darkChatTheme} env={"prod"}>
            <ChatView
              chatId={'a73612d6d14afd9f8420c24d970717e6b83cc45a6d0fe6ace8e0527977c491a3'}
              limit={10}
              isConnected={true}
              // verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}
            />
        </ChatUIProvider>
            </div>
          </div>
          <Button variant="contained" disabled={true} className="w-full bg-blue-600 text-white text-lg md:text-xl p-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Accept Final Delivery
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
