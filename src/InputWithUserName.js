import React, { Component } from 'react'
import wrapWithLoadData from './wrapWithLoadData'

class InputWithUserName extends Component {
  constructor(props) {
    super(props)
    // 将组件的传递的数据绑定在state上
    this.state = {
      username: this.props.data,
    }
  }
  handleUsernameBlur (event) {
    this._saveUsername(event.target.value)
  }
  //保存用户名到本地
  _saveUsername (username) {
    localStorage.setItem('username', username)
  }

  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }

  handPropsToCommentInput () {
    return this.state.username
  }

  render () {
    return <input
      value={this.state.username || ''}
      onBlur={this.handleUsernameBlur.bind(this)}
      onChange={this.handleUsernameChange.bind(this)} />
  }
}
// 调用函数；并将InputWithUserName组件作为参数，返回新的参数
InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')
export default InputWithUserName
