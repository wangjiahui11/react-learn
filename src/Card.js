import React ,{Component} from 'react'



class Card extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount () {

  }
  componentDidMount () {
    console.log(this.props.content)
  }
  render () {
    return (
      <div className='card'>
        <div className='card-content'>
          {this.props.content}
        </div>
      </div>
    )
  }
}

export default Card
