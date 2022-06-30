import moment from "moment";

// const locale = window.navigator.language;

// moment.locale(locale);

// console.log(moment.locale());
let test = moment("2022-06-29").format("YYYY-MM-DD 19:20:00");
let view = moment.utc(test, "YYYY-MM-DD HH:mm:ss").unix() / 86400 + 25569;
console.log(view);
