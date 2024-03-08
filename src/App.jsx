import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import "./app.css";
import Home from "./pages/home/Home";
import useSidebarApiCall from "./hooks/useSidebarApiCall";

function App() {
  const {sideData, loading, sideError, fetchData} = useSidebarApiCall()

  console.log(sideData)

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar publicationData={fetchData}/>
        <Home publicationDetails={sideData}/>
      </div>
    </div>
  );
}

export default App;
