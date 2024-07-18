function getCountryIcon(locale) {
  let countrySplit = locale.split("-")[0];
  switch (countrySplit) {
    case "ch":
      return "/switzerland.svg";
    case "de":
      return "/germany.svg";
    case "gb":
      return "/united-kingdom.svg";

    case "pl":
      return "/poland.svg";
    case "sw":
      return "/sweden.svg";
    case "ro":
      return "/romania.svg";

    case "cz":
      return "/czech republic.svg";

    case "hu":
      return "/hungary.svg";

    case "au":
      return "/austria.svg";

    case "bl":
      return "/belgium.svg";

    case "dk":
      return "/denmark.svg";

    case "fr":
      return "/france.svg";

    case "gr":
      return "/greece.svg";

    case "ie":
      return "/ireland.svg";

    case "nl":
      return "/netherlands.svg";

    case "pt":
      return "/portugal.svg";

    case "es":
      return "/spain.svg";

    case "it":
      return "/italy.svg";

    case "bg":
      return "/bulgaria.svg";

    case "cy":
      return "/cyprus.svg";

    case "fi":
      return "/finland.svg";

    case "et":
      return "/estonia.svg";

    case "lv":
      return "/latvia.svg";

    case "lt":
      return "/lithuania.svg";

    case "lu":
      return "/luxembourg.svg";

    case "mt":
      return "/malta.svg";

    case "sk":
      return "/slovakia.svg";

    case "sl":
      return "/slovenia.svg";

    default:
      return "/switzerland.svg";
  }
}

function getLanguage(locale) {
  switch (locale.split("-")[1]) {
    case "en":
      return "English";
      case "es":
        return "Español";
       case "de":
      return "Deutsch";
    default:
      return "English";
  }
}

module.exports = {
  getCountryIcon,
  getLanguage,
};
