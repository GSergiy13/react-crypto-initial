import { Layout, Select, Space, Button } from 'antd';
import { useCrypto } from '../../context/crypto-context';

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  height: 60,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  background: '#fff',
  alignItems: 'center'
  
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

// const options = [
//   {
//     label: 'China',
//     value: 'china',
//     emoji: '🇨🇳',
//     desc: 'China (中国)',
//   },
//   {
//     label: 'USA',
//     value: 'usa',
//     emoji: '🇺🇸',
//     desc: 'USA (美国)',
//   },
//   {
//     label: 'Japan',
//     value: 'japan',
//     emoji: '🇯🇵',
//     desc: 'Japan (日本)',
//   },
//   {
//     label: 'Korea',
//     value: 'korea',
//     emoji: '🇰🇷',
//     desc: 'Korea (韩国)',
//   },
// ];




export default function AppHeader() {
  const {crypto} = useCrypto();

  return(<Layout.Header style={headerStyle}>
      <Select
    mode="multiple"
    style={{ width: '250px' }}
    value="press / to open"
    optionLabelProp="label"
    options={crypto.map(coin => ({
      label: coin.name,
      value: coin.id,
      icon: coin.icon
    }))}

    optionRender={(option) => (
      <Space>
        <img style={{width: '20px'}} src={option.data.icon}  alt={option.data.label} /> 
        {option.data.label}
      </Space>
    )}
  />

    <Button>All select</Button>
  </Layout.Header>)
}