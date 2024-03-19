import { useRef, useState } from "react"
import { useForm } from "antd/es/form/Form";

import { Select, Space, Form, InputNumber, Button, Flex, Typography, Divider, DatePicker, Result } from "antd";

import {useCrypto} from '../context/crypto-context'

export default function AddAssetFrom ({onClose}) {
  const [form] = useForm();
  const {crypto, setNewAssets} = useCrypto();
  const [resultState, setResultState] = useState(false);
  const [coin, setCoin] = useState(null);
  const afterStateDataForm = useRef();

  if(!coin) {
    return (
      <Select
      style={{ width: '100%' }}
      onSelect={(v) => setCoin(crypto.find(elm => elm.id === v))}
      placeholder="Select coin"
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
    )
  }

  if(resultState) {
    return(
      <Result
          status="success"
          title="New Asset Adden"
          subTitle={`Added ${afterStateDataForm.current.amount} of ${coin.name} by price ${afterStateDataForm.current.price}`}
          extra={[
            <Button key="console" type="primary" onClick={onClose}>close</Button>,
          ]}
        />
    )
  }

  

  function onFinish(vlu) {
    const newAsset = {
      id: coin.id,
      amount: vlu.amount,
      price: vlu.price,
      date: vlu.date?.$d ?? new Date()
    }
    afterStateDataForm.current = newAsset

    setNewAssets(newAsset)

    setResultState(true)
  }

  
  function hendelChangeAmount(value) {
    const price = +form.getFieldValue('price');

     form.setFieldsValue({
      total: (price * value).toFixed(2)
    })}
  
    function hendelChangePrice(value) { 
      const amount = +form.getFieldValue('amount');

      form.setFieldsValue({
       total: (amount * value).toFixed(2) 
     })}
   


  const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} in not valid number'
    }, 
    number: {
      range: '${label} must be between ${min} and ${max}'
    }
  };

  return(
<Form
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 10,
    }}
    style={{
      maxWidth: '600',
    }}
    initialValues={{
      price: +coin.price.toFixed(2)
    }}
    onFinish={onFinish}
    validateMessages={validateMessages}
    form={form}
  >

    <Flex align="center">
      <img src={coin.icon} alt={coin.name} style={{width: 40, marginRight: 20}} />

      <Typography.Title level={2} style={{margin: 0}}>
        {
          coin.name
        }
      </Typography.Title>
    </Flex>

    <Divider />

    <Form.Item 
      label="Amount "
      name="amount"
      rules={[
        {
          required: true,
          type: 'number',
          min: 0,
        },
      ]}

    >

    <InputNumber style={{width: '100%'}} onChange={hendelChangeAmount}  placeholder="Enter coin amount"/>
    </Form.Item>

    <Form.Item
      label="Price"
      name="price">

      <InputNumber onChange={hendelChangePrice} style={{width: '100%'}}  />
    </Form.Item>

    <Form.Item
      label="Date && Time"
      name="date-time">

      <DatePicker showTime  style={{width: '100%'}} />
    </Form.Item>

    <Form.Item
      label="Total"
      name="total">

      <InputNumber disabled style={{width: '100%'}}  />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" >
        Add asset
      </Button>
    </Form.Item>
  </Form>
  )
}