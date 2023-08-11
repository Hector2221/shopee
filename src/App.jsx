import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Page404, PgElectronicos } from "./Pages";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Navbar } from "./layouts";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/Electronicos" element={<PgElectronicos />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
