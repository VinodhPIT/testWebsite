export function detectOS() {
    const userAgent = navigator.userAgent;
    if (/Android/i.test(userAgent)) {
      return 'Android';
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      return 'iOS';
    } else if (/Windows/i.test(userAgent)) {
      return 'Windows';
    } else if (/Mac/i.test(userAgent)) {
      return 'MacOS';
    } else if (/Linux/i.test(userAgent)) {
      return 'Linux';
    } else {
      return 'Unknown';
    }
  }
  