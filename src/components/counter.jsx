import React, {Component} from 'react';

class Counter extends Component
{
	// state=
	// {
	// 	count: 0

	// };
	// renderTags(){
	// 	if(this.state.tags.length === 0) return <p>There are no tags!</p>
	// 	return 	<ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>

	// }

	// constructor(){
	// 	super();
	// 	this.handleIncrement=this.handleIncrement.bind(this);
	// }


	render()
	{
		//console.log("Try this",this.props);
		return (
			<div>
				 {this.props.children}
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={()=> this.props.onIncrement(this.props.counter)} 
				className="btn btn-secondary btn-sm">Increment</button>
				<button onClick={() => this.props.onDelete(this.props.counter.id)} 
				className="btn btn-danger btn-sm m-2">Delete</button>
				{/* {this.state.tags.length===0 && "Please add values"} */}
				{/* {this.renderTags()} */}
			</div>
		);
		
	}
	getBadgeClasses() {
		let classes = "badge m-2";
		classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
		return classes;
	}

	formatCount()
	{
		//console.log("heyo",this.props.counter.value);
		const {value}=this.props.counter;
		return value;
	}
}

export default Counter;