
namespace StringUtility {

export class StringManipulation {

static capitalizeFirstLetter(text: string): string {
//return text[0].toUpperCase() + text.substring(1, text.length);
return text.charAt(0).toUpperCase() + text.slice(1);
}

}
}

console.log(StringUtility.StringManipulation.capitalizeFirstLetter('game'));

