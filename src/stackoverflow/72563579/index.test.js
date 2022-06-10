import { ActionComponent } from './';

describe('72563579', () => {
  it('should pass', () => {
    const actionComponent = new ActionComponent();
    spyOn(actionComponent, 'getParent').and.callThrough();

    const detailPanel = actionComponent
      .getParent() //PopupBody
      .getParent() //IComponent
      .getParent() //TabPanel
      .getParent() //TabContents
      .getParent() //TabListControl
      .getParent() //TabControl
      .getParent() //DetailPanelComposition
      .getParent(); //DetailPanel

    expect(actionComponent.getParent).toHaveBeenCalledTimes(8);
  });
});
