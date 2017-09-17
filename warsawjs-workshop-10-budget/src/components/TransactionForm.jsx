import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TransactionForm extends Component {
 
constructor(props){
   super(props);
   this.state={
    description: '',
    value: '',
    date: '',
    category: ''
   }
 }


  onSubmit = (e) => {
    e.preventDefault();
    const { description, value, date, category } = this.state;

    this.props.onSubmit({
      description,
      value,
      date,
      category
    })
  }

  handleInputChange = (key, value) => {
    this.setState({ [key]: value });
  }

  render() {
    const { description, value, date, category } = this.state;

    return (
      <form className='Transaction-form' onSubmit={this.onSubmit}>
         <h3>Transaction form: </h3>
        <span>Opis transakcji:</span><input name='description' value={description} size="100" onChange={(e)=>{this.handleInputChange('description', e.target.value)}}/> <br/>
        <span>Wartość transakcji: </span><input name='value' type='text' value={value} size="100" onChange={(e)=>{this.handleInputChange('value', e.target.value)}}/><br/>
        <span>Data transakcji: </span><input name='date' type='text' value={date} size="100" onChange={(e)=>{this.handleInputChange('date', e.target.value)}}/><br/>
        <span>Kategoria: </span><input name='category' type='text' value={category} size="100" onChange={(e)=>{this.handleInputChange('category', e.target.value)}}/> <br/>
        <button>Dodaj</button>
      </form>
    )
  }

};




TransactionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};


export default TransactionForm;