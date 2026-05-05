import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostlistPage from "./pages/PostlistPage";
import PostWritePage from "./pages/PostwritePage";
import PostdetailPage from "./pages/PostdetailPage";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts" element={<PostlistPage />} />
        <Route path="/posts/new" element={<PostWritePage />} />
        <Route path="/posts/:postId" element={<PostdetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
