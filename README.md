## infomacion general

para obtener informacion general sobre el proyecto, se puede escribir en la consola:
*node app --help* 

este proyecto crea una tabla de multiplicar y la almacena en un .txt, para saber que tabla debe hacer recibe los siguientes parametros

1. -b => para saber si es la tabla de 5,6,7 etc 

## plugins basicos

si se instala un paquete indicando que es de tipo save, sera un paquete de produccion, si decimos que es de tipo *--save-dev* es que ese paquete nos sirve solo cuando estemos programando, que cuando subamos codigos al servidor no se instalaran alla, ejemplo nodemon, nos sirve para que compile y demas, pero en produccion no nos sirve de nada


1. *File System:* es un plugin que ya trae instalado node por default sin siquiera hacer npm install, sirve para manejar archivos en el sevidor

2. *colors:* es un paquete que sirve para poder hacer logs colocanado un color a la fuente o al background de la linea

3. *yargs:* ayuda a crear herramientas de línea de comandos interactivas, analizando argumentos y generando una elegante interfaz de usuario. ejemplo --nombre=josue