import { Table } from 'antd';
import { useCrypto } from '../../context/crypto-context';

const columns = [
  {
    title: 'Crypto Name',
    dataIndex: 'name',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'TotalAmount',
    dataIndex: 'totalAmount',
  },
  // {
  //   title: 'Date buy',
  //   dataIndex: 'date',
  // },
];

export default function AssetsTable() {
  const {assets} = useCrypto();

  const data = assets.map(elem => {
    return {
      key: elem.id,
      name: elem.name,
      amount: elem.amount,
      price: elem.price,
      totalAmount: `${elem.totalAmount.toFixed(2)}$`,
      // date: elem.date
    }
  })

  return <Table style={{marginTop: '1rem'}} pagination={false} columns={columns} dataSource={data}  />
}