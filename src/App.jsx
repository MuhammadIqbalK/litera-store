import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Header />

        <div className="flex">
          <h1 className="text-2xl text-center">this is the body</h1>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
