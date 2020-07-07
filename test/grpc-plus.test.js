'use strict';

const mock = require('egg-mock');

describe('test/grpc-plus.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/grpc-plus-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, grpcPlus')
      .expect(200);
  });
});
