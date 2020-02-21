import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);          
    }   

    render() {
        return (  
            
           <div>               
            <h5>Task: {this.props.text}</h5>
            <h5>Priority:{this.props.priority}</h5>
            <h5>DueDate: {this.props.dueDate?this.props.dueDate.toString():this.props.dueDate}</h5>
           </div>
           
        );
    }

}