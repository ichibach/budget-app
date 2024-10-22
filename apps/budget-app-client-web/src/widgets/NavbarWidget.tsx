import { AppstoreOutlined, BarChartOutlined, CalendarOutlined, FolderOutlined, LineChartOutlined, LinkOutlined, LogoutOutlined, MailOutlined, SettingOutlined, WalletOutlined } from "@ant-design/icons";
import { Divider, Flex, GetProp, Menu, MenuProps } from "antd"


type MenuItem = GetProp<MenuProps, 'items'>[number];

const items: MenuItem[] = [
  {
    type: 'divider'
  },
  {
    key: '1',
    icon: <WalletOutlined />,
    label: 'Accounts',
  },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: 'Transactions',
  },
  {
    key: 'sub1',
    label: 'Categories',
    icon: <AppstoreOutlined />
  },
  {
    key: 'sub3',
    label: 'Budgets',
    icon: <FolderOutlined />
  },
  {
    key: 'sub2',
    label: 'Dashboard',
    icon: <BarChartOutlined />
  },
  {
    key: 'sub4',
    label: 'Insights',
    icon: <LineChartOutlined />
  },
  {
    type: 'divider'
  },
  {
    key: 'sub22',
    label: 'Settings',
    icon: <SettingOutlined />
  },
  {
    key: 'logout',
    label: 'Logout',
    icon: <LogoutOutlined />
  },
];



export const NavbarWidget = () => {



  return (
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode={'inline'}
      
      // theme={theme}
      items={items}
    />
  )
}