import React, { Component } from "react";
import { connect} from "react-redux";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { additem } from "../actions/index";
import uuid from 'uuid'
class ItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: ""
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  onChange=(e)=>{
      this.setState({
          [e.target.name]:[e.target.value]
      })
  }
   
onSubmit=e=>{
e.preventDefault();
const newItem={
  name:this.state.name
}
this.props.additem(newItem);
this.toggle();
}
  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item" />
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Shopping Cart"
                  onChange={this.onChange}
                />
                <Button color='dark' style={{marginTop:'2rem'}}>Add Item</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    item: state.item
  }
}
export default connect(mapStateToProps,{additem})(ItemModal);
