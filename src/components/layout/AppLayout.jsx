import { useContext } from 'react';

import { Layout, Spin } from 'antd';

import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';

import CryptoContext from '../../context/crypto-context';
import { Route, Routes } from 'react-router-dom';
import AppAbout from './AppAbout';

export default function AppLayout () {
  const { loading } = useContext(CryptoContext);

  if(loading) {
    return  <Spin fullscreen />
  }

  return (
    <Layout>
      
    <AppHeader /> 

 

    <Routes>
      <Route path="/" element={
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      } />

      <Route path="/about" element={<AppAbout />}/>

      <Route path="*" element={'NOT PAGE'}/>
    </Routes>

      
    </Layout>
  )
}


   {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="*" element={<div>NOT page</div>} />
      </Routes> */}