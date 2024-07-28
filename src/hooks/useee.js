import { useRouter } from 'next/router';
import pathTranslations from '@/utils/pathTranslations';

const usePathTranslation = (path, newLocale) => {
  const locale = newLocale || useRouter().locale;
  const lng = locale.split('-')[1];

  // Split the path to identify base and dynamic segments
  const pathParts = path.split('/');
  const dynamicSegment = pathParts.pop(); // Remove and get the last part (potentially dynamic segment)
  const basePath = pathParts.join('/'); // Rejoin the remaining parts to get the base path

  // Check if there is a translation for the base path with dynamic segment
  const dynamicBasePath = `${basePath}/:slug*`;
  if (pathTranslations[dynamicBasePath] && pathTranslations[dynamicBasePath][lng]) {
    // Reconstruct the path with the translated base path and dynamic segment
    const translatedPath = pathTranslations[dynamicBasePath][lng].replace(':slug*', dynamicSegment);
    return translatedPath;
  }

  // Check if there is a translation for the exact base path (static)
  if (pathTranslations[basePath] && pathTranslations[basePath][lng]) {
    return pathTranslations[basePath][lng];
  }

  // Handle normal routes without dynamic segments
  if (pathTranslations[path] && pathTranslations[path][lng]) {
    return pathTranslations[path][lng];
  }

  return path; // Fallback to the original path if no translation is found
};

export default usePathTranslation;
