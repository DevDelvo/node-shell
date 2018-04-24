const pwd = require('./pwd')

process.stdout.write('prompt >' );

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    return pwd(cmd);
  } else {
    process.stdout.write('You typed: ' + cmd)
    process.stdout.write('\nprompt >' );
  }
});





