import React, { useState, useEffect } from "react";
import CryptoCurrencies from "./components/cryptocurrencies/CryptoCurrencies";
import NavBar from "./components/navbar/NavBar";

import Modal from "./ui/Modal";
import LiveChart from "./components/trending/LiveChart";

function App() {
  const [modalStatus, setModalStatus] = useState(false);
  const [coinId, setCurrenCoinid] = useState("");
  const [themeLight, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : true;
  });

  const onsetThemeHandler = () => {
    localStorage.setItem("theme", JSON.stringify(!themeLight));
    setTheme((status) => !status);
  };

  const onSetModalHandler = (id) => {
    setModalStatus((status) => !status);
    if (!id) {
      setCurrenCoinid("");
    } else {
      setCurrenCoinid(id);
    }
  };

  useEffect(() => {
    document.title = "Crypto Tracker | Home Page";
  }, []);

  return (
    <div className={`${themeLight === true ? "" : "bg-[#0a1929] text-white"}`}>
      <NavBar themeStatus={themeLight} onSetTheme={onsetThemeHandler} />
      <LiveChart themeStatus={themeLight} onSetTheme={onsetThemeHandler} />
      <CryptoCurrencies
        themeStatus={themeLight}
        onsetModal={onSetModalHandler}
      />
      {modalStatus && (
        <Modal
          themeStatus={themeLight}
          onCoinId={coinId}
          onsetModal={onSetModalHandler}
        />
      )}
    </div>
  );
}

export default App;
