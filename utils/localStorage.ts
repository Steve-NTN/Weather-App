const createStorage = (name: string) => {
  const store = JSON.parse(localStorage.getItem(name) || "{}");
  const save = () => {
    localStorage.setItem(name, JSON.stringify(store));
  };

  const storage = {
    get(key: string) {
      return store[key];
    },
    set(key: any, value: any) {
      store[key] = value;
      save();
    },
  };

  return storage;
};

export const authStore = createStorage("auth");
