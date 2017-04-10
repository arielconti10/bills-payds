import Hello from '@/components/Hello'
import AccountsList from '../components/Accounts/List'
import AccountsView from '../components/Accounts/View'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/contas',
    component: AccountsList
  },
  {
    path: '/contas/:id',
    component: AccountsView
  }
]

export default routes
