import AppLayout from './components/layout/AppLayout.jsx'

import {CryptoContextProvader} from './context/crypto-context.jsx'

export default function App() {
  return (
    <CryptoContextProvader>
      <AppLayout></AppLayout>
    </CryptoContextProvader>
  )
}