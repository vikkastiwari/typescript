// our autobind decorator
function Autobind( target: any, methodName: string, descriptor: PropertyDescriptor ) {
    // original method that was stored in descriptor
    const orgMethod = descriptor.value;
    // check the strcutre of function in decorators file
    const updatedMethod: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = orgMethod.bind( this );
            return boundFn;
        }
    }
    return updatedMethod; 
}

class Printer{
    message = "This Works!";

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector( 'button' )!;

//! here addEventListener binds the this of p.showMessage to this of eventlistener which gives undefined
//? now to overcome that we can use bind methods which is js functionality
// button.addEventListener( 'click', p.showMessage.bind(p));
//? but we can use decorator to autobind this of our instance with p.showMessage
button.addEventListener( 'click', p.showMessage);
