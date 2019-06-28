import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './App.css';
class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
    console.log('construct1')
    this.handleSubmitComment = this.handleSubmitComment.bind(this)
    this.handDeleteComment = this.handDeleteComment.bind(this)
  }
  componentWillMount () {
    console.log('component will mount2')
    this._loadComments()
  }
  componentDidMount () {
    console.log('component did mount4')

  }
  //保存评论到本地
  _saveComments(comments){
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  //加载评论
  _loadComments(){
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }
  //提交数据的逻辑
  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    let comments =  this.state.comments
    comments.push(comment)
    this.setState({comments})
    this._saveComments(comments)
  }
  //删除数据
  handDeleteComment(index){
    let comments = this.state.comments;
    comments.splice(index, 1)//删除数组
    // console.log(comments,index)
    this.setState({comments}) //保存状态
    this._saveComments(comments) //保存到本地操作
  }
  render () {
    console.log('render3')
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList comments={this.state.comments} onDeleteComment={this.handDeleteComment}/>
      </div>
    )
  }
}

export default CommentApp
