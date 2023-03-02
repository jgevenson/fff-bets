export default function concatArray(b) {
  let text = "";
  if (b.length === 1) {
    text = b;
  } else {
    for (let i = 0; i < b.length; i++) {
      text += b[i] + ", ";
    }
  }
  return text;
};
