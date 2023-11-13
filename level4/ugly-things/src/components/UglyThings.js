import React, { useContext, useState } from 'react';
import { ThingsContext } from '../context/ThingsContext';
import { deleteThing } from '../api';


const UglyThings = () => {
  const { uglyThings, setUglyThings} = useContext(ThingsContext);
  const [editId, setEditId] = useState(null);

  const handleDelete = async (thing_id) => {
    try {
      await deleteThing(thing_id);
      setUglyThings((prevThings) => prevThings.filter((thing) => thing._id !== thing_id));
    } catch (error) {
      console.error(`Error deleting thing with ID ${thing_id}:`, error);
    }
  };

  const handleEdit = (thing_id) => {
    setEditId(thing_id)
  };

  return (
    <div className='container'>
      <h2>Ugly Things</h2>
      <ul>
        {uglyThings.map((thing) => (
          <li key={thing._id}>
            {editId === thing._id ? (
              <EditForm thing={thing} setEditId={setEditId} />
            ) : (
              <div>
                <img src={thing.imgUrl} alt="Ugly Thing" />
                <h3>{thing.title}</h3>
                <p>Description: {thing.description}</p>
                <button onClick={()=> handleDelete(thing._id)} >Delete</button>
                <button onClick={()=> handleEdit(thing._id)} >Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UglyThings;