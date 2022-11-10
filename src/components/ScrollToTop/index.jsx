import React, { useState, useEffect } from 'react'

import "./index.scss"

export default function ScrollToTop() {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop <= 80 && scroll !== false) {
        setScroll(false)
      }
      else if (scrollTop > 80 && scroll !== true) {
        setScroll(true)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  const TopFunction = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div onClick={TopFunction} className={`ScrollToTop ${scroll ? "active" : ""}`}>
      <svg className='angle-up' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
      </svg>
    </div>
  )
}
