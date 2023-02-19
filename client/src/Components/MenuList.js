import React, { useEffect, useState } from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {getKfcData} from '../redux/kfcSlice';

import './MenuList.css'

function MenuList() {
  const dispatch = useDispatch();
  const {menu, loading} = useSelector((state) => state.kfc);
  useEffect(() => {
    dispatch(getKfcData());
    
  }, []);

  return (
    <div className="menu-container">
      {loading && <div>Please wait Loading.....</div>}
      {
        !loading && menu.length > 0 && menu.map((item) => (
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
      <div className='page-buttons'>
        <button className="page-no">1</button>
        <button className="page-no">2</button>
        <button className="page-no">3</button>
      </div>
    </div>
  )
}

export default MenuList