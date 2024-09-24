const fs = require('fs');
const path = require('path');
const marked = require('marked');

const inputPath = process.argv[2]; 
const outputPath = path.join(path.dirname(inputPath), 'index.html');

fs.readFile(inputPath, 'utf8', (err, data) => {
  if (err) {
    console.error('File load error:', err);
    return;
  }

  let htmlContent;
  if (inputPath.endsWith('.md')) {
    const markdownContent = data;
    htmlContent = marked(markdownContent); 
  } else if (inputPath.endsWith('.html')) {
    htmlContent = data;
  } else {
    console.error('Not supported file type');
    return;
  }

  const finalHtml = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Static Site</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      ${htmlContent}
    </body>
    </html>
  `;

  fs.writeFile(outputPath, finalHtml, (err) => {
    if (err) {
      console.error('ファイル書き込みエラー:', err);
      return;
    }
    console.log('HTMLファイルが生成されました:', outputPath);
  });
});
