## infomacion general

para obtener informacion general sobre el proyecto, se puede escribir en la consola:
*node app --help* 

*para mandar a correr el proyecto* se ejecuta ejemplo:

```
 node .\app.js -b=7 -l=true -h=20
```
este proyecto crea una tabla de multiplicar y la almacena en un .txt, para saber que tabla debe hacer recibe los siguientes parametros

1. -b => para saber si es la tabla de 5,6,7 etc 

2. -l => es un boolean, permite mostrar la tabla por consola o no

3. -h => muestra el fin de la tabla, ejemplo si es la tabla de 5, bueno, que multiple 5 * hasta como numero fin

## Notas:

```
Opciones:
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     Sirve para saber que tabla de multiplicar debe hacer
                                                            [número] [requerido]
  -l, --listar   Sirve para listar por consola el resultado que se almacena en
                 el archivo                          [booleano] [defecto: false]
  -h, --hasta    Numero limite hasta donde llegara la tabla
                                                          [número] [defecto: 10]
```

## carpetas

1. *config* contiene el archivo yargs.js que permite obtener los parametros que ingresa el usuario desde la consola

2. *helper* contiene en este caso la funcion que hace la multiplacion y creacion del .txt en la carpeta salida

3. *salida* contiene los archivos que genera la aplicacion al mandarla a correr

## plugins basicos

si se instala un paquete indicando que es de tipo save, sera un paquete de produccion, si decimos que es de tipo *--save-dev* es que ese paquete nos sirve solo cuando estemos programando, que cuando subamos codigos al servidor no se instalaran alla, ejemplo nodemon, nos sirve para que compile y demas, pero en produccion no nos sirve de nada


1. *File System:* es un plugin que ya trae instalado node por default sin siquiera hacer npm install, sirve para manejar archivos en el sevidor

2. *colors:* es un paquete que sirve para poder hacer logs colocanado un color a la fuente o al background de la linea

3. *yargs:* ayuda a crear herramientas de línea de comandos interactivas, analizando argumentos y generando una elegante interfaz de usuario. ejemplo --nombre=josue