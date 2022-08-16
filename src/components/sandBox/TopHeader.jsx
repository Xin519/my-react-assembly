import React from 'react'
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import {
  UserOutlined
} from '@ant-design/icons';

const { Header } = Layout;


export default function TopHeader() {

  const menu = (
    <Menu>
      <Menu.Item>
        超级管理员
      </Menu.Item>
      <Menu.Item danger>退出登录</Menu.Item>
    </Menu>
  );

  return (
    <Header className="site-layout-background" style={{ padding: 0, paddingRight: 15 }}>
      
      <div style={{ float: 'right' }}>
        <span>欢迎 张老师 &nbsp;</span>
        <Dropdown overlay={menu}>
          <Avatar size="large" icon={<UserOutlined />} />
          {/* <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Hover me <DownOutlined />
          </a> */}
        </Dropdown>
      </div>
    </Header>
  )
}
