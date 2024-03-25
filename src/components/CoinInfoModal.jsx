import { Tag, Typography, Flex, Divider  } from "antd"
import InfoCoin from "./infoCoin"

export default function CoinInfoModal ({coin}) {
  return(
    <>
      <InfoCoin coin={coin} />

      <Divider />

      <Typography.Paragraph>
        <Typography.Text strong>1 hour: </Typography.Text>

        <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}</Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>1 day: </Typography.Text>

        <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d}</Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>1 week: </Typography.Text>

        <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w}</Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price: </Typography.Text>

        {coin.price.toFixed(2)}$
      </Typography.Paragraph>

      <Typography.Paragraph>
        <Typography.Text strong>Price BTC: </Typography.Text>

        {coin.priceBtc}
      </Typography.Paragraph>

      <Typography.Paragraph>
        <Typography.Text strong>Market Cap: </Typography.Text>

        {coin.marketCap}
      </Typography.Paragraph>

      <Typography.Paragraph>
        <Typography.Text strong>Contract Address: </Typography.Text>

        {coin.contractAddress ? coin.contractAddress : 'no contact address'}
      </Typography.Paragraph>
    </>
  )
}