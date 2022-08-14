
import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        const {counter,onAdd,onDelete}=this.props;
        return (
            <div>
                
                <span className={this.getClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => onAdd(counter)} 
                    className='btn btn-secondary btn-sm'
                >
                    Add
                </button>
                <button 
                    onClick={() => onDelete(counter.id)} 
                    className='btn btn-secondary btn-sm m-2'
                >
                    Delete
                </button>

            </div>
        
        );
    }

    getClasses() {
        const {counter}=this.props;
        let classes = "badge  m-2 badge-";
        classes += counter.value === 0 ? "warning" : "primary";
        return classes
    }

    formatCount(){
        const {counter}=this.props;
        const {value} = counter;
        if (value === 0){
            return "Zero"
        }
        else{
            return value
        };
    }
}
 
export default Counter;