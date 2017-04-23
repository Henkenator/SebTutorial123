import { SebTutorialPage } from './app.po';

describe('seb-tutorial App', () => {
  let page: SebTutorialPage;

  beforeEach(() => {
    page = new SebTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
