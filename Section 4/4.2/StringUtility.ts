
namespace StringUtility {
  export class StringManipulation {

    // this is a very good function
    static capitalizeAllFirstLetters(text: string): string {
      let words = text.split(' ');
      for(let i=0; i<words.length; i++)
      {
        let firstLetter = words[i].charAt(0).toUpperCase();
        words[i] = firstLetter + words[i].substr(1).toLowerCase();
      }
      return words.join(' ');
    }
  }
}

StringUtility.StringManipulation.capitalizeAllFirstLetters('real madrid');
