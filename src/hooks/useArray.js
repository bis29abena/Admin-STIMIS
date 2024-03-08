import { useState } from "react";

export default function useArray(defaulValue) {
  const [array, setArray] = useState(defaulValue);

  // pushing an element into the array
  function push(element) {
    setArray((a) => [...a, element]);
  }

  //fillter the array
  function filter(callback) {
    setArray((a) => a.filter(callback));
  }

  //update array
  function update(index, newElement) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ]);
  }

  //remove function
  function remove(index) {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1),
    ]);
  }

  //clear function
  function clear(){
    setArray([])
  }

  return {array, set: setArray, push, filter, update, remove, clear}
}
