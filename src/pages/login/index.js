import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link, withRouter } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signIn } from 'Root/store/actions/user'

import './style.scss'

import Shell from 'Root/components/shell'
import Meta from 'Root/components/meta'

export class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.submit = this.submit.bind(this)
  }

  async submit(event) {
    event.preventDefault()

    const { nickname } = this.refs
    const { signIn } = this.props

    if (!nickname.value) {
      nickname.focus()
      return false
    }

    let [err, success] = await signIn({ nickname: nickname.value })

    if (success) {
      window.location.href = '/'
    }

    return false
  }

  render() {
    return (
      <div  className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6 my-5">
                
            
            <h1 className="display-4 text-center mb-3">
              登录
            </h1>  
            
            <form>

              <div className="form-group">

                
                <label>
                  用户名
                </label>

                
                <input type="email" className="form-control" placeholder="请输入用户名"/>

              </div>

              
              <div className="form-group">

                
                <label>
                  密码
                </label>

                <div className="input-group input-group-merge">

                  
                  <input type="password" className="form-control form-control-appended" placeholder="请输入密码"/>

                  
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fe fe-eye"></i>
                    </span>
                  </div>

                </div>
              </div>
              <button className="btn btn-lg btn-block btn-primary mb-3">
                登录
              </button>
            </form>

          </div>
          <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
            
            
            <div className="bg-cover vh-100 mt-n1 mr-n3"></div>

          </div>
        </div>
      </div>
    )
  }
}

SignIn.propTypes = {
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

SignIn = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn)
)

export default Shell(SignIn)
