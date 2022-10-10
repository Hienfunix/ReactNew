import { Route } from "react-router-dom";
import Products from "./pages/Products"
import Welcome from "./pages/Welcome"
function App() {
  return (
    <div>
    <Route path="/welcome">
      <Welcome />
    </Route>
    <Route path="/Products">
      <Products />
    </Route>
    </div>
  );
}

export default App;
