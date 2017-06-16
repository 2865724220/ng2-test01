import { TestHeroes01Page } from './app.po';

describe('test-heroes01 App', () => {
  let page: TestHeroes01Page;

  beforeEach(() => {
    page = new TestHeroes01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
