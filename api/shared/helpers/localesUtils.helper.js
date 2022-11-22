const i18n = require('i18n');
const { FIELD_NAME } = require('./constant.helper');
const appConstant = require('./constant.helper')

const VIETNAM = appConstant.HEADER.LOCALE_VIETNAM;
const ENGLISH = appConstant.HEADER.LOCALE_DEFAULT;

const userMessage = (lang = ENGLISH) => {
    lang = checkLang(lang);
    const language = i18n.__({
        phrase: 'USER',
        locale: lang,
    });
    return language;
}


const encodeMessage = (lang = ENGLISH) => {
    lang = checkLang(lang);
    const language = i18n.__({
        phrase: 'ENCODE_DECODE',
        locale: lang,
    });
    return language;
}
/* * ***************************************** Function helper ************************************************ */

function checkLang(lang = ENGLISH) {
    if (lang !== VIETNAM && lang !== ENGLISH) {
        lang = ENGLISH;
    }
    return lang
}

function commonMessage(lang = ENGLISH) {
    lang = checkLang(lang);
    const language = i18n.__({
        phrase: 'COMMON',
        locale: lang,
    });
    return language;
}

function validateMessage(lang = ENGLISH) {
    lang = checkLang(lang);
    const language = i18n.__({
        phrase: 'VALIDATE',
        locale: lang,
    });
    return language;
}

function adminMessage(lang = ENGLISH) {
    lang = checkLang(lang);
    const language = i18n.__({
        phrase: 'ADMIN',
        locale: lang,
    });
    return language;
}

function mailMessage(lang = ENGLISH) {
    lang = checkLang(lang);
    const language = i18n.__({
        phrase: 'MAIL',
        locale: lang,
    });
    return language;
}

const adjustProductMessage = (productName, quantity, lang = ENGLISH) => {
    let text = `At the present time, Products ${productName} can only buy ${quantity} products. Please readjust the quantity.`
    if (lang === ENGLISH) {
        text = `現時点では、Products ${productName}は${quantity}製品のみを購入できます。 数量を再調整してください。`
    }
    return text;
}

const outOfStoreMessage = (productName, lang = ENGLISH) => {
    let text = `Product ${productName} is out of stock. Please come back later`
    if (lang === ENGLISH) {
        text = ` 商品${productName}は在庫切れです。 商品が補充されるまでしばらくお待ちください。`
    }
    return text;
}

const paymentMessage = (lang = ENGLISH) => {
    lang = checkLang(lang);
    const language = i18n.__({
        phrase: 'PAYMENT',
        locale: lang,
    });
    return language;
}

module.exports = {
    userMessage,
    encodeMessage,
    commonMessage,
    validateMessage,
    adminMessage,
    mailMessage,
    adjustProductMessage,
    outOfStoreMessage,
    paymentMessage
}
