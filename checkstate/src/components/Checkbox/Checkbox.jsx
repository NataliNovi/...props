import React from "react";
//import styles from './checkbox.module.scss';



export default class Checkbox extends React.Component {

    static defaultProps = {
	    checked: false,
	  };

	constructor(props) {
	    super(props);
	    this.state = {
	      checked: props.checked,
	    };
	  };
	
    
    handleChange = () => {
        //меняем состояние cheked на обратное
        this.setState({
            checked: !this.state.checked,
        });
    };

	  render() {
	    const { checked } = this.state;
        
	    return (
	      <div className="React__checkbox">
	        <label>
	          <input 
	            type="checkbox"
	            className="React__checkbox--input"
	            checked={checked}
                onChange={this.handleChange}
	          />
	          <span 
	            className="React__checkbox--span"
	          />
	        </label>
	      </div>
	    );
}}

