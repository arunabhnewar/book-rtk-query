import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books/add' element={<Add />} />
            <Route path='/books/edit/:bookId' element={<Edit />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
