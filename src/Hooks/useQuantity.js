import {
  useState
} from 'react';

export function useQuantity(defaultQuantity) {
  const [value, setValue] = useState(defaultQuantity || 1);

  function onChange(e) {
    console.log(e.target.value);
    setValue(e.target.value)
  }

  return {
    value,
    setValue,
    onChange
  }

}