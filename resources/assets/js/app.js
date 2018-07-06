
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/App';

import state from './state/state';
import mutations from './state/mutations';

Vue.use(Vuex);

let store = new Vuex.Store({state, mutations});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


new Vue({ 
    store,
    render: h => h(App) 
 }).$mount('#game');