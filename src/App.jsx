import Swiper from "./components/Swiper";
import React, { useState, useRef, useEffect } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Language from "./components/Language";
import Heading2 from "./components/Heading2";
import GradientCards from "./components/GradientCards";
import FAQ from "./components/FAQ";
import AnchorList from "./components/AnchorList";

function App() {
  const startRef = useRef(null);
  const endRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let startVisible = false;
    let endVisible = false;

    const checkVisibility = () => {
      setShowButton(startVisible && !endVisible);
    };

    const startObserver = new IntersectionObserver(
      ([entry]) => {
        startVisible = entry.isIntersecting;
        checkVisibility();
      },
      {
        threshold: 0.25,
      }
    );

    const endObserver = new IntersectionObserver(
      ([entry]) => {
        endVisible = entry.isIntersecting;
        checkVisibility();
      },
      {
        threshold: 0.2,
      }
    );

    if (startRef.current) startObserver.observe(startRef.current);
    if (endRef.current) endObserver.observe(endRef.current);

    return () => {
      if (startRef.current) startObserver.unobserve(startRef.current);
      if (endRef.current) endObserver.unobserve(endRef.current);
    };
  }, []);

  return (
    <>
      <div className="absolute w-full flex justify-center">
        <div className="absolute w-full max-w-[1920px] mx-auto rounded-[10%] h-[600px] min-[960px]:h-[690px] min-[1280px]:h-[760px] shadow-2xl shadow-red-400 -z-30"></div>
      </div>
      <section className="flex flex-col overflow-x-hidden relative h-[664px] min-[960px]:h-[760px] min-[1280px]:h-[830px] px-[2px] max-w-[1920px] mx-auto items-center z-0">
        <div className="absolute w-full max-w-[1920px] h-[664px] min-[960px]:h-[760px] min-[1280px]:h-[830px] bg-black -z-30"></div>
        <header className="flex w-full justify-between py-6 min-[960px]:py-5 min-[1280px]:py-6 px-6 min-[600px]:px-8 min-[960px]:px-20 min-[1280px]:px-36 min-[1920px]:max-w-screen-xl z-20">
          <svg
            viewBox="0 0 111 30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            fill="currentColor"
            className="text-[#e50914] w-22 min-[960px]:w-36"
          >
            <g>
              <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
            </g>
          </svg>
          <div className="flex h-8 gap-2 self-center">
            <Language responsive={true}></Language>
            <Button textContent="Sign In" small={true}></Button>
          </div>
        </header>
        <main className="w-full px-8 h-[450px] min-[960px]:h-[500px] min-[1280px]:h-[600px] z-20 flex flex-col items-center justify-center gap-4 max-[960px]:gap-2">
          <h1 className="text-6xl max-[1280px]:text-[40px] max-[960px]:text-[32px] font-sans font-bold max-w-[700px] max-[1280px]:max-w-[500px] max-[960px]:max-w-[450px] text-center">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-xl max-[1280px]:text-[16px] font-sans font-semibold max-[1280px]:font-normal text-center">
            Starts at ₹149. Cancel at any time.
          </p>
          <h3 className="text-[16px] font-sans mt-4 max-[960px]:mt-1 max-[1280px]:max-w-[500px] text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <form className="flex flex-row max-[600px]:flex-col gap-2 max-[600px]:gap-3 w-full mx-auto justify-center items-center">
            <Input id="email" type="email" placeholder="Email Address"></Input>
            <Button textContent="Get Started" svg={true}></Button>
          </form>
        </main>
        <div className="absolute w-full h-48 inset-0 bg-gradient-to-b from-black/90 to-transparent z-10"></div>
        <div className="absolute w-full inset-0 bg-gradient-to-t from-black/90 to-black/15 z-10"></div>
        <div className="flex h-[664px] min-[960px]:h-[760px] min-[1280px]:h-[830px] w-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg')] bg-cover bg-center opacity-50 absolute -z-10 top-0 max-w-[1920px] mx-auto"></div>
      </section>
      <section className="-mt-30 max-w-[1920px] mx-auto z-2">
        <div className="container">
          <div className="curve-container">
            <div className="curve w-[200%] min-[600px]:w-[180%] min-[960px]:w-[150%] min-[1280px]:w-[130%] left-[-50%] min-[600px]:left-[-40%] min-[960px]:left-[-25%] min-[1280px]:left-[-15%]"></div>
          </div>
          <div className="box2 mt-[1.375em] min-[600px]:mt-[1.875rem] min-[960px]:mt-[1.25rem] min-[1280px]:mt-[1.375rem]"></div>
        </div>
      </section>
      <section
        ref={startRef}
        className="flex flex-col -top-12 overflow-x-hidden relative px-[354px] max-[1920px]:px-[148px] max-[1280px]:px-[80px] max-[960px]:px-[32px] max-[600px]:px-[24px] max-w-[1920px] mx-auto items-center z-50"
      >
        <div className="w-full min-[1920px]:max-w-[1212px] mb-4">
          <Heading2 textContent="Trending Now"></Heading2>
        </div>
        <div className="w-full mb-16">
          <Swiper></Swiper>
        </div>
        <div className="w-full min-[1920px]:max-w-[1212px] mb-12">
          <Heading2 textContent="More reasons to join"></Heading2>
          <GradientCards></GradientCards>
        </div>
        <div className="w-full min-[1920px]:max-w-[1212px] mb-12">
          <Heading2 textContent={"Frequently Asked Questions"}></Heading2>
          <FAQ></FAQ>
        </div>
      </section>
      <section
        ref={endRef}
        className="flex flex-col -top-12 overflow-x-hidden relative px-[354px] max-[1920px]:px-[148px] max-[1280px]:px-[80px] max-[960px]:px-[32px] max-[600px]:px-[24px] max-w-[1920px] mx-auto items-center z-50"
      >
        <div className="flex flex-col items-center w-full">
          <h3 className="text-[16px] mb-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <form className="flex flex-row max-[600px]:flex-col gap-2 w-full mx-auto justify-center items-center max-[600px]:items-start max-[600px]:gap-4">
            <Input id="email" type="email" placeholder="Email Address"></Input>
            <Button textContent="Get Started" svg={true}></Button>
          </form>
        </div>
      </section>
      <section className="flex flex-col -top-12 overflow-x-hidden relative px-[354px] max-[1920px]:px-[148px] max-[1280px]:px-[80px] max-[960px]:px-[32px] max-[600px]:px-[24px] max-w-[1920px] mx-auto mt-16 z-50">
        <span className="opacity-70 mb-8">
          Questions? Call{" "}
          <a href="" className="underline">
            000-800-919-1743
          </a>
        </span>
        <AnchorList></AnchorList>
        <div className="flex h-8 gap-2">
          <Language></Language>
        </div>
        <p className="opacity-70 text-[14px] mt-8 mb-16">
          Netflix Clone - Aditya Prasad
        </p>
      </section>
      <div
        className={`sm:hidden w-full bg-gradient-to-b from-transparent to-black pointer-events-none sticky bottom-0 px-6 pb-6 pt-36 shadow-black shadow-2xl transition-all ease-in-out duration-200 left-1/2 z-100 ${
          showButton ? "" : "translate-y-8 opacity-0"
        }`}
      >
        <button
          className={`justify-center pointer-events-auto left-1/2 z-100 h-10 w-full text-white cursor-pointer font-bold flex items-center font-sans rounded-sm bg-red-600 hover:bg-red-700 transition-colors ease-in-out duration-300 `}
        >
          Get Started
        </button>
      </div>
    </>
  );
}

export default App;
