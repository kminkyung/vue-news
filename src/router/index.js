import Vue from 'vue';
import VueRouter from 'vue-router'; 
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history', 
	// 주소줄의 해시값(#)을 제거해줌
	routes : [
		{
			path : '/',
			redirect : '/news'
		},
		{
			// path : url 주소
			path : '/news',
			// component : url로 갔을 때 보여줄 component
			component : NewsView
		},
		{
			path : '/ask',
			component : AskView
		},
		{
			path : '/jobs',
			component : JobsView
		},
		{
			path : '/item',
			component : ItemView
		},
		{
			path : '/vue',
			component : UserView
		}
	]
})