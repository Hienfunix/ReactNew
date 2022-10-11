import { Route } from "react-router-dom";
import Products from "./pages/Products"
import Welcome from "./pages/Welcome"
import MainHeader from "./Components/MainHeader";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/Products">
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;
