
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './components/Data';
import { useState } from 'react';

const allcategories =['All',...new Set(items.map((Item)=> Item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [category, setCategory] = useState(allcategories);

  const filterItems =(category) =>{
    if (category === 'all'){
      return setMenuItems(items);
    }
    const newItems = items.filter ((item) => item.category === category)
 return setMenuItems(newItems);
  }
  return (
   <div className='container'>
      <Categories filterItems={filterItems} category={category}/>
      <Menu Items={menuItems}/>
   </div>
  );
}

export default App;
