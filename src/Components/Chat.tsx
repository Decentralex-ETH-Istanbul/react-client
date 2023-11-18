import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ChatView, ChatUIProvider, darkChatTheme } from "@pushprotocol/uiweb";
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";

import { ethers } from 'ethers'
import React, { useState } from 'react';
// src/components/About.js
const Chat = () => {

  // const groupId = 'c51420c8a053ead33b286edff58fa2cc379497da5420e895b73b5a2a9b1f4817'

  // const prvt = 'aede9a7690e6596b4b06d3f02abcaf0c350b48300d7ebb19d5383e64959c2c7b'

  const signer = ethers.Wallet.createRandom();

  const [groupId, setGroupId] = useState('a73612d6d14afd9f8420c24d970717e6b83cc45a6d0fe6ace8e0527977c491a3')



  const handleCreateGroup = async () => {

    console.log('yo?')
    const userOwner = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });

    const createdGroup = await userOwner.chat.group.create('Group', {  
      description: 'Same Desc',  
      image: "sdsa",
      members: [],  
      admins: [],  
      private: false,  
    });  

    setGroupId(createdGroup.chatId)
  }

    return (

      <>
      
        <button onClick={handleCreateGroup} style={{ backgroundColor: "lightblue", padding: "5px 10px 5px 10px", borderRadius: "5px", marginLeft: '10px',marginTop: '10px' ,marginRight: '10px' }} >Create New Group</button>
        <label htmlFor="">{groupId}</label>
        <div style={{ marginLeft: '10px' }}> <br />

        <input type="text" placeholder="Enter Recipient Address" style={{ padding: '5px 10px 5px 10px' }}/>

        <button style={{ backgroundColor: "lightblue", padding: "5px 10px 5px 10px", borderRadius: "5px" }} >Add recipient</button>
        </div>





        <div style={{ height: "100vh", margin: "20px auto" }}>
          <ChatUIProvider theme={darkChatTheme} env={"prod"}>
            <ChatView
              chatId={groupId}
              limit={10}
              isConnected={true}
              // verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}
            />
        </ChatUIProvider>
        </div>
    </>

    );
  };
  
  export default Chat;
  