// hooks/useRequestPath.js
import { useMemo } from 'react';
import { useRouter } from 'next/router';


export function useRequestPath(isMobileView) {
  const router = useRouter();

  return useMemo(() => {
    return isMobileView
      ? `/${router.locale}/request-Form`
      : `/${router.locale}/createRequest`;
  }, [isMobileView, router.locale]);
}
