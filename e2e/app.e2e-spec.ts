import { CooperativeEditorPage } from './app.po';

describe('cooperative-editor App', () => {
  let page: CooperativeEditorPage;

  beforeEach(() => {
    page = new CooperativeEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
