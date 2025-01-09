import {
  BaseComponentsCardView,
  ComponentsCardViewParameters,
  BasicCardView,
  IExternalLinkCardAction,
  IQuickViewCardAction
} from '@microsoft/sp-adaptive-card-extension-base';
// import * as strings from 'VacationAdaptiveCardExtensionStrings';
import {
  IVacationAdaptiveCardExtensionProps,
  IVacationAdaptiveCardExtensionState,
  QUICK_VIEW_REGISTRY_ID
} from '../VacationAdaptiveCardExtension';

export class CardView extends BaseComponentsCardView<
  IVacationAdaptiveCardExtensionProps,
  IVacationAdaptiveCardExtensionState,
  ComponentsCardViewParameters
> {
  public get cardViewParameters(): ComponentsCardViewParameters {
    return BasicCardView({
      cardBar: {
        componentName: 'cardBar',
        title: this.properties.title
      },
      header: {
        componentName: 'text',
        text: "Vacaciones disponibles: 10"    
      },
      footer: {
        componentName: 'cardButton',
        title: "Ver Detalles",
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    });
  }

  public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
    return {
      type: 'QuickView',
      parameters: {
        view: QUICK_VIEW_REGISTRY_ID
      }
    };
  }
}
