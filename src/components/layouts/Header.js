import { Header } from '@rneui/themed';

const HeaderApp = () => {
  return (
    <Header
        backgroundColor='#2c3e50'
        centerComponent={{
            text: 'Movies App',
            style: { color: '#fff', fontSize: 18 }
        }}
    />
  )
};

export default HeaderApp;