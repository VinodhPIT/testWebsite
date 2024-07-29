
import pathTranslations from '@/utils/pathTranslations';

const   UsePathTranslation = (path, newLocale) => {
  const locale = newLocale 
  const lng = locale.split('-')[1];

  // Split the path to identify base and dynamic segments
  const pathParts = path.split('/');
  const dynamicSegment = pathParts.pop(); 
  const basePath = pathParts.join('/'); 

  const dynamicBasePath = `${basePath}/:slug*`;
  if (pathTranslations[dynamicBasePath] && pathTranslations[dynamicBasePath][lng]) {
    // Reconstruct the path with the translated base path and dynamic segment
    const translatedPath = pathTranslations[dynamicBasePath][lng].replace(':slug*', dynamicSegment);
    return translatedPath;
  }
  if (pathTranslations[basePath] && pathTranslations[basePath][lng]) {
    return pathTranslations[basePath][lng];
  }

  if (pathTranslations[path] && pathTranslations[path][lng]) {
    return pathTranslations[path][lng];
  }

  return path;
};

export default UsePathTranslation;
