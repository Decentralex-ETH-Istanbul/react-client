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
  
// import { Button } from "@mui/material";
// // src/components/About.js
// const Chat = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-8">
//         <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 lg:p-16 w-full max-w-4xl">
//           <div className="text-center mb-8 md:mb-12 space-y-4">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               Logo for web3 startup
//             </h1>
//             <Button
//               className="mt-2 px-4 py-2 bg-white-500 text-black rounded hover:bg-white-600"
//               variant="outlined"
//               href="/supportForm"
//             >
//               Report an issue
//             </Button>
//             <div className="flex flex-col items-center justify-center h-64 md:h-96 bg-gray-200 w-full rounded-lg mb-8 md:mb-12">
//               <span className="text-gray-500 text-xl md:text-2xl">CHAT</span>
//             </div>
//           </div>
//           <Button variant="contained" disabled={true} className="w-full bg-blue-600 text-white text-lg md:text-xl p-4 rounded-lg hover:bg-blue-700 transition duration-300">
//             Accept Final Delivery
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;
