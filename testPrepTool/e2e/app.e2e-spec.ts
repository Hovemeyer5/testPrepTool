import { TestPrepToolPage } from './app.po';

describe('test-prep-tool App', () => {
  let page: TestPrepToolPage;

  beforeEach(() => {
    page = new TestPrepToolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
