import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './Components/NavbarComponent';
import HomeComponent from './Components/HomeComponent';
import JobTwoComponent from './Components/JobTwoComponent';
import JobThreeComponent from './Components/JobThreeComponent copy';
import JobFourComponent from './Components/JobFourComponent copy';
import JobFiveComponent from './Components/JobFiveComponent copy';

function App() {
  return (
    <>

      <BrowserRouter>

        <NavbarComponent />

        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="Two" element={<JobTwoComponent />} />
          <Route path="Three" element={<JobThreeComponent />} />
          <Route path="Four" element={<JobFourComponent />} />
          <Route path="Five" element={<JobFiveComponent />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
