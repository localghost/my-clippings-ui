import { MyClippingsPage } from './app.po';

describe('my-clippings App', () => {
  let page: MyClippingsPage;

  beforeEach(() => {
    page = new MyClippingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
