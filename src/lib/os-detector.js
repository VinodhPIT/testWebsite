import { UAParser } from 'ua-parser-js';

export const getOs = () => {
  const parser = new UAParser();
  const os = parser.getOS();
  return os.name;
}