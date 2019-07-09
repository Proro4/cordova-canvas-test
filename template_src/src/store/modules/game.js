import {
    CANVAS_INFO
} from '../mutation-types.js';

const state = {
    canvasInfo: {
        height: 300,
        width: 300
    },
};

const getters = {
    canvasInfo: state => state.canvasInfo,
};

const mutations = {

};

export default {
    namespaced:true,
    state,
    getters,
    mutations,

}