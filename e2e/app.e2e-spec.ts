import { FrndzzyPage } from './app.po';

describe('frndzzy App', function() {
  let page: FrndzzyPage;

  beforeEach(() => {
    page = new FrndzzyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
