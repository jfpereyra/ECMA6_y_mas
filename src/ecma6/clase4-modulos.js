const hello = () => {
    return 'Hello'
}

export default hello

// Luego en otro archivo JS se puede importar la Fx con:
import { hello } from "./clase4-clases";
//Y luego simplemente se usa:
hello()