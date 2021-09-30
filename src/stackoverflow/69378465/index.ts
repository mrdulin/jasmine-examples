import q from 'q';

const utility = {
  someFunction(a, b, c) {
    var dfd = q.defer();
    this.getInfo(b, c)
      .then((data) => {
        dfd.resolve(data);
      })
      .catch((error) => {
        dfd.reject(error);
      });
    return dfd.promise;
  },
  async getInfo(b, c) {
    return 'real data';
  },
};

export { utility };
