
import React from "react";

const Lists = (props) => {
  const { listitems, deleteTask, handleOnChange } = props;

  const handleOnDelete = (task) => {
    deleteTask(task);
  }

  return (
    <div className="toDoData">
      {listitems === "" ?
        <button> no todos</button>
        :
        <div className="data" style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
{
  listitems.map((item, index) => {
    return (
      <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
        <div>
          <label>
            <input style={{marginRight:"10px"}}
              type="checkbox"
              checked={item.status === 'Complete'}
              onClick={(event) => handleOnChange(event, item)}
            />
            {item.title}
          </label>
          </div>
          <div className="delete">
          <button 
            onClick={() => handleOnDelete(item)}
            style={{ height: '30px' }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  })
}
        </div>
      }
    </div>
  )
}

export default Lists;