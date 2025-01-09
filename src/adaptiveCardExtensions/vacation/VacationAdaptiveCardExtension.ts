import type { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { VacationPropertyPane } from './VacationPropertyPane';

export interface IVacationAdaptiveCardExtensionProps {
  title: string;
}

export interface IVacationAdaptiveCardExtensionState {
}

const CARD_VIEW_REGISTRY_ID: string = 'Vacation_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'Vacation_QUICK_VIEW';

export default class VacationAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IVacationAdaptiveCardExtensionProps,
  IVacationAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: VacationPropertyPane;

  public onInit(): Promise<void> {
    this.state = { };

    // registers the card view to be shown in a dashboard
    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    // registers the quick view to open via QuickView action
    this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    return Promise.resolve();
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'Vacation-property-pane'*/
      './VacationPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.VacationPropertyPane();
        }
      );
  }

  protected renderCard(): string | undefined {
    return CARD_VIEW_REGISTRY_ID;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return this._deferredPropertyPane?.getPropertyPaneConfiguration();
  }
}
