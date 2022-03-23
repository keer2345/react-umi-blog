export default [
  { path: '/', redirect: '/login' },
  { path: '/login', component: '@/pages/Login' },
  { path: '/home', component: '@/pages/Home' },
  {
    path: '/blog',
    component: '@/layouts',
    routes: [
      { path: '/blog/article', component: '@/pages/Article' },
      { path: '/blog/articleList', component: '@/pages/ArticleList' },
      { path: '/blog/user', component: '@/pages/User' },
    ],
  },
]
