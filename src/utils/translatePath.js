// translatePath.js
import pathTranslations from '@/utils/pathTranslations';

const translatePath = (path, targetLocale) => {
  for (const [originalPath, translations] of Object.entries(pathTranslations)) {
    if (path.startsWith(originalPath)) {
      return translations[targetLocale.split("-")[1]] || path;
    }
  }
  return path;
};

export default translatePath;
