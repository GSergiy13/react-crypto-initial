import { Layout, Select, Space, Button, Modal, Drawer } from 'antd';
import { useCrypto } from '../../context/crypto-context';
import { useEffect, useState } from 'react';
import CoinInfoModal from '../coinInfoModal';
import AddAssetFrom from '../AddAssetFrom';
import AppMenu from './AppMenu';


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

export default function AppHeader() {
  const {crypto} = useCrypto();
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [coin, setCoin] = useState(null);
  const [select, setSelect] = useState(false);

  function hendelSelect (value) {
    setCoin((prev => crypto.find(coin =>  coin.id === value)))

    setModal(true)
  }

  useEffect(() => {
    const keypress = (event) => {
      if(event.key === '/') {
        setSelect((prev) => !prev)
      }
    };

    document.addEventListener('keypress',keypress);

    return () => document.removeEventListener('keypress',keypress);
  }, [])


  return(<Layout.Header style={headerStyle}>
      <Select
    open={select}
    onClick={() => setSelect(prev => !prev)}
    style={{ width: 250 }}
    onSelect={hendelSelect}
    value="press / to open"
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

  <AppMenu />

  <Modal open={modal} onCancel={() => setModal(false)} footer={null}>
      <CoinInfoModal coin={coin} />
  </Modal>

  <Drawer title="Basic Drawer" onClose={() => setDrawer(false)} open={drawer} destroyOnClose>
    <AddAssetFrom onClose={() => setDrawer(false)} />
  </Drawer>

    <Button onClick={() => setDrawer(true)}>All select</Button>
  </Layout.Header>)
}