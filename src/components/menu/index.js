import React, { Component } from 'react'

import './style.scss'
export default class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { text = '正在加载中...' } = this.props
    return <div className="menu-container">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="index.html">
            <img src="assets/img/logo.svg" class="navbar-brand-img 
            mx-auto" alt="..."/>
          </a>
        </div>
      </div>
  }
}
