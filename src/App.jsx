import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <main className="w-full bg-black_08">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
