function load(nameString) {
  nameString = nameString.toLowerCase().split(' ');
  const fs = require('fs');
  fs.readFile(`visitor_${nameString[0]}_${nameString[1]}.json`, 'utf8', (err, visitorInfo) => {
    if (err) {
      console.log('Error reading file from disk:', err);
      return;
    }
    try {
      console.log(JSON.parse(visitorInfo));
    } catch {
      console.log('Error parsing visitor info', err);
    }
  });
}

module.exports = load;
