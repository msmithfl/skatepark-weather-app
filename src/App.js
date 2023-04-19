import Header from "./components/Header";
import Feed from "./components/Feed";
import Search from "./components/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    console.log(lat);
    console.log(lon);
  };

  return (
    <>
      <Search onSearchChange={handleOnSearchChange} />
      <Header />
      <Feed />
    </>
  );
}

export default App;
