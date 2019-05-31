var StringUtility;
(function (StringUtility) {
    var StringManipulation = /** @class */ (function () {
        function StringManipulation() {
        }
        StringManipulation.capitalizeFirstLetter = function (text) {
            //return text[0].toUpperCase() + text.substring(1, text.length);
            return text.charAt(0).toUpperCase() + text.slice(1);
        };
        return StringManipulation;
    }());
    StringUtility.StringManipulation = StringManipulation;
})(StringUtility || (StringUtility = {}));
console.log(StringUtility.StringManipulation.capitalizeFirstLetter('game'));
