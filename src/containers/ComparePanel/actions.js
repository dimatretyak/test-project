import { ROTATE_PRODUCT, SWITCH_UNIT } from '../../constants/actions';

export function rotateProduct(product) {
    return {
        type: ROTATE_PRODUCT
    };
}

export function switchUnit(unit) {
  return {
    type: SWITCH_UNIT,
    unit
  }
}