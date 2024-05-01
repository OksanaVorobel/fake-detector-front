const storagePrefix = 'FAKEDETECTOR_';

const getStoredItem = (key: string) =>
  window.localStorage.getItem(key) as string;
const saveItem = (key: string, value: string) =>
  window.localStorage.setItem(key, value);
const deleteItem = (key: string) => window.localStorage.removeItem(key);

const storage = {
  clearToken: () => {
    deleteItem(`${storagePrefix}token`);
  },
  setToken: (token: string) => {
    saveItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  getToken: () => JSON.parse(getStoredItem(`${storagePrefix}token`)),
  getLoginTime: () => getStoredItem(`${storagePrefix}timestamp`),
  setLoginTime: () => {},
  isTokenExpired: () => {},
};

export default storage;
