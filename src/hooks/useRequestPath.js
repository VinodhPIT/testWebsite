// hooks/useRequestPath.js
import { useMemo } from 'react';
import { useRouter } from 'next/router';


export function useRequestPath(isSmallDevice) {
  const router = useRouter();

  return useMemo(() => {
    return isSmallDevice
      ? `/${router.locale}/request-Form`
      : `/${router.locale}/createRequest`;
  }, [isSmallDevice, router.locale]);
}
