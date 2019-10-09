import React from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// 壳组件
import Shell from 'Root/components/shell'
import Meta from 'Root/components/meta'
import PostsList from 'Root/components/posts/list'


class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Meta title="首页" />

        <PostsList
          id={'home'}
          filter={{
            sort_by: 'create_at',
            deleted: false,
            weaken: false
          }}
        />
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

Home = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
)

export default Shell(Home)