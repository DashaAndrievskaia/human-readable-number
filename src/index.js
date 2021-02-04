module.exports = function toReadable(number) {
    const from0To19 = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const tensStrings = [
        'ten', 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if (number === 0) {
        return from0To19[0];
    }

    let result = "";
    const hundred = Math.floor(number / 100);
    if (hundred) {
        result += from0To19[hundred] + " hundred";
    }

    const left = number % 100;
    if (left === 0) {
        return result;
    }

    if (left >= 1 && left <= 19) {
        if (result) {
            result += " ";
        }

        result += from0To19[left];
    } else {
        const tens = Math.floor(left / 10);
        if (result) {
            result += " ";
        }

        result += tensStrings[tens - 1];
        const leftNum = left % 10;
        if (leftNum) {
            if (result) {
                result += " ";
            }

            result += from0To19[leftNum];
        }
    }

    return result;
};