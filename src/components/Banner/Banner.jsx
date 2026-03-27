import React from 'react';
import bannerBg from '../../assets/bg-shadow.png';
import heroImg from '../../assets/banner-main.png';

const Banner = ({ addFreeCredit }) => {
  return (
    <section
      className="mx-2.5 lg:mx-10 py-5 lg:py-10 bg-black mt-10 rounded-xl bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <div>
          <img src={heroImg} alt="Hero image" />
        </div>

        <div className="space-y-2 text-center">
          <h1 className="text-2xl lg:text-4xl text-white font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-white/70 font-medium">
            Beyond Boundaries Beyond Limits
          </p>
        </div>

        <button
          className="text-black font-semibold px-3 py-2 rounded-xl bg-[#E7FE29] outline-3 outline-white cursor-pointer hover:bg-amber-400 transition duration-300"
          onClick={addFreeCredit}
        >
          Claim Free Credit
        </button>
      </div>
    </section>
  );
};

export default Banner