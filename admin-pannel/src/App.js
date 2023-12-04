import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import { Home } from "./pages/home/Home";
const  App = () => {
  return (
    <>
    
    <Topbar/>
    <div className="container">
      <Sidebar/>
      <Home/>
    </div>
      
    </>
  );
}

export default App;
