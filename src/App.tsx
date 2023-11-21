import { useLocation } from 'react-router-dom';
import FocusLayout from './routes/FocusLayout';
import HeaderFooterLayout from './routes/HeaderFooterLayout';

const App = () => {
  const regex = /^\/sign-/;
  const currentPage = useLocation().pathname;
  if (regex.test(currentPage)) {
    return <FocusLayout />;
  }
  return <HeaderFooterLayout />;
};

export default App;
