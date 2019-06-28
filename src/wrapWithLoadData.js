import React, { Component } from 'react'

export default (WrappedComponent, name) => {
  class NewComponent extends Component {
    constructor (props) {
      super(props)
      this.state = { data: '' }
    }
    componentWillMount () {
      let data = localStorage.getItem(name)
      this.setState({ data })
    }
    getCommonFn(){
      return this.common.handPropsToCommentInput()
    }
    render () {
      return <WrappedComponent ref={(common) => this.common = common}  data={this.state.data} />
    }
  }
  return NewComponent
}
