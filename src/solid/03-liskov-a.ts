import { 
    Tesla, 
    Audi, 
    Toyota, 
    Honda, 
    Vehicle,
    Ford,
} from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {

        cars.forEach( car => {
            console.log(car.constructor.name,':', car.getNumberSits());
        })

        // No se cumple open and close
        
        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberSits() )
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberSits() )
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberSits() )
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberSits() )
        //         continue;
        //     } 
        //     if( car instanceof Ford ) {
        //         console.log( 'Ford', car.getNumberSits() )
        //         continue;
        //     }         
        //}
        
    }

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Ford(5)
    ];
    printCarSeats( cars );

})();