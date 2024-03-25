import {Flex, Typography} from 'antd';

export default function InfoCoin ({coin}) {

  return(
    <Flex align="center">
    <img src={coin.icon} alt={coin.name} style={{width: 40, marginRight: 20}} />

    <Typography.Title level={2} style={{margin: 0}}>
      {
        coin.name
      }
    </Typography.Title>
  </Flex>
  )
}