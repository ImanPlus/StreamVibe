import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <h1 className="text-3xl font-bold underline">Home Page!</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
