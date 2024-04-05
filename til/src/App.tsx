import React, { useEffect } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import dayjs from "dayjs";
import TILList from "./components/til-list/TILList";
import Header from "./components/header/Header";


function App() {
  const [tils, setTils] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/db.json");
      const data = await response.json();
      setTils(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {tils && tils.length > 0 && <TILList tils={tils} />}
      {/* Content Container*/}
      {/* <div className="bg-gray-200 p-4 flex justify-center items-center flex-col"> */}
        {/* {
          tils.map((til) => (
            <Card
             // @ts-ignore
              key={til.id}
              // @ts-ignore
              title={til.title}
              // @ts-ignore
              description={til.text}
              // @ts-ignore
              tags={til.tags}
              // @ts-ignore
              date={til.timestamp}
            />
          ))
        } */}
      {/* </div> */}
    </div>
  );
}

export default App;
