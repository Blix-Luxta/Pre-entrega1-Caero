import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";

function CartWidget() {
  return (
    <>
      <Badge count={5}>
        <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />} />
      </Badge>
    </>
  );
}

export default CartWidget;
