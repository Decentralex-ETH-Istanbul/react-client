import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@mui/material";
import lighthouse from '@lighthouse-web3/sdk'
import { useAccount } from "wagmi";
import dotenv from 'dotenv';


dotenv.config(); // Load environment variables

const apiKey = process.env.REACT_APP_LIGHTHOUSE_API_KEY || ""

const Create = () => {

  const { address } = useAccount();

  console.log("address", address)

  const handleUpload: any = async() => {
    const data = `${address}/client/wdID-XXX` 
    const response = await lighthouse.uploadText(data, apiKey, address)
    console.log(response)
  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">ENS Frontend Examples</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <Button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              variant="contained"
              onClick={handleUpload}
              disabled={!address}
            >
              Client
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <Button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              variant="contained"
              disabled={!address}
            >
              Freelancer
            </Button>
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
