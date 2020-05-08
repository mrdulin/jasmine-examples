const https = require('https');

const crazyfunc = (v) => v;
const logger = console;

const obj = {
  csvParser(data) {
    return data;
  },

  fn() {
    const url = 'example.com';
    return new Promise((resolve, reject) => {
      https.get(url, async (response) => {
        response
          .pipe(this.csvParser)
          .pipe(crazyfunc)
          .on('finish', () => {
            logger.info('File process finished');
            resolve();
          })
          .on('error', (err) => {
            if (err) {
              reject(err);
            }
          });
      });
    });
  },
};

module.exports = obj;
