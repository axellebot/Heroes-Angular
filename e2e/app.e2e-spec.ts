import { VitrinePage } from './app.po';

describe('vitrine App', () => {
  let page: VitrinePage;

  beforeEach(() => {
    page = new VitrinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
