import { BrowserRouter as Router, Route, Routes, Link } from "react-router";
import TableContent from "./TableContent";
import Home from "./Home";

function App() {
  
  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/productname",
    },
  ];

  return (
    <>
      <Router>
        <header>
          <nav className="max-w-full px-6 bg-blue-300 py-5">
            <ul className="no-underlines flex gap-10">
              {menuItems.map((item) => (
                <Link to={item.link}>
                  <li className="text-sm">{item.name}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productname" element={<TableContent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
