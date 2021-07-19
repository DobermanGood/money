import Categories from './components/pages/Categories'
import Posts from './components/pages/Posts'
import Post from './components/pages/Post'

export default [
  { name: 'categories', path: '/', component: Categories },
  { name: 'posts', path: '/posts', component: Posts },
  { name: 'posts.view', path: '/posts/:id', component: Post }
]

