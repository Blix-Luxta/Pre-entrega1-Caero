import { DownOutlined} from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";
import items from "../dropdown/DropDown";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <div>
        <h1>Allegro</h1>
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Productos
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      
      <space>
      <Button type="link">
          Link
        </Button>
      </space>
      <space>
      <Button type="link">Contacto</Button>
      </space>
      <CartWidget/>
    </div>
  );
}

export default NavBar