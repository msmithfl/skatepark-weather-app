import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Feed from "./components/Feed";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen relative bg-gradient-to-br from-cyan-700 to-blue-700 text-white">
      <Header />
      <SearchForm />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
