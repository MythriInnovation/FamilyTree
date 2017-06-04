import { FamilyTreePage } from './app.po';

describe('family-tree App', () => {
  let page: FamilyTreePage;

  beforeEach(() => {
    page = new FamilyTreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
