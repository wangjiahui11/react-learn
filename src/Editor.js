import React ,{Component} from 'react'

/*dangerouslySetInnerHTML 传入一个对象， __html 属性值就相当于元素的 innerHTML，
 这样我们就可以动态渲染元素的 innerHTML 结构了*/
class Editor extends Component {
  constructor() {
    super()
    this.state = {
      content: '<h1>React.js 小书</h1>'
    }
  }

  render () {
    return (
      <div  className='editor-wrapper'
        dangerouslySetInnerHTML={{__html: this.state.content}}/>
    )
  }
}

export default Editor
