
import { useRouter } from 'next/router';


export const useNavigation = () => {
  const router = useRouter();


  const navigateTo = (path) => {
    router.push(path);
  };

  const goBack = () => {
    router.back();
  };

  const goToHome = () => {
    router.push('/');
  };

  

  return {
    navigateTo,
    goBack,
    goToHome,
    currentPath: router.pathname,
    router:router
  };
};
