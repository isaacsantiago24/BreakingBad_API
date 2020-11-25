import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import axios from "axios";

///////////////////////////////////////////////////////

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //true by default then after its fetched it will be false
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data); //will give us the data form the api
      setItems(result.data);
      setIsLoading(false); //now we have the data so its false
    };
    fetchItems(); //calling fetch items
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
