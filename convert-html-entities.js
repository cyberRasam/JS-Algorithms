function convertHTML(str) {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };

  return str.replace(/([&<>\"'])/g, (match) => entities[match]);
}

convertHTML('Dolce & Gabbana');
//should return the string Dolce &amp; Gabbana.
convertHTML('Stuff in "quotation marks"');
// should return the string Stuff in &quot;quotation marks&quot;.
