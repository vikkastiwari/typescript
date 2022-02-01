interface ValidatorConfig{
    [property: string]: {
        [validateProp:string]:string[] // ['required','positive']
    }
}

const registeredValidators: ValidatorConfig = {};

// Decorator are the functions that we have defined for validation

function Required( target: any, propertyName: string ) {
    registeredValidators[target.constructor.name] = {
        // here we first try to register the existing value and then we add other property
        ...registeredValidators[target.constructor.name],
         [propertyName]: [...(registeredValidators[target.constructor.name]?.[propertyName] ?? []),'required']
    };
}

function PositiveNumber( target: any, propertyName: string) {
    registeredValidators[target.constructor.name] = {
        // here we first try to register the existing value and then we add other property
        ...registeredValidators[target.constructor.name],
         [propertyName]: [...(registeredValidators[target.constructor.name]?.[propertyName] ?? []),'positive']
    };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course{
    @Required
    title: string;
    @PositiveNumber
    price: number;
    constructor ( t: string, p: number ) { 
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector( "form" )!;
courseForm.addEventListener( "submit", (event) => {
    event.preventDefault();
    const titleElement = document.getElementById( 'title' ) as HTMLInputElement;
    const priceElement = document.getElementById( 'price' ) as HTMLInputElement;

    const title = titleElement.value;
    // + converts it to number
    const price = +priceElement.value;

    const createdCourse = new Course( title, price );

    validate( createdCourse );
    if (!validate(createdCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createdCourse);
    
})