// File: src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./utils/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-base text-base transition-all duration-500">
          <Header />
          <main className="pt-24 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
