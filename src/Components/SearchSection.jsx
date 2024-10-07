import { useState } from "react";
import React from "react";
import TrendLabel from "./TrendLabel";
function SearchSection() {
  return (
    <div className="hidden lg:flex lg:flex-col w-[55vw]">
      <div className="sticky top-0 mx-4 bg-base-100 z-20">
      
        <label className="input bg-neutral rounded-full flex items-center gap-2 my-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width=""
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <input type="text" className="grow " placeholder="Search" />
        </label>
      </div>
      <div className="py-2 px-4 border-neutral border-2 m-4 rounded-xl">
        <p className="text-[1.2rem] font-semibold">Subscribe to Premium</p>
        <p>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button className="btn btn-sm rounded-2xl btn-accent text-white my-2">
          Subscribe
        </button>
          </div>
          <div className="py-2 px-4 border-neutral border-2 m-4 rounded-xl">
        <p className="text-[1.2rem] font-semibold">What's happening</p>
              <TrendLabel title="الملك سلمان" sub1='Trending on X' sub2='23.9k posts'></TrendLabel>
              <TrendLabel title="الهلال_الأهلي#" sub1='Trending on sports' sub2='26.3k posts'></TrendLabel>
              <TrendLabel title="الخجل الإجتماعي" sub1='Trending on Saudi Arabia' sub2='7.2k posts'></TrendLabel>
              <TrendLabel title="#Flutter" sub1='Trending on Technology' sub2='18.4k posts'></TrendLabel>

        <button className="btn btn-sm rounded-2xl btn-accent text-white my-2">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default SearchSection;
