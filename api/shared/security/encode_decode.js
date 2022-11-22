const configCommon = require('../helpers/configCommon.helper')
const encodeDecodeKey = configCommon.getEncodeDecode()

const setSecretKey = (isServer = false) => {
    let secretKey;
    if (isServer) {
        secretKey = encodeDecodeKey.client_key;
    } else {
        secretKey = encodeDecodeKey.server_key;
    }
    return secretKey;
}

const encode = (content, isServer = false) => {
    setSecretKey(isServer);
    let indexContent = 0;
    let newContent = 'J';
    let lengthContent = content.length;
    const baseIndex = 6;
    const AdvancedIndex = 12;

    newContent += lengthContent * getRandomInt(9) + 'E';
    while (indexContent < lengthContent) {
        if (content.charCodeAt(indexContent) < 96) {
            newContent += content.charCodeAt(indexContent) + baseIndex;
            newContent +=
                String.fromCharCode(getRandomIntRange(65, 90)) +
                getRandomInt(9) +
                String.fromCharCode(getRandomIntRange(97, 122));
        }
        if (content.charCodeAt(indexContent) > 96) {
            newContent += content.charCodeAt(indexContent) + AdvancedIndex;
            newContent +=
                String.fromCharCode(getRandomIntRange(97, 122)) +
                getRandomInt(9) +
                String.fromCharCode(getRandomIntRange(65, 90));
        }
        indexContent++;
    }
    return newContent;
}

const decode = (content) => {
    let newContent = '';
    let lengthContent = content.length;
    const baseIndex = 6;
    const AdvancedIndex = 12;
    let indexContent = content.indexOf('E');
    while (indexContent < lengthContent) {
        let tmp = indexContent;
        if (
            isNumber(content.charCodeAt(tmp)) &&
            isNumber(content.charCodeAt(++tmp)) &&
            isNumber(content.charCodeAt(++tmp))
        ) {
            let tmpNumber = indexContent;
            const numberCode =
                content[tmpNumber] + content[++tmpNumber] + content[++tmpNumber];
            if (numberCode) {
                newContent += String.fromCharCode(Number(numberCode) - AdvancedIndex);
            }
            indexContent++;
            continue;
        }
        let tmpSecond = indexContent;
        let tmpBefore = indexContent;
        if (
            isLetter(content.charCodeAt(--tmpBefore)) &&
            isNumber(content.charCodeAt(tmpSecond)) &&
            isNumber(content.charCodeAt(++tmpSecond)) &&
            isLetter(content.charCodeAt(++tmpSecond))
        ) {
            let tmpNumberSecond = indexContent;
            const numberCode = content[tmpNumberSecond] + content[++tmpNumberSecond];
            if (numberCode) {
                newContent += String.fromCharCode(Number(numberCode) - baseIndex);
            }
        }
        indexContent++;
    }
    return newContent;
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const getRandomIntRange = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const isNumber = (index) => {
    return index >= 48 && index <= 57;
};

const isLetter = (index) => {
    return (index >= 65 && index <= 90) || (index >= 97 && index <= 122);
};

module.exports = {
    encode,
    decode
}