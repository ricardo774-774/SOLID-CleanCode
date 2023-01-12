(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        getProduct( id: number ) {
            console.log('Producto: ' ,{ id, name: 'OLED TV' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }


    class Mailer {

        private masterEmail: string = 'ricardovelecal@gmail.com';

        sendEmail( emailList: string[], template: 'to-clients' | 'to admins' ) {
            console.log('Enviando correo a los admins', template);
        }

    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        constructor( 
            private productService : ProductService,
            private miler : Mailer,
         ) {}
    
        loadProduct( id: number ) {
            this.productService.getProduct( id );
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct( product )
        }
    
        notifyClients( ) {
            this.miler.sendEmail(['ricardo@gmil.com'],'to admins');
        }
    
    }

    class CartBlock {

        private itemsInCart: Object[] = [];

        addToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }

    }
    

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc( productService, mailer);
    const cartBlock = new CartBlock();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBlock.addToCart(10);





})();