import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import './style.scss'

const { SubMenu } = Menu
export default class MenuClass extends Component {
  constructor(props) {
    super(props)
  }

  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

  state = {
    openKeys: ['sub1'],
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      })
    }
  }

  render() {
    return (
      <div styleName="menu-container">
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 223, borderRight: 0, borderTop: 0 }}
        >
          <a styleName="logo-box" href="index.html">
            <img src="./assets/img/logo.svg" alt="..."/>
          </a>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon styleName="menu-icon" type="mail" />
                <span>优惠券</span>
              </span>
            }
          >
            <Menu.Item key="1">优惠券列表</Menu.Item>
            <Menu.Item key="2">创建优惠券</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon styleName="menu-icon" type="appstore" />
                <span>活动</span>
              </span>
            }
          >
            <Menu.Item key="5">活动列表</Menu.Item>
            <Menu.Item key="6">创建活动规则</Menu.Item>
            <SubMenu key="sub3" title="通知">
              <Menu.Item key="7">活动通知列表</Menu.Item>
              <Menu.Item key="8">弹框创建</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
