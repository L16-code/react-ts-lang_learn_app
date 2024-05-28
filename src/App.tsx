import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header.tsx"
import { Suspense, lazy } from "react";
import Loader from "./components/Loader.tsx";
const Home=lazy(()=>import("./components/Home.tsx"))
const Learning=lazy(()=>import("./components/Learning.tsx"));
const Quiz=lazy(()=>import("./components/Quiz.tsx"))
const Result=lazy(()=>import("./components/Result.tsx"));
const Login=lazy(()=>import("./components/Login.tsx"));
const App = () => {
  return (
  <Router>
    <Header />
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/learn" element={<Learning />}/>
      <Route  path="/quiz" element={<Quiz />}/>
      <Route  path="/result" element={<Result />}/>
      <Route  path="/login" element={<Login />}/>

    </Routes>
    </Suspense>
  </Router>
  )
};

export default App;
