// "Heavily inspired" on JH demo
const createStore = () => {
  let user = { name: "" };

  const subscribers = [];

  return {
    get user() {
      return user;
    },
    set user(name) {
      user.name = name;
      subscribers.forEach((fn) => fn());
    },
    subscribe(fn) {
      subscribers.push(fn);
    },
  };
};

const store = createStore();

export default store;
