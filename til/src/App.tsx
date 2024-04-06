import React, { useEffect } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import TILList from "./components/til-list/TILList";
import Header from "./components/header/Header";
import PlusButton from "./components/plus-button/PlusButton";
import Modal from "./components/modal/Modal";
import { TILModel } from "./models/tils";

function App() {
  const [tils, setTils] = React.useState<TILModel[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isBeReady, setIsBeReady] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/db.json");
      const data : TILModel[]= await response.json();
      console.log(data)
      setTils(data);
    };

    fetchData();
  }, []);

  const onPlusButtonClicked = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <Header />
      {tils && tils.length > 0 && <TILList tils={tils} />}
      {isBeReady && <PlusButton onClick={onPlusButtonClicked} />}
      {isBeReady && (
        <Modal
          title="Create new post"
          isOpen={isModalOpen}
          onClose={onPlusButtonClicked}
        >
          <div>Modal Content</div>
        </Modal>
      )}
    </div>
  );
}

export default App;
