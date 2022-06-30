import moment from "moment";

// const locale = window.navigator.language;

// moment.locale(locale);

// console.log(moment.locale());
let test = moment().format("YYYY-MM-DD HH:mm:ss");
let view = moment.utc(test, "YYYY-MM-DD HH:mm:ss").unix() / 86400 + 25569;
console.log(view);
