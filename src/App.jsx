import Swiper from "./components/Swiper";

function App() {
  return (
    <>
      <div className="absolute w-full flex justify-center">
        <div className="absolute w-full max-w-[1920px] mx-auto rounded-[10%] h-[600px] min-[960px]:h-[690px] min-[1280px]:h-[760px] shadow-2xl shadow-red-400 -z-30"></div>
      </div>
      <section className="flex flex-col overflow-x-hidden relative h-[664px] min-[960px]:h-[760px] min-[1280px]:h-[830px] px-[2px] max-w-[1920px] mx-auto items-center">
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
            <div className="flex w-[120px] max-[600px]:w-[62px] relative items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                data-icon="LanguagesSmall"
                aria-hidden="true"
                className="absolute left-2"
              >
                <path
                  fill="currentColor"
                  d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <select
                className="w-full h-full bg-zinc-900/80 appearance-none text-transparent min-[600px]:text-white pb-[2px] border-1 border-[#605f5f] focus:outline-1 focus:outline-white rounded-sm"
                name="LanguageSelect"
              >
                <option
                  lang="en"
                  label="English"
                  value="en-IN"
                  className="text-center bg-white text-black"
                >
                  English
                </option>
                <option
                  lang="hi"
                  label="हिन्दी"
                  value="hi-IN"
                  className="text-center bg-white text-black"
                >
                  हिन्दी
                </option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                data-icon="CaretDownSmall"
                aria-hidden="true"
                className="absolute right-2"
              >
                <path
                  fill="currentColor"
                  d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <button className="flex items-center justify-center focus:outline-none cursor-pointer text-white bg-red-700 hover:bg-red-800 transition-colors ease-in-out duration-300 font-bold rounded-sm text-sm px-4 pt-1.5 pb-2 dark:bg-red-600 dark:hover:bg-red-700">
              Sign In
            </button>
          </div>
        </header>
        <main className="w-full px-8 h-[450px] min-[960px]:h-[500px] min-[1280px]:h-[600px] z-20 flex flex-col items-center justify-center gap-4 max-[960px]:gap-2">
          <h1 className="text-6xl max-[1280px]:text-[40px] max-[960px]:text-[32px] font-sans font-bold max-w-[700px] max-[1280px]:max-w-[500px] max-[960px]:max-w-[450px] text-center">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-xl max-[1280px]:text-lg font-sans font-bold max-[1280px]:font-normal text-center">
            Starts at ₹149. Cancel at any time.
          </p>
          <h3 className="text-lg font-sans mt-4 max-[960px]:mt-1 max-[1280px]:max-w-[500px] text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="flex flex-row max-[600px]:flex-col gap-2 max-[600px]:gap-3 w-full mx-auto justify-center items-center">
            <input
              type="email"
              id="email"
              class="text-md h-12 w-[350px] max-[600px]:w-full outline-none font-sans rounded-sm block px-5 py-2.5 bg-gray-950/45 border-[1px] border-zinc-400/60 placeholder-gray-400 text-white"
              placeholder="Email Address"
              required
            />
            <button
              type="submit"
              className="text-white font-bold flex items-center justify-between font-sans rounded-sm text-xl min-w-46 h-12 sm:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-700 transition-colors ease-in-out duration-300"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="ChevronRightStandard"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </main>
        <div className="absolute w-full h-48 inset-0 bg-gradient-to-b from-black/90 to-transparent z-10"></div>
        <div className="absolute w-full inset-0 bg-gradient-to-t from-black/90 to-black/15 z-10"></div>
        <div className="flex h-[664px] min-[960px]:h-[760px] min-[1280px]:h-[830px] w-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg')] bg-cover bg-center opacity-50 absolute -z-10 top-0 max-w-[1920px] mx-auto"></div>
        <div className="xl:w-[1920px] md:w-[1280px] w-[888px] p-15 xl:p-15 border-red-500 opacity-75 border-t-4 rounded-t-[100%] absolute bottom-0 bg-black z-30 "></div>
      </section>
      <section className="flex flex-col -top-16 overflow-x-hidden relative h-[664px] min-[960px]:h-[760px] min-[1280px]:h-[830px] px-[354px] max-[1920px]:px-[148px] max-[1280px]:px-[80px] max-[960px]:px-[32px] max-[600px]:px-[24px] max-w-[1920px] mx-auto items-center z-50">
        <div className="w-full min-[1920px]:max-w-[1212px] mb-4">
          <h2 className="text-[26px] min-[1920px]:text-[32px] font-sans font-bold">
            Trending Now
          </h2>
        </div>
        <div className="w-full ">
          <Swiper></Swiper>
        </div>
      </section>
    </>
  );
}

export default App;
