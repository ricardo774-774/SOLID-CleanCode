
type Size = 'C' | 'M' | 'G' | '';

class Product {
    constructor(
        public name: string= '',
        public price: number = 0,
        public size: Size = '',
    ) {}

    productValidation():boolean {
      // No DRY here
        // if ( this.name.length <= 0 ) 
        //   throw new Error('Name can not be empty');
        // if ( this.price <= 0 ) 
        //   throw new Error('Price should be more than 0');
        // if ( this.size.length <= 0 ) 
        //   throw new Error('Size can not be empty');
      for (const key in this) {
        switch(typeof this[key]) {
          case 'string':
            if((this[key] as string).length <= 0) throw Error(`${key} can not be empty`);
          break;
          case 'number':
            if((this[key] as number) <= 0) throw Error(`${key} should be more than 0`);
          break;
          default: 
            throw Error(`${key} is not valid`);
        }
      }
      return true;
    }

    getProduct() {
        if (!this.productValidation()) return;
        return `${this.name} - ${this.price} - ${this.size}`;
    }
}

(() => {

    const bluePants = new Product('Blue pants', 10, 'M');
    console.log(bluePants.getProduct());

}) ()