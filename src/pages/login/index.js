import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link, withRouter } from 'react-router-dom'
import { Row, Col } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signIn } from 'Root/store/actions/login'

import './style.scss'

import Shell from 'Root/components/shell'
import Meta from 'Root/components/meta'

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      password: ""
    }
  }

  render() {
    const { userName, password } = this.state
    return (
      <div styleName="login-container">
        <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <div styleName="form-box">
                <h1 className="display-4 text-center mb-3">
                  Sign in
                </h1>
                <p className="text-muted text-center mb-5">
                  Free access to our dashboard.
                </p>
                <div className="form-group">
                  <label>Login Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="login name"
                    value={userName}
                    onChange={(e) => {
                      this.setState({userName: e.target.value})
                    }}
                    />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="password"
                    value={password}
                    onChange={(e) => {
                      this.setState({password: e.target.value})
                    }}
                    />
                </div>

                <button className="btn btn-lg btn-block btn-primary mb-3" onClick={this.login.bind(this)}>
                  Sign in
                </button>
              </div>
            </Col>
            <Col className="gutter-row" span={16}>
              <div styleName="bg-cover">
                
              </div>
            </Col>
        </Row>
      </div>
    )
  }
  async login() {
    const { userName, password } = this.state
    const { signIn } = this.props
    // console.log(userName, password)
    let [err, success] = await signIn({ userName, password })

    if (success) {
      window.location.href = '/home_test'
    }
  }
}

Login.propTypes = {
  signIn: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: bindActionCreators(signIn, dispatch)
  }
}

Login = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)

export default Shell(Login)
