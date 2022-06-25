import { Layout } from 'antd';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <Layout className='container'>
      <HeaderComponent />
      <MainComponent />
    </Layout>
  );
}

export default App;
