import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState('');
  const [showElements, setShowElements] = useState(false);

  const handleOnSubmit = () => {
    if (text === "") {
      alert("Please enter a title")
    } else {
      onAddTask(text)
      setShowElements(false);
    }
  }

  const handleOnClick = () => {
    setShowElements(true);
  }


  return (
    <>
      <button onClick={handleOnClick} className='addTaskbtn'>Add Task </button>
      {showElements && (
        <>

          <div className='modal-wrapper'></div>


          <div className='modal-container'>
            <div className='title'>
              <h1>Add To Do</h1>
            </div>
            <input
              type="text"
              id="title"
              value={text}
              onChange={(e) =>
                setText(e.target.value)} placeholder='AddTask' style={{ height: "25px" }}
            />
            <br />
            <br />
            <p><strong>Status</strong></p>
            <br />
            <select>
              <option>complete</option>
              <option>Incomplete</option>
            </select>
            <br />
            <br />
            <div className='btn'>
              <button onClick={handleOnSubmit} style={{backgroundColor:"blue",border:"transparent", color:"white",padding:"5px"}}>Add Task</button>
              <button onClick={() => setShowElements(false)} style={{backgroundColor:"blue",border:"transparent", color:"white",padding:"5px"}}>Cancel</button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default AddTask;