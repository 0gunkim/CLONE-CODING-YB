import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Videos = () => {
  const { keyword } = useParams();

  return <div>비디오 {keyword ? `${keyword}` : "Hot"}</div>;
};
