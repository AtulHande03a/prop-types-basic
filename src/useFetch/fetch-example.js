import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, products } = useFetch(url);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default Example;
