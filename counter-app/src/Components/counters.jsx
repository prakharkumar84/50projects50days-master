import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        const {onReset,onAdd,onDelete,counters} = this.props;
        return (
            <div>
                <button onClick={onReset} className='btn btn-primary btn-sm'>Reset</button>
                {counters.map(counter =>(
                    <Counter 
                    key={counter.id}
                    onAdd = {onAdd}
                    onDelete={onDelete}
                    counter = {counter}

                />
                ) )}
            </div>
        );
    }
}

export default Counters;
 
