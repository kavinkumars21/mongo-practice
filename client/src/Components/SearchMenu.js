import {getIdentifierData} from '../redux/kfcIdentifierSlice';

import {useSelector, useDispatch} from 'react-redux';

import React from 'react';

function SearchMenu() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const menu = state['kfcIdentifier']['menu'];
  const loading = state['kfcIdentifier']['loading'];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getIdentifierData(e.target.elements[0].value));
    e.target.elements[0].value = '';
  }
  return (
    <div>
      
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='enter name' />
          <button>search</button>
        </form>
        <div className="menu-container">
      {loading && <div>Please wait Loading.....</div>}
      {
        !loading && menu.map((item) => (
          <div className="menu-item--container" key={item.id}>
            <img src={item.img}/>
              <div className='menu-description'>
                <div>{item.name}</div>
                <div>${item.price}</div>
                <button>Add</button>
              </div>
          </div>
        ))
      }
    </div>
        
      
    </div>
  )
}

export default SearchMenu