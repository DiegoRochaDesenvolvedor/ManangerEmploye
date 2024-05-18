interface Item {
  _id: string;
  [key: string]: any;
}

export default function filterById(array: Item[], id: string): Item | undefined {
  return array.find(item => item._id === id);
}