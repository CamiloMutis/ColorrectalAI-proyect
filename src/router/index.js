import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import AuthView from '../views/AuthView.vue'
import LoadingView from '../views/LoadingView.vue'
import UploadView from '../views/UploadView.vue'
import ResultsView from '../views/ResultsView.vue'
import CompareView from '../views/CompareView.vue'
import HistoryView from '../views/HistoryView.vue'
import DetailView from '../views/DetailView.vue'
export default createRouter({history:createWebHistory(),scrollBehavior:()=>({top:0}),routes:[
{path:'/',name:'public-home',component:HomeView},{path:'/inicio',name:'dashboard',component:DashboardView},
{path:'/acceso',name:'login',component:AuthView,props:{mode:'login'}},{path:'/registro',name:'register',component:AuthView,props:{mode:'register'}},
{path:'/carga',name:'upload',component:UploadView},{path:'/analizando',name:'loading',component:LoadingView},
{path:'/resultados/:id?',name:'results',component:ResultsView},{path:'/comparacion',name:'comparison',component:CompareView},
{path:'/historial',name:'history',component:HistoryView},{path:'/historial/:id',name:'history-detail',component:DetailView}]})
