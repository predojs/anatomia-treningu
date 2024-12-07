import React from "react";

const IntroductionView = () => (
  <div className="h-[91dvh] flex items-center justify-center heroSection">
    <section className="h-full flex flex-col items-center justify-center gap-8 text-white">
      <p className=" font-light text-center uppercase tracking-widest">
        Anatomia treningu
      </p>
      <hr className="bg-white w-1/12 h-[1px]" />
      <h1 className="font-bold uppercase text-3xl text-[#B20501]">
        Osiągnij z nami swój cel!
      </h1>
      <p className="text-2xl text-center font-semibold tracking-wide">
        Uczymy trenować i jeść mądrze
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#B20501"
        className="size-14 fixed bottom-16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </section>
  </div>
);

export default IntroductionView;
