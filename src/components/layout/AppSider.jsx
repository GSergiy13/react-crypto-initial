import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Layout, Card, Statistic, List, Typography, Tag } from "antd";
import { useContext } from 'react';


import {capitalize} from '../../utills.js'

import CryptoContext from '../../context/crypto-context.jsx';

const siderStyle = {
  padding: '1rem',
};

export default function AppSider () {
  const {assets} = useContext(CryptoContext);
  console.log(CryptoContext);

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