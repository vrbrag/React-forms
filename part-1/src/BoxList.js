import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm'
import Box from './Box'
import './BoxList.css'

function BoxList() {
   const [boxes, setBoxes] = useState([])

   const add = (boxObj) => {
      setBoxes(boxes => [...boxes, boxObj])
   }
   const remove = (id) => {
      setBoxes(boxes => boxes.filter(box => box.id !== id))
   }

   const boxComponents = boxes.map(box =>
      <Box
         key={box.id}
         id={box.id}
         backgroundColor={box.backgroundColor}
         height={box.height}
         width={box.width}
         handleRemove={remove}
      />)

   return (
      <div className="BoxList">
         <h2 className="BoxList-title">Create Boxes</h2>
         <NewBoxForm createBox={add} />
         <div className="BoxList-boxes">
            {boxComponents}
         </div>

      </div>
   )
}

export default BoxList;
