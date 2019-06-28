import React, { Component } from 'react'
import PropTypes from 'prop-types' //验证数据

class Comment extends Component {
  // 默认值的验证
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index:PropTypes.number

  }
  constructor (props) {
    super(props)
    this.handDelectComment = this.handDelectComment.bind(this)
  }
  componentWillMount () {
    this.setState({'timeString':''})
    this._timer =setInterval(()=>{
        this._updataTimeString()
    },5000)
  }
  //卸载组件
  componentWillUnmount() {
    this._timer=null
  }

  //删除评论操作
  handDelectComment(){
    // console.log(this.props)
    if(this.props.onDeleteComment){
      this.props.onDeleteComment(this.props.index)
    }
  }

  _updataTimeString(){
    let comment = this.props.comment
    if(comment.createdTime){
      const duration =(new Date().getTime() - comment.createdTime)/1000
      // console.log(comment,duration)
      this.setState({timeString:duration>60?`${Math.round(duration/60)}分钟前`:`${Math.round(Math.max(duration,1))}秒前`})
    }
  }

  //把类似于 <、> 这种内容替换转义一下，防止用户输入 HTML 标签
  _getProcessedContent (content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

  render () {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <div dangerouslySetInnerHTML={{__html: this._getProcessedContent(this.props.comment.content)}} />
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span
        onClick={this.handDelectComment}
        className='comment-delete'>
          删除
        </span>
      </div>
    )
  }
}


export default Comment
