import React,{Component} from 'react';

class Select extends Component {
    selectYear=(event)=>{
        let {getFormState} = this.props;
        console.log(event.target.value)
        getFormState(event.target.value);
    };
    render(){
        return (<select name="yarSelect" id="select" onChange={this.selectYear}>
             <option value='2020'>2020</option>
           <option value='2019'>2019</option>
        </select>);
    }
}

export default Select;