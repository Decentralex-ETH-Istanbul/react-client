import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@mui/material";
import lighthouse from '@lighthouse-web3/sdk'
import { useAccount } from "wagmi";

enum Role{
  Client="Client",
  Freelancer="Freelancer"
}

const apiKey =  ""

const Create = () => {

  const { address } = useAccount();

  console.log("address", address)

  const handleUpload: any = async( role: Role) => {
    const data = `${address}/${role}/wdID-XXX` 
    const response = await lighthouse.uploadText(data, apiKey, address)
    console.log(response)
  }
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 bg-gradient-to-t from-yellow-100 to-indigo-200">
    <div className="bg-white rounded-xl shadow-l p-8 md:p-12 lg:p-16 w-full max-w-3xl space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Join as a...</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-4 bg-white">
          
          <Button
          
            className=" login-button px-6 py-3  text-white rounded hover:bg-blue-600 transition duration-300 text-xl md:text-2xl "
            variant="contained"
            onClick={handleUpload(Role.Client)}
            disabled={!address}
            href="/chat"
          >
            Client
          </Button>
          
          
        </div>
        <div className="flex flex-col space-y-4">
          <Button
            className=" login-button px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-xl md:text-2xl"
            variant="contained"
            disabled={!address}
            onClick={handleUpload(Role.Freelancer)}
            href="/chat"
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
