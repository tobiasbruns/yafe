import { AfterContentInit, ComponentRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FieldsService, FormsService } from '@yafe-forms/core';
import { StepperComponent, TextInputComponent } from '@yafe-forms/widgets';

@Component({
  selector: 'yafe-forms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormsService, FieldsService]
})
export class AppComponent implements AfterContentInit {

  @ViewChild('yafeforms', { read: ViewContainerRef, static: true })
  formsContainer: ViewContainerRef;

  title = 'yafe-forms';

  readonly sample = {
    groups: [
      {
        title: 'Kontakdaten',
        fields: [
          {
            type: 'text',
            name: 'vorname',
            label: 'Vorname',
          },
          {
            type: 'text',
            name: 'name',
            label: 'Name',
          },
          {
            type: 'text',
            subType: 'tel',
            name: 'telefon',
            label: 'Telefon',
          },
        ],
      },
      {
        title: 'Anliegen',
        fields: [{ type: 'text', label: 'Anliegen' }],
      },
    ]
  };

  readonly typeToClass = {
    text: TextInputComponent,
  };

  constructor(
    private resolver: ComponentFactoryResolver,
    private formsService: FormsService,
    private fieldsService: FieldsService
  ) {
  }

  ngAfterContentInit() {
    this.formsService.initForm(this.sample);
    this.createForm();
  }

  public buildForm(definition: any): void {
    this.formsService.initForm(definition);
    this.createForm();
  }

  private createForm(): void {
    const stepper = this.createStepper();
    // this.sample.groups.forEach((stepDef) => this.createStep(stepper, stepDef));


  }

  private createField(definition): void {
    // const factory = this.resolver.resolveComponentFactory(TextInputComponent);

    // const field = this.formsContainer.createComponent(factory);
    const field = this.fieldsService.createField(definition, TextInputComponent, this.formsContainer)

    field.instance.subType = definition.subType;
  }

  private createStepper(): ComponentRef<StepperComponent> {
    const factory = this.resolver.resolveComponentFactory(StepperComponent);

    this.formsContainer.clear();
    const stepper = this.formsContainer.createComponent(factory);
    return stepper;
  }

  /*  private createStep(stepper: ComponentRef<StepperComponent>, stepDef: any) {
      const step = stepper.instance.addStep(stepDef.title);
    }*/

  /*
  private createForm(): void {
    console.log('lade component');
    this.formsContainer.clear();

    const factory = this.resolver.resolveComponentFactory(TextInputComponent);

    const field2 = this.formsContainer.createComponent(factory);
    field2.instance.label = 'Vorname';

    this.inputComponent = this.formsContainer.createComponent(factory);
    this.inputComponent.instance.label = 'Name';

    console.log('created');
    // this.changeDetector.detectChanges();
  }*/
}
