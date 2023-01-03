import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/DashboardHome/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Admin/Admin";
import Supervisors from "./components/Supervisors/Supervisors";
import Students from "./components/Students/Students";
import Projects from "./components/Projects/Projects";
import PreferenceList from "./components/PreferenceList/PreferenceList";
import PreferenceDescription from "./components/PreferenceDescription/PreferenceDescription";
import Settings from "./components/Settings/Settings";
import Support from "./components/Support/Support";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}>
            {/* Main menu */}
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="admin" element={<Admin/>}/>
            <Route path="supervisors" element={<Supervisors/>}/>
            <Route path="students" element={<Students/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="preference-list" element={<PreferenceList/>}/>
            <Route path="preference-description" element={<PreferenceDescription/>}/>
            
            {/* Preferences */}
            <Route path="settings" element={<Settings/>}/>
            <Route path="support" element={<Support/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
