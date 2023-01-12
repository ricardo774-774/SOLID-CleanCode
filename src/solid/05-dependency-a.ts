
import { PostService } from './05-dependency-b';
import { 
    JsonDataBase, 
    LocalDataBase, 
    WebDataBase,
} from './05-dependency-c';


// Main
(async () => {

    // provar con cualquiera de las 3 constantes
    // const provider = new JsonDataBase;
    // const provider = new LocalDataBase;
    const provider = new WebDataBase;

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();
