// useScrollToTop.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function useScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.history.scrollRestoration = "manual"
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
}

export default useScrollToTop;
