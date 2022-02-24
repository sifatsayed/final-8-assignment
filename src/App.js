import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import PlayerDetail from "./Components/PlayerDetail/PlayerDetail";

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/home"element={<Home/>}/>
          <Route path="/playerdetail/:userId" element={<PlayerDetail/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
