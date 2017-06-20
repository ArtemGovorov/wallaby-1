import { V8Page } from './app.po';

describe('v8 App', () => {
  let page: V8Page;

  beforeEach(() => {
    page = new V8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
