import "./App.css";
import { useState } from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import SelectedBeast from "./Components/SelectedBeast/SelectedBeast";

function App() {
  // const [theme, setTheme] = useState("light");
  const [showModal, setShowModal] = useState(false);
  const [beastModal, setBeastModal] = useState({});

  // function handleTheme() {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   }else {
  //     setTheme("light");
  //   }
  // }
  function handleModal(beast) {
    setShowModal(!showModal);
    setBeastModal(beast);
  }

  return (
    
    <div className="App">
      <Header />
      <Main handleModal={handleModal} />
      {showModal && <SelectedBeast beastModal={beastModal} handleModal={handleModal} />}
      <Footer />
    </div>
  );
}

export default App;