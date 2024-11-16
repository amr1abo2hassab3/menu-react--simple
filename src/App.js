import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import Items from "./components/items";

import data from "./api/Data";
import { useState } from "react";

function App() {
  const [ItemsApi, setItemsApi] = useState(data);
  let AllCategory = Array.from(new Set(data.map((i) => i.category)));
  AllCategory.unshift("الكل");
  //// <<<  contains  to array more than one way >>>  ////
  // AllCategory = [...AllCategory];
  // AllCategory = Array.from(AllCategory);

  // this function filter data to category by btn
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsApi(data);
    } else {
      const dataFilter = data.filter((item) => item.category === cat);
      setItemsApi(dataFilter);
    }
  };

  // this function search on click input by title
  const SearchByTitle = (word) => {
    if (word !== "") {
      const dataSerach = data.filter((s) => word === s.title);
      setItemsApi(dataSerach);
    }
  };
  // "This function searches while typing
  const SearchInWrite = (word) => {
    const dataSerachOnWrite = data.filter((el) => el.title.includes(word));
    setItemsApi(dataSerachOnWrite);
  };

  return (
    <div className=" color-body">
      <NavBar fnSerach={SearchByTitle} fnOnWrite={SearchInWrite} />
      <Container>
        <Header />
        <Category propCategory={AllCategory} fnCat={filterByCategory} />
        <Items elements={ItemsApi} />
      </Container>
    </div>
  );
}

export default App;
