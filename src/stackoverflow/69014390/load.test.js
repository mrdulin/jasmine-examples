const fs = require('fs');
const load = require('./load');

describe('69014390', () => {
  it('should read file', () => {
    spyOn(fs, 'readFile').and.callFake((path, options, callback) => {
      callback(null, JSON.stringify({ name: 'teresa teng' }));
    });
    spyOn(console, 'log');
    load('teresa teng');
    expect(fs.readFile).toHaveBeenCalledWith('visitor_teresa_teng.json', 'utf8', jasmine.any(Function));
    expect(console.log).toHaveBeenCalledWith({ name: 'teresa teng' });
  });

  it('should handle error', () => {
    const error = new Error('ENOENT');
    spyOn(fs, 'readFile').and.callFake((path, options, callback) => {
      callback(error);
    });
    spyOn(console, 'log');
    load('teresa teng');
    expect(fs.readFile).toHaveBeenCalledWith('visitor_teresa_teng.json', 'utf8', jasmine.any(Function));
    expect(console.log).toHaveBeenCalledWith('Error reading file from disk:', error);
  });
});
