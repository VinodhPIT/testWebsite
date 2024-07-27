
import { useRouter } from 'next/router';
import pathTranslations from '@/utils/pathTranslations';

const usePathTranslation = (path) => {
  const { locale } = useRouter();
  return pathTranslations[path] ? pathTranslations[path][locale.split("-")[1]] || path : path;
};

export default usePathTranslation;
