import { ISPFxAdaptiveCard, BaseAdaptiveCardQuickView } from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'VacationAdaptiveCardExtensionStrings';
import {
  IVacationAdaptiveCardExtensionProps,
  IVacationAdaptiveCardExtensionState
} from '../VacationAdaptiveCardExtension';

export interface IQuickViewData {
  subTitle: string;
  title: string;
  FechaIngreso: string;
  Antiguedad: string;
  SaldoVacaciones: string;
  Email: string;
}

export class QuickView extends BaseAdaptiveCardQuickView<
  IVacationAdaptiveCardExtensionProps,
  IVacationAdaptiveCardExtensionState,
  IQuickViewData
> {
  public get data(): IQuickViewData {
    return {
      subTitle: strings.SubTitle,
      title: strings.Title,
      FechaIngreso: "this.state.IniDate",
      Antiguedad: "this.state.YearsOfService",
      SaldoVacaciones: "this.state.VacationsQty",
      Email: "this.state.Email"
    };
  }

  public get template(): ISPFxAdaptiveCard {
    return require('./template/QuickViewTemplate.json');
  }
}
