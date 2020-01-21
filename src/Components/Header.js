import React, {Component} from 'react'

class Header extends Component{
    constructor(){
        super()

        this.state = {
            showDropdown: false

        }
    }

    handleMenu = () => {
        this.setState({
            showDropdown: !this.state.showDropdown
        })
    }
    render(){
        return(
            <div>
                 <header>
                    
                    <div id='large-header'>
                        <div id='logo'>
                            <img id='axe' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1-ww30i5F5aupDSVz-CXgwYGwZkH973fF_Ge0Box9sbw88fPfw&s'/>
                        </div>
                         
                    </div>
                    <div id='bootstrap'>
                        <a>SERVICES</a>
                        <a>PORTFOLIO</a>
                        <a>ABOUT</a>
                        <a>TEAM</a>
                        <a>CONTACT</a>
                    </div>
                    <div id="menu-button">
                    <button id="button" onClick ={this.handleMenu}>Menu
                    </button>
                    </div>
                     
                    {this.state.showDropdown
                    ? (<div id='mobile-header'> 
                        <div id='drop-down'>
                         
                            <a>SERVICES</a>
                            <a>PORTFOLIO</a>
                            <a>ABOUT</a>
                            <a>TEAM</a>
                            <a>CONTACT</a>
                         </div>
                         <div id='drop-down2'></div>
                    </div>)
                    : null}
                </header>
            </div>
        )
    }
}
export default Header