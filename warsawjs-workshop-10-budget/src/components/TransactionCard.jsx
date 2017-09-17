import React, { Component } from 'react';
import PropTypes from 'prop-types';



function TransactionCard(prop)  {
        return(
            <div className ="TransactionCard">
                <h3>TransactionCard</h3>
                <span>Numer transakcji: </span><input type="text" name="id"  size="100" value={prop.karta.id}/><br/>
                <span>Opis transakcji: </span> <input type="text" name="id" size="100" value={prop.karta.description}/><br/>
                <span>Wartość transakcji: </span><input type="text" name="id" size="100" value={prop.karta.value}/><br/>
                <span>Data transakcji:</span><input type="text" name="id" size="100" value={prop.karta.date}/><br/>
                <span>Kategoria: </span><input type="text" name="id" size="100" value={prop.karta.category}/>
            </div>
            
        );    
}

TransactionCard.propTypes = {
  karta: PropTypes.object.isRequired
};


export default TransactionCard;








