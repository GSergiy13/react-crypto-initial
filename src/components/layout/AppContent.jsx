import { Layout, Typography } from "antd";
import { useCrypto } from "../../context/crypto-context";
import PortfolioChart from "./PortfolioChart";
import AssetsTable from "./AssetsTable";

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  color: '#fff',
  backgroundColor: '#001529',
};


export default function AppContent () {
  const {assets, crypto} = useCrypto();

  const cryptoPrice = crypto.reduce((obj, v) => {
    obj[v.id] = v.price
    return obj;
  }, {})


  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{color: '#fff', textAlign: 'left', marginTop: '1rem'}}>
      Total Summ Wallet: {' '}
      {assets
        .map((elem) =>  elem.amount * cryptoPrice[elem.id])
        .reduce((prevVal, currentVal) => currentVal += prevVal, 0)
        .toFixed(2)}$
      </Typography.Title>

      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  )
}
