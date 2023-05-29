import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { AuthCheck, FirebaseAppProvider } from "reactfire";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "firebase/auth";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import Pose from "./components/Pose";
import Profile from "./components/Profile";
import Stats from "./components/Stats";

function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyBtApKLNL1W4RKF_MKxs0poOvuDtWl-qNk",
    authDomain: "yogarefine-85b64.firebaseapp.com",
    projectId: "yogarefine-85b64",
    storageBucket: "yogarefine-85b64.appspot.com",
    messagingSenderId: "718190495063",
    appId: "1:718190495063:web:79f8542c664d7403596a12",
    measurementId: "G-0C54HEC4CL"
  };

  return (
    <div className={"main"}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <AuthCheck fallback={<Login />}>
          <Router>
            <Header />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/stats" element={<Stats />}></Route>
                  <Route path="/profile" element={<Profile />}></Route>
                  <Route path="/pose" element={<Pose poseID={"4XIRMFpmKmUiFNjWgUrr"}/>}></Route>
                </Routes>
              </div>
          </Router>
        </AuthCheck>
      </FirebaseAppProvider>
    </div>
  );
}

export default App;
