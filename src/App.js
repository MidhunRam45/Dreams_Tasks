import  Form  from './components/form/Form';
import './App.css';
import NotesManager from './tasks/notes manager/NotesManager';
import WrappedApp from './tasks/recipe manager/RecipeManager';
import Todo from './tasks/todo/Todo';
import Reducer from './tasks/useReducer/Reducer';
// import store from './store';
// import Reduxapp from './tasks/redux/reduxapp';
import { Provider } from 'react-redux';
import CrudContainer from './tasks/redux/crud/CrudContainer';
import ProductsContainer from './tasks/prouducts/ProductsContainer';
import UserList from './tasks/UserList/UserList';

function App() {
  return (
    <div className="App">
      {/* <Todo/> */}
      {/* <WrappedApp/> */}
      {/* <Reducer/> */}
      {/* <NotesManager/> */}
      {/* <Form/> */}
      {/* <CrudContainer/> */}
      {/* <ProductsContainer/> */}
      <UserList/>
    </div>
  );
}

export default App;
