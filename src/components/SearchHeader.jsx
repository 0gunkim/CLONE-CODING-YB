import React, { useEffect, useRef, useState } from "react";
import { BsSearch, BsYoutube } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const refKeyWord = useRef();
  const inputValue = () => refKeyWord.current.value;
  // console.log(inputValue);
  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(refKeyWord.current.value);
    navigate(`/videos/${inputValue()}`);
  };
  useEffect(() => {}, [keyword]);
  return (
    <header className="w-full flex p-4 mb-4 text-2xl border-b border-zinc-600 ">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="text-gray-10 font-bold ml-2 text-3xl">GoldenTube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={onSubmitHandle}>
        <input
          className="w-2/3 p-2 outline-none bg-sky-800 "
          type="text"
          placeholder="검색.."
          ref={refKeyWord}
        />
        <button className="bg-sky-900 px-3">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
