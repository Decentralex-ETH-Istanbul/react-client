import React, { useEffect } from "react";
import OpenDispute from "./OpenDispute";
import lighthouse from "@lighthouse-web3/sdk";
import { API_KEY } from "../consts";
import axios from "axios";

// Example type for dispute data, can be expanded as needed
type Dispute = {
  id: number;
  title: string;
};

// TODO: Read data from IPFS about the disputes

const OpenDisputesGrid: React.FC = () => {
  // This would be fetched from an API or passed down as props
  const disputes: Dispute[] = [
    { id: 1, title: "Logo was not as asked" },
    { id: 2, title: "Logo was not as asked" },
    { id: 3, title: "Logo was not as asked" },
    { id: 4, title: "Logo was not as asked" },
    // ... more disputes
  ];

  const getUploads = async () => {
    /*
      @param {string} apiKey - Your API key.
      @param {number} [pageNo=1] - The page number for pagination, defaults to 1.
    */
    const response = await lighthouse.getUploads(API_KEY);
    console.log("lighthouse response", response);
    return response;
  };

  //   useEffect(() => {
  //      = getUploads()
  // },[])

  const handleFileDownload = async () => {
    /*
      @param {string} cid - The CID of the file to download.
    */
    const res: any = await getUploads();
    // TODO: Get the CID of the wanted files from the response
    const cid = res.data[0].cid;

    const response = await axios.get(
      `https://gateway.lighthouse.storage/ipfs/${cid}`
    );
  };

  return (
    <div className="bg-gray-100 p-10">
      <h2 className="text-3xl font-bold mb-6">Open Disputes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {disputes.map((dispute) => (
          <OpenDispute key={dispute.id} title={dispute.title} />
        ))}
      </div>
    </div>
  );
};

export default OpenDisputesGrid;
