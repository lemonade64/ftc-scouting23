"use client";

import { useEffect } from "react";

export default function ToggleMode() {
  useEffect(() => {
    function onkeydown(e) {
      e.key === "x" && (e.metaKey || e.ctrlKey) ? toggleMode() : null;
    }

    window.addEventListener("keydown", onkeydown);
    return () => {
      window.removeEventListener("keydown", onkeydown);
    };
  }, [toggleMode]);

  function toggleMode() {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const isSystemDarkMode = darkModeMediaQuery.matches;
    const isDarkMode = document.documentElement.classList.toggle("dark");

    isDarkMode === isSystemDarkMode
      ? delete window.localStorage.isDarkMode
      : (window.localStorage.isDarkMode = isDarkMode);
  }

  return <></>;
}
