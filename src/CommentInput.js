import React, { Component } from 'react'
import PropTypes from 'prop-types' //验证数据
import InputWithUserName from './InputWithUserName'
import TextareaWithContent from './TextareaWithContent'

class CommentInput extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   username: '',
    //   content: ''
    // }
  }
  static propTypes = {
    onSubmit: PropTypes.func
  }
  componentWillMount () {
    // this._loadUsername()
  }
  componentDidMount () {
    // console.log(this.textarea,'ref获取dom的操作’)
    // this.textarea.focus()
  }
  // _loadUsername () {
  //   console.log('获取用户名')
  //   const username = localStorage.getItem('username')
  //   if (username) {
  //     this.setState({ username })
  //   }
  // }

  // handleUsernameBlur (event) {
  //   this._saveUsername(event.target.value)
  // }
  // //保存用户名到本地
  // _saveUsername (username) {
  //   console.log('保存用户名')
  //   localStorage.setItem('username', username)
  // }
  // handleUsernameChange (event) {
  //   this.setState({
  //     username: event.target.value
  //   })
  // }
  // handleContentChange (event) {
  //   this.setState({
  //     content: event.target.value
  //   })
  // }
  handleSubmit () {
    if (this.props.onSubmit) {
      // const { username, content } = this.state
      let username = this.input.getCommonFn()
      let content = this.textarea.getCommonFn()
      this.props.onSubmit({ username:username, content , createdTime: +new Date()})
    }
    this.setState({ content: '' })

  }
  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>姓名：</span>
          <div className='comment-field-input'>
          {/* */}
          {/*
            <input
              value={this.state.username}
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={this.handleUsernameChange.bind(this)} />
           */}
           <InputWithUserName ref={(input) => this.input = input} />
          </div>
        </div>
        <div className='comment-field center'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            {/*   <textarea
              ref={(textarea) => this.textarea = textarea}
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)} />
            */}

            <TextareaWithContent ref={(textarea) => this.textarea = textarea} />
          </div>
        </div>
        <div className='comment-field-button center'>
          <button
            onClick={this.handleSubmit.bind(this)}>
            发布
        </button>
        </div>
      </div>
    )
  }
}

export default CommentInput
