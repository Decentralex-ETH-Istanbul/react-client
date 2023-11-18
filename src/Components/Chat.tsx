import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@mui/material";
// src/components/About.js
const Chat = () => {
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
            >
              Report an issue
            </Button>
            <div className="flex flex-col items-center justify-center h-64 md:h-96 bg-gray-200 w-full rounded-lg mb-8 md:mb-12">
              <span className="text-gray-500 text-xl md:text-2xl">CHAT</span>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white text-lg md:text-xl p-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Accept Final Delivery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
