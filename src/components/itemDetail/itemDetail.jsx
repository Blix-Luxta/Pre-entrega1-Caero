import React from 'react';
import { Card } from 'antd';


const { Meta } = Card;

const ItemDetail = ({prod}) => (
  <Card
    style={{ width: 400 }}
    cover={<img alt={product?.description} src={product?.image} />}
  >
    <Meta title={product?.title} description={product?.description} />
  </Card>
);

export default ItemDetail