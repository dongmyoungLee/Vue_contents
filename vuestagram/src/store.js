import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "test",
      age: 20,
      likes: 0,
      likeActive: false,
      more: {},
    };
  },
  mutations: {
    nameChange(state) {
      state.name = "testChange";
    },
    plus(state, payload) {
      state.age += payload;
    },
    likePlus(state) {
      if (state.likeActive == false) {
        state.likes++;
        state.likeActive = true;
      } else {
        state.likes--;
        state.likeActive = false;
      }
    },
    setMore(state, payload) {
      state.more = payload;
    },
  },
  actions: {
    getData(context) {
      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then((result) => {
          context.commit("setMore", result.data);
        });
    },
  },
});

export default store;
