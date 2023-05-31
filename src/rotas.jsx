import {
  HomeIcon,
  UserPlusIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  LightBulbIcon
} from "@heroicons/react/24/solid";

export const rotas = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
  },
  {
    icon: UserGroupIcon,
    name: "Sobre Nós",
    path: "/about-us",
  },
  {
    icon: QuestionMarkCircleIcon,
    name: "FAQ",
    path: "/faq",
    
  },
  {
    icon: LightBulbIcon,
    name: "Soluções",
    path: "/solutions",

  },
  {
    icon: UserPlusIcon,
    name: "seja parceiro",
    path: "/seja-parceiro",
   
  },
 
];

export default rotas;
