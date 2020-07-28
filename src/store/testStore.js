import { observable, action } from "mobx";

class TodoStore {
  @observable value = 1;
  @action
  add = () => {
    this.value++;
  };
}

const store = new TodoStore();
export default store;
