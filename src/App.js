import './App.css';
import Weather from "./conponents/Weather/Weather";
import Header from "./conponents/Header/Header";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className={'container'}>

        <Header />
        <Routes>
            <Route path={"/"}>
                <Route index element={<Navigate to={"/weather"} />} />
                <Route path={"/weather"} element={<Weather/>} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
