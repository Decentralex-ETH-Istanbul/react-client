import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@mui/material";
// src/components/About.js
const Create = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">ENS Frontend Examples</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Client
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Freelancer
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
};

export default Create;
