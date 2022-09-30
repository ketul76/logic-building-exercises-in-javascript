//check the alphabet is a vowel or Consonant.

let alphabet = 'z';
if(alphabet === 'a' || alphabet === 'e' || alphabet === 'i' || alphabet === 'o' || alphabet === 'u'){
  console.log("This Alphabet Is a Vowel");
}
else if(alphabet >= 'a' && alphabet <= 'z'){
  console.log("This Alphabet Is a Consonant");
}
else{
  console.log('not a Alphabet');
}