// import React from "react";
import { useEffect } from "react";

const HomepageContainer = () => {
  useEffect(() => {
    console.log('Homepage mounted')
  }, [])
  return (
    'hello from homepage'
  )
};

export default HomepageContainer;
