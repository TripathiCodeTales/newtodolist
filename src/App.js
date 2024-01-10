import React, { useState } from 'react';
import "./style.css";
import Status from "./Status";
import Lists from "./Lists";
import AddTask from "./AddTask";

const initialList = [
  {
    title: 'React Module',
    status: 'Complete',
  },
  {
    title: 'Components in React',
    status: 'Incomplete',
  }
]

const App = () => {
  const [listitems, setListitems] = useState(initialList);
  const [filter, setFilter] = useState(null);
  // const [isChecked,setIsChecked] = useState(false);

  const deleteTask = (task) => {
    const title = task.title
    const deletedTask = listitems.filter((item) => item.title !== title);
    setListitems(deletedTask);
  }

  const handleFilter = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
  }

  const handleAddTask = (text) => {
    setListitems([...listitems,
    {
      title: text,
      status: 'Incomplete',
    }
    ])
  }

  const handleOnChange = (event, item) => {
    
    const updatedList = listitems.map((task) => {
      if (task.title === item.title) {
        if (event.target.checked === true) {
         
          task.status = 'Complete'
        } else {
          task.status = 'Incomplete'
          // console.log("else")
        }
        return task

      } else {
        return task
      }

    })
    // console.log(updatedList);
    setListitems(updatedList);
  }



  let filteredlist = [...listitems]
  if (filter && filter !== "All") {
    filteredlist = listitems.filter((item) => {
      return item.status === filter;
    })
  }

  return (
    <div className = "main-page">
      <h1 className='heading'>Todo List</h1>
      <div className='btnTask'>
      <AddTask onAddTask={handleAddTask} />
      </div>
      <Lists listitems={filteredlist}
        deleteTask={deleteTask} handleOnChange={handleOnChange} />
      <Status handleFilter={handleFilter}
        handleOnChang
        e={handleOnChange} />
        
    </div>
  );
}

export default App;