import { Posts } from './../components/Features/Posts';
import { Dashboard } from "../components/Features";
import DashboardIcon from '@mui/icons-material/Dashboard';
// import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';

const routes = [
  {
    label: 'Dashboard',
    path: '/',
    exact: false,
    component: Dashboard,
    icon: DashboardIcon
  },
  {
    label: 'Posts',
    path: '/post',
    exact: true,
    component: Posts,
    icon: PostAddIcon
  }
]

export default routes