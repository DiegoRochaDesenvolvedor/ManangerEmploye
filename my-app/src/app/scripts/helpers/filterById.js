export default function filterById(array, id) {
    return array.find(item => item._id === id);
  }