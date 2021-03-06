import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  //destructring useFetch
  const { loading, products } = useFetch(url);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default Example;
