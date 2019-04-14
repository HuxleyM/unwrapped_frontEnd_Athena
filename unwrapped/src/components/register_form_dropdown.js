import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'


class FormDropdown extends Component {
    constructor() {
      super();
      this.state = {
        selectedItems: [] 
      };
    }
    
    itemSelected(item){
      if(this.state.selectedItems.includes(item)){
        
      }else{
        var itemsList=this.state.selectedItems.push(item)
        this.setState({
          selected: itemsList
        })
      }
    }
    

    printPretty(){
      return (<div>
        { this.state.selectedItems.forEach((item)=>{
          <button>item</button>})
        }
      </div>)
    }
   
    render() {
      return (
          <div>
            <Dropdown onSelect={(eventKey: any, event: Object)=>{ this.itemSelected(eventKey)}}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item>
				<Dropdown.Item eventKey="veg">Veg</Dropdown.Item>
                <Dropdown.Item eventKey="shampoo">Shampoos</Dropdown.Item>
                <Dropdown.Item eventKey="dry-goods">Dry Goods</Dropdown.Item>
				<Dropdown.Item eventKey="wine">Wine</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
		<hr></hr> 
		<h3>Selected</h3>
		<div>{this.printPretty()}</div>
          </div>
      )
    }
}

export default FormDropdown