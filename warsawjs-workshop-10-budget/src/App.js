import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HelloStatefull from './components/HelloStatefull.jsx';//Add new import
import TransactionCard from './components/TransactionCard.jsx';//Add new import
import TransactionList from './components/TransactionList.jsx';//Add new import
import TransactionForm from './components/TransactionForm.jsx';//Add new import
import CategoryCard from './components/CategoryCard.jsx';//Add new import



function App2(props){
 return <button onClick={props.func}> {props.name}</button>
}

class App extends Component {
 constructor(props){
   super(props);
   this.state={
     counter:0,
     lista: ["a","b","c"],
     transactions: [
      {
        id: 1,
        description: 'Potwierdzenie uczestnictwa w warsztatach WarsawJS',
        value: 20,
        date: '16.09.2017',
        category: 'Edukacja'
      },
      {
        id: 2,
        description: 'Bilet na pociąg',
        value: 120,
        date: '07.09.2017',
        category: 'Transport'
      },
      {
        id: 3,
        description: 'Części do samochodu',
        value: 430,
        date: '26.08.2017',
        category: 'Samochód'
      }
    ],
    categories: [
      {
        id: 1,
        name: 'Edukacja',
        budgeted: 100,
        activity: 50
      },
      {
        id: 2,
        name: 'Transport',
        budgeted: 200,
        activity: 123
      },
      {
        id: 3,
        name: 'Samochód',
        budgeted: 300,
        activity: 170
      }
    ]
   }
 }
    
    
handleChangeCategoryBudget = ({ id, budgeted }) => {
    const { categories } = this.state;
    const categoryIndex = categories.findIndex(category => category.id === id);
    if (categoryIndex === -1) {
      console.error(`Category with index ${id} not found`)
      return;
    }

    categories[categoryIndex].budgeted = budgeted;
    this.setState({ categories });
  }



    
dodajTransakcje = (transaction) => {
    const { transactions } = this.state;

    this.setState({
      transactions: [
        ...transactions,
        { id: Math.random().toString(36).substring(7), ...transaction }
      ]
    });
  }
    
usunTransakcje = (id) => {
    console.log("usuwam");
    this.setState({transactions: this.state.transactions.filter(transaction => transaction.id !== id)});
  }    

 klikam = ()=>{
   this.setState({counter:this.state.counter+1},
     ()=>{  console.log(this.state.counter);
     })

 }

 render() {

   console.log(this.props);
   const name="Ania";
   let ul=this.state.lista.map(( e )=>{
   return <li key={e}>{e}</li>
   });
   
   return (
     <div className="App">
       <div className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h2>Welcome to React</h2>
       </div>
       <p className="App-intro">
         Hi {this.props.name}, {this.state.counter}
       </p>
       <button onClick={this.klikam} >
         tutaj
       </button>
       <App2 name={this.props.name} func={this.klikam}/>
       <div>{this.state.lista}</div>
       <ul>{ul}</ul>
       <HelloStatefull />
       <TransactionCard karta={this.state.transactions[0]}/>
       <TransactionForm onSubmit={this.dodajTransakcje}/>
       <TransactionList 
       lista={this.state.transactions}
       usun={this.usunTransakcje}
       />
       <CategoryCard 
       item={this.state.categories[0]}
       handleChangeCategoryBudget={this.handleChangeCategoryBudget}
       />
       
     </div>
   );
 }
}




export default App;

