
function resolve(store) {

  const propList = [];
  const promiseList = [];

  for (let prop in store) {
    if (store[prop] && store[prop].then) {
      propList.push(prop);
      promiseList.push(store[prop]);
    }
  }

  const promise = Promise
    .all(promiseList)
    .then((arrResults) => {
      arrResults.forEach(
        (result, index) => {
          store[propList[index]] = result;
        });

      return store;
    });

  return promise;
}

export default resolve;
