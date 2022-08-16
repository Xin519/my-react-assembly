import React from 'react'
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;
// 

const menuArray = [
  {
    key: '/home',
    title: 'Home',
    icon: <UserOutlined />,
  }, {
    key: '/table',
    title: 'table/表格',
    icon: <UserOutlined />,
  }, {
    key: '/Scheduling',
    title: 'Scheduling/排班组件',
    icon: <UserOutlined />,
    
  }, {
    key: '/paging',
    title: 'paging/分页',
    icon: <UserOutlined />,
    
  }, {
    key: '/Checkbox',
    title: 'Checkbox',
    icon: <UserOutlined />,
    
  }
]

// const iconList = {
//   '/home': <UserOutlined />
// }

export default function SideNenu({ collapsed }) {

  const navigate = useNavigate(); // 路由跳转hook
  const myUseParams = useParams()['*']
  const myUseParamsParent = myUseParams.split('/')[0]

  const historyTo = route => navigate(route)

  const menuArrayFn = (menuArray = []) => {
    return menuArray.map(item => {
      if (item.children?.length > 0) {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {
              menuArrayFn(item.children)
            }
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key} icon={item.icon} onClick={() => historyTo(item.key)}>
          {item.title}
        </Menu.Item>
      )

    })
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className='leftNav'>
        <div className="logo" style={{ color: '#f5f5f5', lineHeight: '32px', textAlign: 'center' }} > {
          !collapsed ? '' : ''
        } </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Menu theme="dark" mode="inline" selectedKeys={[`/${myUseParams}`]} defaultOpenKeys={[`/${myUseParamsParent}`]}>
            {
              menuArrayFn(menuArray)
            }
          </Menu>
        </div>

      </div>

    </Sider>
  )
}


