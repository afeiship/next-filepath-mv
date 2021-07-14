(function () {
  require('../src');

  describe('api.basic test', () => {
    test('case: rename /tmp/test.txt => /tmp/test1.txt', function () {
      var path1 = '/var/lib/nginx/tmp/test.txt';
      var res = nx.filepathMv(path1, (obj) => {
        obj.name = '1' + obj.name + '2';
        return obj;
      });
      expect(res).toBe('/var/lib/nginx/tmp/1test2.txt');
    });

    test('case: add prefix', function () {
      var path1 = '/var/lib/nginx/tmp/test.txt';
      var res = nx.filepathMv(path1, (obj) => {
        obj.prefix = 'db_';
        return obj;
      });
      expect(res).toBe('/var/lib/nginx/tmp/db_test.txt');
    });

    test('case: add suffix', function () {
      var path1 = '/var/lib/nginx/tmp/test.txt';
      var res = nx.filepathMv(path1, (obj) => {
        obj.suffix = '_suffix';
        return obj;
      });
      expect(res).toBe('/var/lib/nginx/tmp/test_suffix.txt');
    });

    test('case: rename extname', function () {
      // 特别注意:
      // name: db.tar
      // ext: .gz
      var path1 = '/var/lib/nginx/tmp/db.tar.gz';
      var res = nx.filepathMv(path1, (obj) => {
        obj.ext = '.gzz';
        return obj;
      });
      expect(res).toBe('/var/lib/nginx/tmp/db.tar.gzz');
    });

    test('case: composite', function () {
      var res = nx.filepathMv('/var/lib/nginx/tmp/test.txt', (obj) => {
        obj.prefix = 'pre_';
        obj.suffix = '_suf';
        obj.name = 'test123';
        return obj;
      });
      expect(res).toBe('/var/lib/nginx/tmp/pre_test123_suf.txt');
    });
  });
})();
