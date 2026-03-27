import React from 'react';
import bannerBg from '../../assets/bg-shadow.png';
import heroImg from '../../assets/banner-main.png';

const Banner = () => {
  return (
    <section
      className={`mx-2.5 lg:mx-10 py-5 lg:py-10 bg-black min-h-[60vh] mt-10 rounded-xl bg-no-repeat`}
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div>
        <img src={heroImg} alt="Hero image" />
      </div>

      <div>
        <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p>Beyond Boundaries Beyond Limits</p>
      </div>

      <button>Claim Free Credit</button>
    </section>
  );
}

export default Banner