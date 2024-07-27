// usePathTranslation.js
import { useRouter } from 'next/router';
import pathTranslations from '@/utils/pathTranslations';

const usePathTranslation = (path, targetLocale) => {
  return pathTranslations[path] ?pathTranslations[path][targetLocale.split("-")[1]] || path : path;
};

export default usePathTranslation;
