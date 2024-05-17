"use client"

import AOS from 'aos';
import { useEffect } from 'react'
import "aos/dist/aos.css";

const AOSInit = () => {
    useEffect(() => {
        AOS.init();
        // AOS.init({
        //   easing: 'ease-out-quad',
        //   duration: 1000,
        // });
      }, []);
  return null
}

export default AOSInit