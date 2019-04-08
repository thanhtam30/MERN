import React,{Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
  } from 'reactstrap';


class AppNavbar extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand='sm' className='md-5'>
                       <Container>
                       <NavbarBrand href='/'>Shopping list</NavbarBrand>
                            <NavbarToggler onClick={this.toogle}></NavbarToggler>
                            <Collapse isOpen={this.state.isOpen}>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="https://github.com/reactstrap/reactstrap">Component</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                       </Container>
                          
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;