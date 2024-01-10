import React from 'react';

export default function Status(props) {
       const { handleFilter } = props;

       return (
              <div className='option'>
                     <select onChange={handleFilter} className='selectBox'>
                            <option value="All">All</option>
                            <option value="Complete">Complete</option>
                            <option value="Incomplete">Incomplete</option>
                     </select>
              </div>
       )
}


