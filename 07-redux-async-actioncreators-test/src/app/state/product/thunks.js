import { updateProductStarted, updateProductFailure, updateProductSuccessful } from 'actions';

// This is only an example to create asynchronism and record time taken
function updateUser(outcome) {
  const promiseCount = Math.random() * 1000 + 1000;
  console.log('in updateuser');
  return new Promise( // Returns a promise will be fulfilled after a random interval
    function (resolve, reject) {
      console.log('promiseCount: ', promiseCount);
      window.setTimeout(
        function () {
          if (outcome === 'SUCCESS') {
            console.log('outcome ', outcome);
            // We fulfill the promise with the time taken to fulfill
            resolve(promiseCount);
          } else if (outcome === 'FAILURE') {
            reject(new Error('something bad happened'));
          }
        }, Math.random() * 1000 + 1000);
    }
  );
}

// our thunk action creator which dispatches the actions above asynchronously
export function updateProduct(product, outcome) {
  console.log('in updateproduct');
  return (dispatch) => {
    // dispatch action as the async process has begun
    console.log('in dispatch');
    dispatch(updateProductStarted(product));

    return Promise.resolve(updateUser(outcome))
      .then((timeTaken) => {
        console.log('after updateUser');
        dispatch(updateProductSuccessful(product, timeTaken));
        // Yay! dispatch action because it worked
      })
      .catch((error) => {
        // if our updateUser function ever rejected - currently never does -
        // oh no! dispatch action because of error
        dispatch(updateProductFailure(product, error));
      });
  };
}
