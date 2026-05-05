import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostlistPage from "./pages/PostlistPage";
import PostdetailPage from "./pages/PostdetailPage";
// import Header from "./components/Header";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/posts" element={<PostlistPage />} />
        <Route path="/posts/:postId" element={<PostdetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
