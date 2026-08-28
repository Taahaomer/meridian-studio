import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import StudioPage from "./pages/StudioPage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AddEmployee from "./components/AddEmployee.jsx";

export default function App() {
  const [page, setPage] = useState("Home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  const pages = {
    Home: <HomePage setPage={setPage} />,
    Studio: <StudioPage setPage={setPage} />,
    Work: <WorkPage setPage={setPage} />,
    Contact: <ContactPage />,
    Login: <LoginPage setPage={setPage}/>,
    Admin: <AdminPage n/>,

  };

  return (
    <div className="ms-root">
      <Nav page={page} setPage={setPage} dark={page === "Home"} />
      {pages[page]}
      <Footer setPage={setPage} />
    </div>
  );
}
