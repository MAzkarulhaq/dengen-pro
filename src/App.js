import "./App.css";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
import Home from "./Home";
import { useState } from "react";
import Privacy from "./Privacy";
import Disclaimer from "./Disclamar";
import { Password } from "./Password";
import Terms from "./Terms";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [connecctstatus, setConnectedstatus] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const websitePassword = "alphaaccess";
  return (
    // <>
    //   <div>
    //     {websitePassword === userPassword ? (

    //     ) : (
    //       <Password setUserPassword={setUserPassword} />
    //     )}
    //   </div>
    // </>
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="App">
                <Hero connecctstatus={connecctstatus} />
                <div className="homewrapper py-5">
                  <Home />
                  <FAQ />
                </div>
                <Footer />
              </div>
            }
          ></Route>
          <Route exact path="/Terms" element={<Terms />}></Route>
          <Route exact path="/Privacy" element={<Privacy />}></Route>
          <Route exact path="/Disclaimer" element={<Disclaimer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
