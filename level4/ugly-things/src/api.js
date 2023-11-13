import axios from 'axios';

const getThings = async () => {
  try {
    const response = await axios.get('https://api.vschool.io/sfalvo/thing');
    return response.data;
  } catch (error) {
    console.error('Error getting all things:', error);
    throw error;
  }
};

const createThing = async (thing) => {
  try {
    const response = await axios.post('https://api.vschool.io/sfalvo/thing', thing);
    return response.data;
  } catch (error) {
    console.error('Error creating a thing:', error);
    throw error;
  }
};

const updateThing = async (thing_id, updatedThing) => {
  try {
    const response = await axios.put(`https://api.vschool.io/sfalvo/thing/${thing_id}`, updatedThing);
    return response.data;
  } catch (error) {
    console.error(`Error updating thing with ID ${thing_id}:`, error);
    throw error;
  }
};

const deleteThing = async (thing_id) => {
  try {
    const response = await axios.delete(`https://api.vschool.io/sfalvo/thing/${thing_id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting thing with ID ${thing_id}:`, error);
    throw error;
  }
};

export { getThings, createThing, updateThing, deleteThing };
