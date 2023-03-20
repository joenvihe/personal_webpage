import {Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import resumeData from './resumeData';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Header resumeData={resumeData} navigate={navigate}/>
        <Routes>
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/" element={<About resumeData={resumeData} />} />
        </Routes>
        <Footer resumeData={resumeData}/>
      </div>
    </div>
  );
}


function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;