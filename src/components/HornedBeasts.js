import React from 'react'

class HornedBeasts extends React.Component {
    render() {
    
      return (
        <div>
            <h1>{this.props.title}</h1>
            <img src={this.props.image_url} alt='' title='' />
            <p>{this.props.description}</p>
        </div>
      )
    
  }
}
export default HornedBeasts;