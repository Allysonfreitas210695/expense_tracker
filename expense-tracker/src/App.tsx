import { useState, useEffect } from 'react';
import { Item } from './Types/Item';
//import { Category } from './Types/Category';
import { category } from './data/categorias';
import { items } from './data/items';
import { getCurrentMonth, filterListbyMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import * as C from "./App.styles";


const App = () =>{
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [Income, setIncome] = useState(0);
  const [expense, setExpense] =  useState(0);

  useEffect(() =>{
    setFilteredList(filterListbyMonth(list, currentMonth));
  },[list, currentMonth]);

  useEffect(() =>{
    let incomeTotal = 0;
    let expenseTotal = 0;

    for(let i in filteredList){
      if(category[filteredList[i].category].expense){
        expenseTotal += filteredList[i].value;
      }else{
        incomeTotal += filteredList[i].value;
      }
    }

    setIncome(incomeTotal);
    setExpense(expenseTotal);

  }, [filteredList]);

  const handleMonthChange = (newMonth: string) =>{
    setCurrentMonth(newMonth);
  }
  
  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

       <InfoArea 
       currentMonth={currentMonth}
       onMonthChange={handleMonthChange}
       income={Income}
       expense={expense}
      />

      <InputArea onAdd={handleAddItem}/>

       <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
  );
}

export default App;