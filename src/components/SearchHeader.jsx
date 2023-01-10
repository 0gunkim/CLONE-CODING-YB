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
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600">
      <Link to="/">
        <BsYoutube />
        <h1 className="text-2xl">GoldenTube</h1>
      </Link>
      <form onSubmit={onSubmitHandle}>
        <input type="text" placeholder="검색.." ref={refKeyWord} />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
