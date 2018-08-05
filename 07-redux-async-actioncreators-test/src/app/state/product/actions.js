import { updateProduct } from 'thunks';

export function updateProductStarted(product) {
  return {
    type: 'UPDATE_PRODUCT_STARTED',
    product
  };
}

export function updateProductSuccessful(product, stateOfResidence, timeTaken) {
  return {
    type: 'PRODUCT_UPDATE_SUCCESSFUL',
    product,
    stateOfResidence,
    timeTaken
  };
}

export function updateProductFailure(product, err) {
  return {
    type: 'PRODUCT_UPDATE_FAILURE',
    product,
    err
  };
}

export const callUpdateProduct = (product, outcome) => updateProduct(product, outcome);
