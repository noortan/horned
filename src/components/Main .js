import React from 'react';
import HornedBeasts from './HornedBeasts';
import Horned from './Horned.json'

class Main extends React.Component {
  render() {

    return (
      <div>
        {
          Horned.map((item, index) => {
            return (
              <HornedBeasts modeldata={this.props.modeldata} dataselected={this.props.dataselected} title={item.title} img_url={item.image_url} description={item.description} key={index} />
            )
          })
        }


      </div>
    )

  }
}
export default Main;