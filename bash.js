const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl');

process.stdout.write('prompt >' );

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    return pwd();
  } else if (cmd === 'ls') {
    return ls();
  } else if (cmd.slice(0,3) === 'cat') {
    return cat(cmd.slice(4));
  } else if (cmd.slice(0,4) === 'curl') {
    return curl(cmd.slice(5));
  } else {
    process.stdout.write('You typed: ' + cmd)
    process.stdout.write('\nprompt >' );
  }
});
