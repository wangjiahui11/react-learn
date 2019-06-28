import React, { Component } from 'react'
import Comment from "./Comment.js";
import PropTypes from 'prop-types'
class CommentList extends Component {
  // 默认值的验证
  constructor(props){
    super(props)
    this.handDeleteComment =this.handDeleteComment.bind(this)
  }
  static propTypes = {
    onDeleteComment: PropTypes.func,
  }
  handDeleteComment(index){
    if(this.props.onDeleteComment){
      this.props.onDeleteComment(index)
    }
  }
  render () {
    return (
      <div>{
        this.props.comments.map((item, index) =>
          <Comment comment={item} key={index}  index={index} onDeleteComment ={this.handDeleteComment}/>
        )
      }</div>
    )
  }
}

//--------验证类型------；
CommentList.propTypes = {
  comments: PropTypes.array
};
//--------默认值------；
CommentList.defaultProps = {
  comments: [{username:'will',content:'我的内容'}]
};

export default CommentList
