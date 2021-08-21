import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfHornsClicked: 0
    }
  }

  increaseNoOfclicks = () => {
    this.setState({
      numberOfchoice: this.state.numberOfHornsClicked + 1
    })
  }
  render() {


    return (
      <div className="hornedstyle">
        {/* <h3>{this.props.title}</h3>
        <img src={this.props.img_url} alt='' width='300'  onClick={this.increaseNoOfClicks} />
        <p>{this.props.description}</p>
        <p>🦄 {this.state.numberOfchoice} 🦄</p> */}

        <Card style={{ width: '18rem' }}>

          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img variant="top" src={this.props.img_url} />
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              click the button if you like it 🦄
            </Card.Text>
            <Button variant="primary" onClick={this.increaseNoOfclicks}>😍</Button>
            <Card.Text>
            {this.state.numberOfHornsClicked}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )

  }
}
export default HornedBeasts;