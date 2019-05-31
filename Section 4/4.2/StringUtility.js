var StringUtility;
(function (StringUtility) {
    var StringManipulation = /** @class */ (function () {
        function StringManipulation() {
        }
        // this is a very good function
        StringManipulation.capitalizeAllFirstLetters = function (text) {
            var words = text.split(' ');
            for (var i = 0; i < words.length; i++) {
                var firstLetter = words[i].charAt(0).toUpperCase();
                words[i] = firstLetter + words[i].substr(1).toLowerCase();
            }
            return words.join(' ');
        };
        return StringManipulation;
    }());
    StringUtility.StringManipulation = StringManipulation;
})(StringUtility || (StringUtility = {}));
StringUtility.StringManipulation.capitalizeAllFirstLetters('real madrid');
