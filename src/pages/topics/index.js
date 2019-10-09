import React from 'react'

import Shell from 'Root/components/shell'
import Meta from 'Root/components/meta'

export class Topics extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Meta title="话题" />
        <h2>Topics</h2>
      </div>
    )
  }
}

export default Shell(Topics)
