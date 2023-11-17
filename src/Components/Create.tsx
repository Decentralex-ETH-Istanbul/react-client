import { ConnectButton } from "@rainbow-me/rainbowkit";
// src/components/About.js
const Create = () => {
    return (
      <div>
         {/* Main content */}
         <div>
          {/* <SvgWrapper>
            <EnsSVG />
          </SvgWrapper> */}

          <h1>Join as a client or freelancer</h1>

          <div>
            <div>
              <button className="mx-auto text-3xl font-bold"  onClick={undefined}>
                Client
              </button>
            </div>
            <div>
              <button className="mx-auto text-3xl font-bold" >
                Freelancer
              </button>
            </div>
          </div>
          <div className="flex justify-center">
          <ConnectButton showBalance={false} />
        </div>
        </div>
      </div>
    );
  };
  
  export default Create;
  