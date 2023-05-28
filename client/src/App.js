import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import { Provider } from "react-redux";
import store from "./lib/store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
