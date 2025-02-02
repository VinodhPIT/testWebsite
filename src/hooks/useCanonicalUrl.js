import { useRouter } from 'next/router';
import UsePathTranslation from '@/hooks/useee'

const useCanonicalUrl = () => {
  const router = useRouter();
  const { locale } = router;

  const getCanonicalUrl = () => {
    const baseUrl = `${process.env.LIVE_URL}/${locale}`;
    const currentPath = router.asPath;
    const translatedPath = UsePathTranslation(currentPath, locale);
    return `${baseUrl}${translatedPath}`;
  };

  return getCanonicalUrl();
};

export default useCanonicalUrl;
