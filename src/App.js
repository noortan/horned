import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main '
import Horned from './components/Horned.json'
import SelectedBeast from './components/SelectedBeast'

import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            elemntSelect: {}
        }


    }

    showModalData = (title) => {
        let listSelect = Horned.find(element => {
            if (element.title === title) {
                return element;
            }
        })

        this.setState({
            showModal: true,
            elemntSelect:listSelect
        })
    }

    handleClose = () => {

        this.setState({
            showModal: false,
            elemntSelect: {}
            
        })
    }
    render() {
        return (
            <div>
                <Header />
                <Main modeldata={this.showModalData} dataselected={this.state.elemntSelect} />
                <SelectedBeast dataselected={this.state.elemntSelect} handleClose={this.handleClose} showModal={this.state.showModal} />
                <Footer />
            </div>
        )

    }
}
export default App;