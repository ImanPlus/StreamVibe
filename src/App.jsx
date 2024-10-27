import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Spinner } from "flowbite-react";

function GlobalLoadingIndicator() {
  const navigation = useNavigation();
  return navigation.state === "loading" ? (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-900/50 z-50">
      <Spinner color="warning" aria-label="Extra large spinner" size="xl" />
    </div>
  ) : null;
}

function App() {
  return (
    <>
      <Header />
      <main className="w-full bg-black_08">
        <GlobalLoadingIndicator />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
