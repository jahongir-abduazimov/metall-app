import React from "react";
import Container from "@/components/Container";
import GooglePlayIcon from "../../../public/google-play.png";
import AppleLogo from "../../../public/apple.png";
import Image from "next/image";

const CTA = () => {
  return (
    <section>
      <Container>
        <div className="bg-white shadow-lg border rounded-2xl p-6 md:p-10 flex items-center md:flex-row flex-col justify-between gap-10">
          <div className="max-w-[700px]">
            <h2 className="text-[30px] md:text-[36px] font-bold leading-[120%]">
              Ready to get started?
            </h2>
            <p className="text-gray-600 text-[18px] mt-4">
              Join thousands of users who are already improving their workflow.
              Sign up in seconds and explore all features.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button className="bg-black text-white border cursor-pointer rounded-lg px-3 sm:px-5 py-2 sm:py-3 font-semibold transition flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <Image width={25} src={GooglePlayIcon} alt="ad" />
              <span>Google Play</span>
            </button>
            <button className="bg-black cursor-pointer text-white rounded-lg px-3 sm:px-5 py-2 sm:py-3 font-semibold transition flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <Image width={25} src={AppleLogo} alt="ad" />
              <span>App Store</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
