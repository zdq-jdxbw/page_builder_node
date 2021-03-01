'use strict';

module.exports = {
  getLastHtmlString(htmlString, className1, className2) {
    const afterSplit = htmlString.split(className1)[1].split(className2)[0];
    const afterReplace = afterSplit.replace(/myhref/g, 'href');
    const arg = afterReplace.lastIndexOf('<') - afterReplace.length;
    const result = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    <style>
        html, body{ margin:0; height:100%; }
    </style>
    </head>
    <body><div style="width: 100%;height: 100%;">` + afterReplace.slice(0, arg).slice(2) + `</div></body>
    </html>`;
    return result;
  },
}
;
