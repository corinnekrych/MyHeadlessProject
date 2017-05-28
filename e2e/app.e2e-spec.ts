import { MyHeadlessProjectPage } from './app.po';

describe('my-headless-project App', () => {
  let page: MyHeadlessProjectPage;

  beforeEach(() => {
    page = new MyHeadlessProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
