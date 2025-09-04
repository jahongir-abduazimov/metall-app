import React from "react";
import Container from "@/components/Container";
import GooglePlayIcon from "../../../public/google-play.png";
import AppleLogo from "../../../public/apple-logo.png";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="bg-[url('/intro-bg.png')] bg-cover bg-center bg-no-repeat w-full">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between min-h-screen pb-[70px] pt-[100px] gap-10 md:gap-6">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight md:leading-[120%] text-white text-center sm:text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h1>
            <p className="text-white/70 text-base sm:text-lg md:text-xl mt-4 md:mt-6 text-center sm:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus quibusdam dignissimos recusandae porro fugiat alias sint. Tempore eius enim id obcaecati provident ducimus, eum dolor, corporis, debitis nisi architecto.
            </p>
            <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] bg-white/30 text-white rounded-xl backdrop-blur-lg md:hidden flex items-center justify-center mx-auto mt-10">App screen</div>
            <div>
              <p className="text-white text-base sm:text-lg mt-8 md:mt-10 mb-3">
                Download our app today!
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
                <button className="bg-white cursor-pointer text-black rounded-lg px-5 py-3 font-semibold hover:bg-gray-200 transition inline-flex items-center justify-center gap-3">
                  <Image width={25} src={GooglePlayIcon} alt="ad" />
                  <span>Google Play</span>
                </button>
                <button className="bg-white cursor-pointer text-black rounded-lg px-5 py-3 font-semibold hover:bg-gray-200 transition inline-flex items-center justify-center gap-3">
                  <Image width={25} src={AppleLogo} alt="ad" />
                  <span>App Store</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] bg-white/30 text-white rounded-xl backdrop-blur-lg hidden md:flex items-center justify-center">App screen</div>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
