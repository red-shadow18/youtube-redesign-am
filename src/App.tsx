import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PageContents from './components/PageContents';

const App = () => {
  return (
    <BrowserRouter>
  
    <div>
      <Header />
      <Sidebar />
     <PageContents/>
    </div>
    </BrowserRouter>
  );
};

export default App;
