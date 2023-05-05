import "./App.css";
import { useState } from "react";


import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import SelectedBeast from "./Components/SelectedBeast/SelectedBeast";
import data from "./data.json";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [beastModal, setBeastModal] = useState({});
  const [beastData, setBeastData] = useState(data);

  function handleModal(beast) {
    setShowModal(!showModal);
    setBeastModal(beast);
  }

  function handleFilter(event) {
    const numHorns = parseInt(event.target.value);
    const myFilteredBeasts = data.filter((beast) => beast.horns === numHorns);

    event.target.value === "" ? setBeastData(data) : setBeastData(myFilteredBeasts);
  }

  return (
    <div className="App">
      <Header handleFilter={handleFilter} />
      <Main handleModal={handleModal} beastData={beastData} />
      {showModal && <SelectedBeast beastModal={beastModal} handleModal={handleModal} />}
      <Footer />
    </div>
  );
}

export default App;