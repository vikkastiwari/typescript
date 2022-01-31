class DataStorage<T extends string | number | boolean | object>{
    private data: T[] = [];
    
    // we can also add generic types to methods

    addItem( item: T ) {       
        this.data.push( item );
    }

    removeItem( item: T ) {
        if ( this.data.indexOf( item ) === -1) return;
        this.data.splice( this.data.indexOf( item ), 1 );
    }

    getItems() {
        return [...this.data];
    }
}

// we can create objects with multiple specified types 

const storeString = new DataStorage<string>();

storeString.addItem( "user-1" );
storeString.addItem( "user-2" );
storeString.addItem( "user-3" );
storeString.removeItem( "user-2" );
console.log(storeString.getItems());


const storeNumber = new DataStorage<number>();
storeNumber.addItem( 1 );
storeNumber.addItem( 2 );
storeNumber.addItem( 3 );
storeNumber.removeItem(3 );
console.log( storeNumber.getItems() );

const storeObject = new DataStorage<object>();
const user2Obj = { name: "person 2" }; // this will make all process to look for this at same memory location as they will look for this object referentially
storeObject.addItem( { name: "person 1" } );
storeObject.addItem( user2Obj );
storeObject.addItem( { name: "person 3" } );
storeObject.removeItem( user2Obj ); // now it will work and it will remove user 2 
console.log( storeObject.getItems() );

