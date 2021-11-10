import request from 'request';

export function getProducts() {
  return new Promise((resolve, reject) => {
    request.get({ url: 'http://ascott.com/products' }, (err, response, body) => {
      if (err) return reject(err);
      const result = JSON.parse(body);
      if (result.value == 'yes') return resolve(1);
      return resolve(0);
    });
  });
}
