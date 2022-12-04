import Header from "./components/header";
import Tasks from "./components/Tasks";


function App() {
  
  return (
<div className="App">
   
    {/* passing props   */}
    <div className="container">
      <Header /> 
    <Tasks/>
      </div>
    

    {/* title is props  */}
    
   
    </div>
  );
}

export default App;
