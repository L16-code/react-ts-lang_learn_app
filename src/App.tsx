import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header.tsx"
import { Suspense, lazy } from "react";
import Loader from "./components/Loader.tsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.tsx";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store.ts";
const Home=lazy(()=>import("./components/Home.tsx"))
const Learning=lazy(()=>import("./components/Learning.tsx"));
const Quiz=lazy(()=>import("./components/Quiz.tsx"))
const Result=lazy(()=>import("./components/Result.tsx"));
const Login=lazy(()=>import("./components/Login.tsx"));
const App = () => {
  // const {isAuthenticated}=useSelector((state:))
  const isAuthenticated=useSelector((state:RootState) => state.root.isAuthenticated)
  console.log(isAuthenticated)
  return (
  <Router>
    <Header />
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route  path="/" element={<Home />}/>
      {/* <Route   element={ <ProtectedRoutes isAuthenticated={isAuthenticated} />} /> */}
      <Route path="/learn" element={ <ProtectedRoutes isAuthenticated={isAuthenticated}>
      <Learning />
      </ProtectedRoutes>} />
      {/* </Route> */}
      {/* <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated}/>}/>
      <Route path="/learn" element={<Learning />} />
      </Route> */}
      <Route  path="/quiz" element={ <ProtectedRoutes isAuthenticated={isAuthenticated}>
      <Quiz />
      </ProtectedRoutes>} />
      <Route  path="/result" element={ <ProtectedRoutes isAuthenticated={isAuthenticated}>
      <Result />
      </ProtectedRoutes>} />
      <Route  path="/login" element={<Login />}/>

    </Routes>
    </Suspense>
  </Router>
  )
};

export default App;
