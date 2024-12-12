import storeLogo from ".././assets/LiteraStore.svg";
import { VscGithubInverted } from "react-icons/vsc";

function Footer() {
  return (
    <div className="sticky top-[100vh]">
      <div className="flex flex-col items-center justify-end bg-black text-center">
        {/* Konten Footer */}
        <div className="p-5">
          <img
            src={storeLogo}
            alt="Store Logo"
            className="mb-4 m-auto w-[120px] sm:w-18"
            style={{
              filter: "invert(1) sepia(1) saturate(5) hue-rotate(180deg)",
            }}
          />
          <p className="text-white font-roboto opacity-50 mb-2 flex items-center">
            Copyright © 2024 |{" "}
            <span className="inline-flex items-center ml-1">
            {" "} MuhammadIqbalK |{" "}
              <a
                href="https://github.com/MuhammadIqbalK"
                className="underline hover:text-gray-300 flex items-center"
              >
                {" "} <VscGithubInverted className="mx-1 inline-block" /> Github
              </a>
            </span>
          </p>
          <p className="text-white font-roboto opacity-50">
            All Rights Reserved |{" "}
            <a href="#" className="underline hover:text-gray-300">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
