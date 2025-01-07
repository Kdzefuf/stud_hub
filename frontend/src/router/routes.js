import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Questions from "../pages/Questions";
import ExamMaterials from "../pages/ExamMaterials";
import Materials from "../pages/Materials";
import PersonalAccount from "../pages/PersonalAccount";
import MaterialPage from "../pages/Material";
import AskQuestion from "../pages/AskQuestion";
import QuestionPage from "../pages/Question";
import DownloadMaterial from "../pages/DownloadMaterial";

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
    isProtected: false,
  },
  {
    path: '/questions/:id', // Параметр id вопроса в URL
    component: QuestionPage,
    isProtected: false,
  },
  {
    path: '/materials',
    component: Materials,
    isProtected: false,
  },
  {
    path: '/materials/:id', // Параметр id материала в URL
    component: MaterialPage,
    isProtected: false,
  },
  {
    path: '/downloadMaterials',
    component: DownloadMaterial,
    isProtected: false,
  },
  {
    path: '/examMaterials',
    component: ExamMaterials,
    isProtected: false,
  },
  {
    path: '/profile',
    component: PersonalAccount,
    isProtected: false,
  },
  {
    path: '/askQuestion',
    component: AskQuestion,
    isProtected: false,
  }
];

export default routes;
