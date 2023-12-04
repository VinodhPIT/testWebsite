

function getCountryIcon(locale) {
    let countrySplit = locale.split('-')[0];
    switch (countrySplit) {
        case "ch":
            return "/switzerland.svg";
        case "de":
            return "/germany.svg";
        case "uk":
            return "/united-kingdom.svg";
        default:
            return '/switzerland.svg';
    }
}

function getLanguage(locale) {
    let languageSplit = locale.split('-')[1];
    switch (languageSplit) {
        case "en":
            return "English";
        case "de":
            return "German";
        case "it":
            return "Italy";
        default:
            return 'English';
    }
}


module.exports = {
    getCountryIcon,
    getLanguage,
};
