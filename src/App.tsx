import { ConnectButton } from "@rainbow-me/rainbowkit";
import Github from "./Components/github";
import Twitter from "./Components/twitter";

function App() {
  return (
    <div className="bg-zinc-900 flex justify-center items-center h-screen text-white w-screen p-10">
      <div>
        <div className="flex justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-10 font-bold text-center">
          gm 🌈 RainbowKit + Vite + React + Tailwind CSS!
        </div>
        <div className="flex justify-center">
          <ConnectButton />
        </div>
        <div className="flex flex-col pt-10">
          <Github />
          <Twitter />
        </div>
      </div>
    </div>
  );
}

export default App;
