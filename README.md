# Cars v.1
**BACK-END** 
  Es un **CRUD** completo usando **Swagger** para la documentación, la solución se ha organizado en cinco capas : 
  - **Api**: Se exponen los EndPoints Get, Create, Update y Delete Order via Controllers.
  - **Application**:  Funciones de paginación y gestón de acciones usando la libreria Mediator. 
  - **Domain**: Validación de los valores de entrada, excepciones, definición de la entidad Order y un pequeño repositorio. 
  - **Host**: Configuración de la API. Cadena de conexion al server en el Appsettings.json.
  - **Infrastructure**: Creación del contexto, uso de **CodeFirst** con migrations para la creación de la **BBDD** y implementación de Queries. 

**FRONT-END** ( uso: Yarn + Yarn Start )
- Se ha usado FrameWork **React + Redux**, pretendiendo implementar una estructura fractal del árbol de directorios. En la carpeta State la idea era montar una estructura Duck juntando por módulos los  _ACTION_TYPE_, export de Reducers y de acciones. 
- Se instala la libreria **Redux-Act** para gestionar la creación de acciones. 
- Se instala la libreria **Redux-Thunk** para gestionar el Middleware. 
- Se instala la libreria **Emotion** para el estilado y creación de componentes. 


***Observaciónes***: 
Mis esfuerzos se han empleado sobretodo en la parte de Back que es donde tengo más experiencia, aunque me dejo en el tintero un proyecto para realizar Test (unitarios y funcionales) y un Seed en Infrastructure para poblar mínimamente la BBDD.  Me hubiera gustado también Dockerizarlo todo para que con un Docker-Compose up se levantara todo el proyecto. En la parte Front me han faltado las acciones (solo aparece el listado) y estilarlo todo un poco (bastante). 
