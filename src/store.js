import Vue from "vue";
import Vuex from "vuex";
export {
    default as Add
}
from "./views/Add.vue";
export {
    default as Movies
}
from "./views/Movies.vue";

Vue.use(Vuex);

//initial state
// if (window.matchMedia("{prefers-color-scheme: dark}").matches) {
//   window.localStorage.setItem("isDarkMode", "true");
// }
const randomId = function() {
    function s4() {
        return Math.random() * 9;
    }
    return s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4();
};

const userSelectedDarkMode =
    window.localStorage.getItem("isDarkMode") === "true";

const state = {
    isDarkMode: userSelectedDarkMode,
    movies: {}
};

//getters
const getters = {
    isDarkMode() {
        return state.isDarkMode;
    }
};

//mutation
const mutations = {
    toggleDarkMode() {
        if (state.isDarkMode === true) {
            state.isDarkMode = false;
            document.body.style.background = "#f0f3f5";
            window.localStorage.setItem("isDarkMode", "false");
        } else {
            state.isDarkMode = true;
            document.body.style.background = "#212c4f";
            window.localStorage.setItem("isDarkMode", "true");
        }
    },
    addMovie() {
        let id = randomId();
        state.movies[id] = Object.assign({
            id: id
        });
    }
};

//actions
const actions = {
    triggerDarkMode(context) {
        context.commit("toggleDarkMode");
    },
    add_Movie(context, data) {
        context.commit('addMovie', {
            movies: data
        });
    }
};
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});