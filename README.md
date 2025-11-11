# Proyecto 12 : Juego tipo Tamagotchi

## Librerías

- **react**, **react-router-dom**

- Ecosistema de Tailwind:

  - **daisyUi** : componentes
  - **tailwind-scrollbar** : para los estilos de la barra de scroll
  - **tailwind** : maquetación y detalles con
  - **CSS** : animaciones propias
  - **heroicons** : íconos

  - **clsx** y **tailwind-merge** : manejo más detallado de las classNames con tailwind
    <br>

- La interactividad de los componentes de daisyUi se maneja o con los métodos de daisyUi o con React, dependiendo de la necesidad.

## Componentización

- La carpeta components tiene una estructura feature-based, ya que al usar daisyUi no tendría mucho sentido un diseño atómico, ya que no se necesita crear componentes atómicos por lo general, usas html + clases y las utility-classes. Esto facilita un desarrollo rápido y cómodo, y una aplicación ligera.

Además, al principalmente usar el atributo className para la estilización, el es jsx gana en legibilidad.

## Lógica y estados de la aplicación

La lógica de la aplicación es gestionada por dos contextos: AppContext y GameContext, que cada uno tienen su provider, su reducer para el manejo de estados y acciones para dicho reducer. Así el flujo de datos queda muy claro y es fácil acceder a los contextos, y el .jsx se mantiene más declarativo.

### Guardado (opcional)

Los ajustes, que reciden en el AppContext, se guardan(set) en el localStorage al cambiarse, pero, solo se recogen(get) al entrar en la página, posteriormente se recoge de su reducer.

Lo mismo ocurre con los datos de GameContext, pero, este guardado de datos se puede omitir con el ajuste de guardado de la página. Al desactivar el guardado, se borran los datos del GameContext de localStorage, y no se guardan más a menos que se encienda el guardado.

Es decir, se puede aprovechar el localStorage, pero la gestión de los datos funciona con la lógica de estados de React.

### Lógica del juego

La principal función que controla el juego es gameLoop (src/reducers/game/actions.js), es decir, un bucle temporal constante que baja las estadísticas de la mascota del juego. Todo el resto de acciones giran alrededor de esas estadísticas.

### Adicional

- En src/utils hay una carpeta llamada petSpriteScraper tiene sus propias dependencias, incluí su código en el git para mostrar el proceso. Es un scraper que hice para recoger imágenes de internet, usando **playwright**.

- El código está parcialmente comentado, simplemente para facilitar una comprensión rápida de este mismo.

- Gracias por corregir el proyecto!
