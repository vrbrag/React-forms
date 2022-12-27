import React from 'react';
import './Box.css'

function Box({ id, handleRemove, backgroundColor = "blue", height = 10, width = 10 }) {

   const remove = () => handleRemove(id)

   return (
      <div>
         <div
            className="Box"
            style={{
               height: `${height}em`,
               width: `${width}em`,
               backgroundColor
            }}
         />
         <button onClick={remove}>X</button>
      </div>
   )
}

export default Box;