import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@mui/material";
import lighthouse from '@lighthouse-web3/sdk'
import { useAccount } from "wagmi";
import React from "react";

enum Role{
  Client="Client",
  Freelancer="Freelancer"
}

const apiKey = "5286993e.eb9b1390632d415c988986f066e1abc6" || ""

const Create = () => {

  const { address } = useAccount();

  console.log("address", address)

  const handleUpload: any = async( role: Role) => {
    const data = `${address}/${role}/wdID-XXX` 
    const response = await lighthouse.uploadText(data, apiKey, address)
    console.log(response)
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-8">
    <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 lg:p-16 w-full max-w-4xl space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">ENS Frontend Examples</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center space-y-4">
          <Button
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-xl md:text-2xl"
            variant="contained"
            onClick={handleUpload(Role.Client)}
            disabled={true}
          >
            Client
          </Button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Button
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-xl md:text-2xl"
            variant="contained"
            disabled={!address}
            onClick={handleUpload(Role.Freelancer)}
            href="/freelancerProfile"
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
