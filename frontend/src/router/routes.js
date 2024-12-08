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
    isProtected: true,
  },
  {
    path: '/questions/:id', // Параметр id вопроса в URL
    component: QuestionPage,
    isProtected: true,
  },
  {
    path: '/materials',
    component: Materials,
    isProtected: true,
  },
  {
    path: '/materials/:id', // Параметр id материала в URL
    component: MaterialPage,
    isProtected: true,
  },
  {
    path: '/downloadMaterials',
    component: DownloadMaterial,
    isProtected: true,
  },
  {
    path: '/examMaterials',
    component: ExamMaterials,
    isProtected: true,
  },
  {
    path: '/profile',
    component: PersonalAccount,
    isProtected: true,
  },
  {
    path: '/askQuestion',
    component: AskQuestion,
    isProtected: true,
  }
];

export default routes;
