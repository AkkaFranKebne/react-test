import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryCard extends Component {
  constructor (props){
      super(props)
        this.state = {
        editMode: false,
        budgeted: this.props.item.budgeted
  }
      
  }

  onBudgetChange = e => {
    this.setState({ budgeted: e.target.value });
  }

  handleChangeEditMode = () => {
    this.setState({ editMode: !this.state.editMode});
  }

  handleSubmit = () => {
    this.handleChangeEditMode()
    this.props.handleChangeCategoryBudget({
      id: this.props.item.id,
      budgeted: this.state.budgeted
    })
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSubmit()
    }
  }

  render() {
    const {
      item: { budgeted, name, activity }
    } = this.props;
    const { editMode } = this.state;

    return (
      <div className="Category-card">
        <h1>{name}</h1>
        <h2>Budgeted:
        {editMode ? (
          <input
            autoFocus
            type="number"
            value={this.state.budgeted}
            onChange={this.onBudgetChange}
            onBlur={this.handleSubmit}
            onKeyPress={this.handleKeyPress}
          />
        ) : (
          <span onClick={this.handleChangeEditMode}>{budgeted}</span>
        )}
         zł
        </h2>
        <div className='Category-card__metadata'>
          <span>Activity: {activity} zł</span>
          <span>Available: {budgeted - activity} zł</span>
        </div>
      </div>
    )
  }
};

CategoryCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default CategoryCard;