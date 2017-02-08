import { DbAppPage } from './app.po';

describe('db-app App', function() {
  let page: DbAppPage;

  beforeEach(() => {
    page = new DbAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
