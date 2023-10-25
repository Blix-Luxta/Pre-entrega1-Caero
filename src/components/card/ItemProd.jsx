import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';


const { Meta } = Card;

const ItemProd = ({product}) => (
  <div className="itemprod">
  <Card
    hoverable
    style={{ width: 240, height: 240 }}
    cover={<img alt={product.description} src={product.image} />}
    >
    <Meta title={product.title} description={product.price} />
    <Link  to={`/item/${product.id}`} className="Option">Ver detalle</Link>
  </Card>
    </div>
);

export default ItemProd