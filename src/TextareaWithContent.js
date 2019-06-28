
import React, { Component } from 'react'
import wrapWithLoadData from './wrapWithLoadData'

class TextareaWithContent extends Component {
  constructor(props) {
    super(props)
    // 将组件的传递的数据绑定在state上
    this.state = {
      content: this.props.data,
    }
    // console.log(props)
  }
  componentDidMount () {
    // console.log(this.textarea,'ref获取dom的操作’)
    this.textarea.focus()
  }

  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }
  //返回数据
  handPropsToCommentInput(){
    this.setState({content: ''})
    return this.state.content
  }
  render () {
    return <textarea
            ref={(textarea) => this.textarea = textarea}
            value={this.state.content||''}
            onChange={this.handleContentChange.bind(this)} />
  }
}

TextareaWithContent = wrapWithLoadData(TextareaWithContent, 'content')
export default TextareaWithContent
