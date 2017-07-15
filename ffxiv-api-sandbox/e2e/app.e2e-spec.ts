import { FfxivApiSandboxPage } from './app.po';

describe('ffxiv-api-sandbox App', () => {
  let page: FfxivApiSandboxPage;

  beforeEach(() => {
    page = new FfxivApiSandboxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
