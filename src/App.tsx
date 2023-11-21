import { useLocation } from 'react-router-dom';
import FocusLayout from './routes/FocusLayout';
import Layout from './routes/Layout';

const App = () => {
  const regex = /^\/sign-/;
  const currentPage = useLocation().pathname;
  if (regex.test(currentPage)) {
    return <FocusLayout />;
  }
  return <Layout />;
};

export default App;
