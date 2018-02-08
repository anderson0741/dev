import React, { Component } from 'react';
import items from '../../shared/items.json';
import Form from './Form';
import Item from './Item';

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: items,
        }
    }
    addItem(item){
        this.setState((prevState) => {
            let newItems = [item, ...prevState.items];
            return {
                items: newItems
            }
        })
    }
    deleteItem(i){
        this.setState((prevState) => {
            let newItems = [...prevState.items];
            newItems.splice(i, 1);
            return{
                items: newItems
            }
        })
    }
    // editItem(editedItem, i){
    //     this.setState((prevState) => {
    //         let newItems = [...prevState.items];
    //         newItem[i] = editedItem;
    //         return {
    //             items: newItems
    //         }
    //     })
    // }
    render() {
        let {items} = this.state;
        return (
            <div>
                <Form submit ={this.addItem} />
                {items.map((item, i) =>{
                    return (
                        <Item index={i} editedItem={this.editItem}deleteItem={this.deleteItem} key={i}{...item} />
                    )
                })}
            </div>
        )
    }
}
