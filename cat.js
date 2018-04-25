const fs = require('fs');

// module.exports = catFunc = (file) => {
//   fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//       throw err
//     } else {
//       console.log(data);
//       process.stdout.write('\nprompt >');
//     }
//   });
// };

module.exports = catFunc = (file, done) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      done(err.stack);
    } else {
      // console.log(data);
      // process.stdout.write('\nprompt >');
      done(data);

    }
  });
};
