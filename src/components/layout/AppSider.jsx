import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Layout, Card, Statistic, List, Typography, Tag } from "antd";
import { useEffect, useState } from 'react';
import { fakeFetchCrypto, fetchAssets } from '../../api.js';

import {percentDifference, capitalize} from '../../utills.js'

const siderStyle = {
  padding: '1rem',
};

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


export default function AppSider () {
  const [loder, setLoader] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
     async function preload() {
      setLoader(true)

      const { result } = await fakeFetchCrypto();
      const assets = await fetchAssets();

      setCrypto(result)
      setAssets(assets.map(asset => {
        const coin = result.find((c) => c.id === asset.id)


        return {
          grow: asset.price < coin.price,
          growPercent: percentDifference(asset.price, coin.price),
          totalAmount: asset.amount * coin.price,
          totalProfit:  asset.amount * coin.price - asset.amount * asset.price ,
          ...asset
        }
      }))
      setLoader(false)
    }

    preload();
  }, [])  

  return(
    <Layout.Sider width="25%" style={siderStyle}>
      {
        assets.map( (asset) => (          

          // console.log(asset)
        <Card key={asset.id} style={{marginBottom: '1rem'}}>
            <Statistic 
              title={capitalize(asset.id)}
              value={asset.totalAmount}
              precision={2}
              valueStyle={{
                color: (asset.grow) ? '#3f8600' : '#cf1322',
              }}
              prefix={(asset.grow) ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              suffix="$"
            />  

            <List
              size='small'

              dataSource={[
                {
                  title: 'Total Profit',
                  value: asset.totalProfit,
                  withTag: true,
                },
                {
                  title: 'Asset Amount',
                  value: asset.amount,
                  isPlain: true,
                },
                {
                  title: 'Defference',
                  value: asset.growPercent
                }
              ]}

              renderItem={(item) => (
                <List.Item>
                  {/* <Typography.Text mark>[ITEM]</Typography.Text> {item}
                   */}

                   <span>{item.title}</span>
                   <span>
                    {item.withTag && <Tag color={asset.grow ? 'green' : 'red'} style={{marginRight: '0.5rem'}}>{asset.growPercent}%</Tag>}
                    {item.isPlain && item.value}
                    {!item.isPlain && <Typography.Text type={(asset.grow) ? 'success' : 'danger'}>{item.value.toFixed(2)}$</Typography.Text>}
                   </span>
                </List.Item>
              )}

            />
          </Card>
        ))
      }
    </Layout.Sider>
  )
}