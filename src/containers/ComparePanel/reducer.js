/*global product*/

import { MEASURE_DEFAULT_UNIT, MEASURE_UNIT_ITEMS, MEASURE_LOCALSTORAGE_KEY } from '../../constants/ui';
import { SWITCH_UNIT } from '../../constants/actions';

const getDefaultUnit = () => {
  const unitFromLocalStorage = localStorage.getItem(MEASURE_LOCALSTORAGE_KEY);

  // Другой вариант
  // return (MEASURE_UNIT_ITEMS.indexOf(unitFromLocalStorage) !== -1) ? 
  //   unitFromLocalStorage : 
  //   MEASURE_DEFAULT_UNIT;

  if(MEASURE_UNIT_ITEMS.indexOf(unitFromLocalStorage) !== -1)
    return unitFromLocalStorage;

  return MEASURE_DEFAULT_UNIT;
}

const initialState = {
    product: product,
    unit: getDefaultUnit()
};

export default function handle(state = initialState, action) {
    switch (action.type) {
      case SWITCH_UNIT:
        return {
          ...state,
          unit: action.unit
        };
      default:
        return state
    }
}