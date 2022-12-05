import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/TodoItem";
import {Footer} from "./MyComponents/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "Yo need to go to market to buy veges."
    },
    {
      sno: 2,
      title: "Go to the Computer shop",
      desc: "Yo need to go to Computer shop to fix your pc."
    },
    {
      sno: 3,
      title: "Go to the ATM",
      desc: "Yo need to go to ATM to withdraw the cash."
    }

  ]
  return (
    <>
    <Header title="My Todo List"/>
    <Todos todos={todos}/>
    <Footer/>
    </>
  );
}

export default App;
