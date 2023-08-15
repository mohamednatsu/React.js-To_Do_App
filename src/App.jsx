
import { useState } from 'react';
import Todo from '../components/Todo'

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      if (editIndex === -1) {
        setTodos([...todos, newTodo]);
      } else {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = newTodo;
        setTodos(updatedTodos);
        setEditIndex(-1);
      }
      setNewTodo('');
    }
  };


  const handleEditTodo = (index) => {
    setNewTodo(todos[index]);
    setEditIndex(index);
  };
  // style of todo
  var style="transition-all hover:scale-105 hover:shadow-md ease-in flex justify-between bg-violet-600 text-white sm:w-[100px] md:w-[600px] mx-auto items-center px-7 rounded-md h-[50px] cursor-pointer";
  var btn = " bg-red-500 w-[30px] h-[30px] rounded-full p-2 flex justify-center items-center font-bold ml-3";
  var btnedit = " bg-yellow-300 w-[30px] h-[30px] rounded-full p-2 flex justify-center items-center font-bold ml-3 text-black text-sm transition-all hover:scale-105";
  return (
    <>
      <div className="  w-full flex justify-center items-center mx-auto my-5">
        <div className=" flex justify-center items-center flex-col my-8 bg-gray-200 w-1/2 rounded-md shadow-lg ">
          <h3 className=" text-3xl text-center my-5 font-bold">To Do App</h3>
          <input 
            type="text" 
            className=" text-xl px-2 w-1/2 h-[40px] outline-none rounded-md my-5 focus:border border-violet-500"
            placeholder="What to do..."
            value={newTodo}
            onChange={handleInputChange}
          />
          <button className=' bg-yellow-300 text-2xl font-bold w-[140px] h-fit p-3 rounded-md transition-all hover:scale-105 ease-in' onClick={handleAddTodo}>
            {editIndex === -1 ? 'Add Todo' : 'Update Todo'}
          </button>
          <div className=" flex-col justify-center items-center my-3 w-full ">
            {
              todos.map(
                (todo, index) => (
                  <Todo handleEdit={() => handleEditTodo(index)} btnedit={btnedit} key={index} btn={btn} style={style} todo={todo} />
                )
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
