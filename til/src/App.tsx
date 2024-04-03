import React, { useEffect } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import Card from "./Card";
import dayjs from "dayjs";


function App() {
  const [index, setIndex] = React.useState([]);
  const [tils, setTils] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/index.json");
      const data = await response.json();
      setIndex(data);
      // fileEntry dictionary is {file: string, title: string}
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchTils = async () => {
      const promises = index.map(async (entry) => {

        // @ts-ignore
        const response = await fetch(entry.file);
        const text = await response.text();
        
        // parse notes/id-timestamp-title-[tag1,tag2,..].md into id, timestamp, title, tags
        // @ts-ignore
        const fileName = entry.file.replace("notes/", "");
        
        const [, id, timestamp, title, tagsString] = fileName.match(/^(\d+)-(\d+)-([^[]+)-\[(.*)\]\.md$/);
        
        // @ts-ignore
        const tags = tagsString.split(",").map((tag) => tag.trim()).filter(Boolean);
        
        return {
          // @ts-ignore
          id,
          title: title.toUpperCase().replace(/_/g, " "),
          // dayjs parse 020420241330
          timestamp: dayjs(timestamp, "DDMMYYYYHHmm").format("YYYY-MM-DD HH:mm"),
          text,
          tags
        }
      });

      const tils = await Promise.all(promises);
      
      tils.sort((a, b) => dayjs(b.timestamp).unix() - dayjs(a.timestamp).unix());
      // @ts-ignore
      setTils(tils);
    };

    fetchTils();
  }, [index]);



  console.log(tils)
  return (
    <div className="App">
      {/* Content Container*/}
      <div className="bg-gray-200 p-4 flex justify-center items-center flex-col">
        {
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
        }
      </div>
    </div>
  );
}

export default App;
