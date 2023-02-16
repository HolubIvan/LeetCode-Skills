var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  for (const letter of magazine) {
    ransomNote = ransomNote.replace(letter, "");
  }
  if (!ransomNote) {
    return true;
  }
  return false;
};
