import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function LanguageSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();

  function setLang(lang) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
    // optional: reload to make the backend / translations reflect
    // window.location.reload();
  }

  return (
    <span style={{ marginLeft: "1rem" }}>
      <button onClick={() => setLang("en")} className="small">EN</button>{" "}
      <button onClick={() => setLang("hi")} className="small">HI</button>{" "}
      <button onClick={() => setLang("kn")} className="small">KN</button>
    </span>
  );
}