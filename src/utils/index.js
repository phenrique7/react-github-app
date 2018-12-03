
function setItemStorage(key, value) {
  if (typeof key === 'string' && typeof value === 'string') {
    window.localStorage.setItem(key, value);
  }
}

function getItemStorage(key) {
  if (typeof key === 'string') {
    return window.localStorage.getItem(key);
  }

  return null;
}

function removeItemStorage(key) {
  if (typeof key == 'string') {
    window.localStorage.removeItem(key);
  }
}

function isEmptyObject(object) {
  return typeof object === 'object' && Object.values(object).length === 0;
}

function hasUserFetched(userFetched) {
  return typeof userFetched === 'string' && userFetched.length > 0;
}

export {
  setItemStorage,
  getItemStorage,
  removeItemStorage,
  isEmptyObject,
  hasUserFetched,
};
