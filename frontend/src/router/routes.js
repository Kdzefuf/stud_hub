import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Questions from "../pages/Questions";
import Teachers from "../pages/Teachers";
import ExamMaterials from "../pages/ExamMaterials";
import Materials from "../pages/Materials";
import Forum from "../pages/Forum";
import PersonalAccount from "../pages/PersonalAccount";

const routes = [
  {
    path: '/',
    component: Home,
    isProtected: false,
  },
  {
    path: '/sign_up',
    component: SignUp,
    isProtected: false,
  },
  {
    path: '/sign_in',
    component: SignIn,
    isProtected: false,
  },
  {
    path: '/questions',
    component: Questions,
    isProtected: false
  },
  {
    path: '/forum',
    component: Forum,
    isProtected: false
  },
  {
    path: '/materials',
    component: Materials,
    isProtected: true
  },
  {
    path: '/examMaterials',
    component: ExamMaterials,
    isProtected: true
  },
  {
    path: '/teachers',
    component: Teachers,
    isProtected: true
  },
  {
    path: '/profile',
    component: PersonalAccount,
    isProtected: false
  }
];

export default routes;