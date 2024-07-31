import pathTranslations from '@/utils/pathTranslations';

const UsePathTranslation = (path, newLocale) => {
  const locale = newLocale;
  const lng = locale.split('-')[1];

  // Split the path to identify base and dynamic segments
  const pathParts = path.split('/');
  const dynamicSegment = pathParts.pop(); 
  const basePath = pathParts.join('/'); 

  // Construct dynamic base path with slug pattern
  const dynamicBasePath = `${basePath}/:slug*`;

  // Check if there is a translation for dynamic base path
  if (pathTranslations[dynamicBasePath] && pathTranslations[dynamicBasePath][lng]) {
    const translatedPath = pathTranslations[dynamicBasePath][lng].replace(':slug*', dynamicSegment);
    return translatedPath;
  }

  // Check if there is a translation for base path without dynamic segments
  if (pathTranslations[basePath] && pathTranslations[basePath][lng]) {
    return pathTranslations[basePath][lng];
  }

  // Check for exact match path translation
  if (pathTranslations[path] && pathTranslations[path][lng]) {
    return pathTranslations[path][lng];
  }

  // Return the original path if no translation found
  return path;
};

export default UsePathTranslation;
