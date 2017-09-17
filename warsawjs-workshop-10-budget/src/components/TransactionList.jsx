import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransactionCard from './TransactionCard.jsx';//Add new import


function TransactionList(prop)  {
        let ul1=prop.lista.map(( e )=>{
           return <tr key={e.id}>
               <td>{e.id}</td>
               <td>{e.description}</td>
               <td>{e.value}</td>
               <td>{e.date}</td>
               <td>{e.category} </td >
               <td><button onClick={()=>{prop.usun(e.id)} }>Usuń</button></td>
           </tr>
           });
        return(
            <div className ="TransactionList">
                <h3>TransactionList</h3>
                <table>
                    <tr>
                        <th>Numer transakcji</th>
                        <th>Opis</th>
                        <th>Wartość</th>
                        <th>Data</th>
                        <th>Kategoria</th>
                        <th>Usuń </th>
                    </tr>
                    {ul1}
                </table>
                
            </div>
            
        );    
}

TransactionList.propTypes = {
  karta: PropTypes.object.isRequired
};


export default TransactionList;