const appConstant = require('../../shared/helpers/constant.helper');
const localeUtils = require('../../shared/helpers/localesUtils.helper');
const emailHelper = require('../../shared/helpers/email.helper');

const sendEmail = async (subject, body, email, lang = appConstant.HEADER.LOCALE_DEFAULT, path) => {
    const content = `
    <section>
            ${body}
        <div>
            <br>
            ${localeUtils.mailMessage(lang).FOOTER.THANK_YOU}
            <br>
            ${localeUtils.mailMessage(lang).FOOTER.QUESTION}
            <br>
            ${localeUtils.mailMessage(lang).FOOTER.FILESTAR_INC}
        </div>
    </section>
    `
    emailHelper.sendEmail(subject, email, null, null, content, null, null, path);
}

module.exports = {
    sendEmail
}
