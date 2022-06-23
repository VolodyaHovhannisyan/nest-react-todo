import { Layout, Typography  } from 'antd';
const { Header} = Layout;
const { Title } = Typography;


const HeaderComponent = () => {
  return (
    <Header className='header'>
        <Title className='title'>Todo-list app</Title> 
    </Header>
  )
}

export default HeaderComponent