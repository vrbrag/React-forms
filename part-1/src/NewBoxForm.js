import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewBoxForm({ createBox }) {
   const INITIAL_STATE = {
      backgroundColor: "",
      height: "",
      width: ""
   }
   const [formData, setFormData] = useState(INITIAL_STATE)
   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData(formData => ({
         ...formData,
         [name]: value
      }))
   }

   const input = (e) => {
      e.preventDefault()
      createBox({ ...formData, id: uuid() })
      setFormData({ height: "", width: "", backgroundColor: "" })
   }
   return (
      <div>
         <form onSubmit={input}>
            <div>
               <input
                  type="text"
                  name="backgroundColor"
                  placeholder="Box Color"
                  value={formData.backgroundColor}
                  onChange={handleChange}
               />
            </div>
            <div>
               <input
                  type="text"
                  name="height"
                  placeholder="Box Height"
                  value={formData.height}
                  onChange={handleChange}
               />
            </div>
            <div>
               <input
                  type="text"
                  name="width"
                  placeholder="Box Width"
                  value={formData.width}
                  onChange={handleChange}
               />
            </div>
            <button >Add Box!</button>
         </form>
      </div>
   )
}

export default NewBoxForm;