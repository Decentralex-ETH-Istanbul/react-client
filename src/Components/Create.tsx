import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button from "./Button";
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
            <Button>Client</Button>
          </div>
          <div>
            <Button>Freelancer</Button>
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
