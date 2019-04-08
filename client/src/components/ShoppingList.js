import React, { Component } from 'react';
import {Container,ListGroup, ListGroupItem,Button} from 'reactstrap'
import {CSSTransition,TransitionGroup} from 'react-transition-group'

import {connect} from 'react-redux';
import {getitems,deleteitem} from '../actions'
import {PropTypes} from 'prop-types'
class ShoppingList extends Component {
componentDidMount(){
    this.props.getitems()
}
   
OnDelete=(id)=>{
    this.props.deleteitem(id)
}
    render() {
        
        const {items}=this.props.item;
        return (
            <div>
                <Container>
                 
                    <ListGroup>
                        <TransitionGroup className='shopping-list'>
                           {items.map(({name,id})=>(
                               <CSSTransition key={id} timeout={500} className='item'>
                                    <ListGroupItem>
                                    <Button
                      className='remove-btn'
                      color='danger'
                      size='sm'
                      onClick={this.OnDelete.bind(this,id)}
                    >
                      &times;
                    </Button>
                                        {name}
                                    </ListGroupItem>
                               </CSSTransition>
                           ))}
                        </TransitionGroup>
                    </ListGroup>
                </Container>
            </div>
        );
    }
}
ShoppingList.protoTypes={
    getitems:PropTypes.func.isRequired,
    items:PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
    return {
        item:state.item
    }
}
export default connect(
    mapStateToProps,
    { getitems ,deleteitem}
  )(ShoppingList);