function cipher(str, shift) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    output += String.fromCharCode((str.charCodeAt(i) + shift) % 122  % 26 + 97);
  }
  return output;
}

console.log(cipher("abcdefg", 1));