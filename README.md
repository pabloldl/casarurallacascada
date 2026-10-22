# Casa Rural La Cascada El Bosque

Web estática independiente en HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server de VS Code. Sin instalación, compilación, dependencias de ejecución, servicios de reservas ni configuración de alojamiento.

## Identidad y contenido

Concepto: un umbral hacia el paisaje. Marfil, piedra, oliva, tierra y bosque profundo. Ventana horizontal sin texto superpuesto; transición a una panorámica real; refugio tipográfico en un marco de líneas; ribera en formato vertical; invitación centrada con contacto directo. Marca geométrica propia inspirada en un vano arquitectónico.

Datos suministrados: Casa Rural La Cascada El Bosque; Camino de La Torrecilla s/n, 11670 El Bosque, Cádiz; 956 727 057 (`tel:+34956727057`). No se han aportado fotografías autorizadas de la propiedad. Ninguna imagen muestra el alojamiento, sus instalaciones o sus vistas. No se han añadido servicios, aforo, habitaciones, precios, disponibilidad, opiniones ni registro turístico.

Google Maps abre una búsqueda por nombre y dirección confirmada, no una coordenada ni una ficha verificada. El botón de copia guarda `956727057`; si la API no está disponible o se deniega, muestra y selecciona un campo para copia manual. El año se actualiza con JavaScript y tiene 2026 como valor inicial.

SEO: título y descripción locales, Open Graph, un h1 y datos estructurados LodgingBusiness limitados al nombre, teléfono y dirección. No se inventa dominio canónico. `og:image` tiene ruta relativa para esta entrega local; el dominio definitivo no ha sido proporcionado.

## Auditoría previa de originalidad

Se inspeccionaron el HTML, los estilos y las estructuras de las landings presentes en el directorio. La comparación fue de código; no se realizó una revisión visual en navegador de todas las webs anteriores.

| Referencia | Patrones encontrados | Decisión para La Cascada |
| --- | --- | --- |
| La Casita de El Bosque | Serif Georgia, navegación de secciones, hero comercial, servicios y galería | Ventana de paisaje sin superposición; sin servicios ni galería comercial |
| La Casa del Muro | Newsreader y Jakarta, menú adaptable, hero dividido, filtros de galería | Gelasio y Karla; acceso único a contacto, sin menú desplegable ni filtros |
| Isaac Phoenix | Cormorant y Outfit, fotolibro, secuencia editorial, acciones con flechas | Recorrido espacial, marco arquitectónico y acciones con un pequeño vano |
| Realty Canoe | Bodoni y Manrope, índice lateral y capítulos numerados | Navegación inicial horizontal, sin capítulos numerados, paginación ni índice |
| Guadalinfo | Figtree y Atkinson, gráficos de conexiones y bloques participativos | Composición sobria, sin adhesivos, tarjetas ni ilustraciones de producto |
| Taxi, informática y demás landings | Acciones rectangulares, flechas, bloques de servicios, mosaicos, footers de varias columnas | Acciones con un canto lateral, umbral animado, firma centrada y contacto sin tarjetas |

Se revisaron también los sistemas tipográficos del resto del conjunto: Archivo Narrow, Literata, Source Sans, DM Mono, Barlow, Chakra, Geist, Fraunces, Hanken, Space, Plex, Arial y las familias anteriores. Gelasio y Karla no aparecían en los estilos de los proyectos revisados. No se ha copiado ningún componente, hoja de estilos ni script de otra landing.

El movimiento utiliza apertura lateral muy leve de los encuadres, asentamiento de escala y cambio pausado de opacidad de títulos, sin desplazamiento vertical repetido. Aunque el revelado de imágenes es un recurso compartido por muchas webs, aquí se implementa con proporciones, duración y composición propias. `prefers-reduced-motion` elimina las transiciones y el scroll suave. Sin JavaScript, contenido e imágenes permanecen visibles.

## Fotografías: fuentes y licencias

Todos los recursos finales están en `img/`. Descargados de versiones de Wikimedia Commons a 1920 px; convertidos localmente a WebP con calidad 0,84. La ribera se redimensionó a 1440 px. Los recortes visibles se realizan con `object-fit: cover`; no se añadió ni generó contenido. Las fotografías son diferentes entre sí y no se han tomado de los otros proyectos.

| Archivo | Fotografía y autor | Licencia elegida |
| --- | --- | --- |
| `img/umbral.webp` | [Río Majaceite - P1460097.jpg](https://commons.wikimedia.org/wiki/File:R%C3%ADo_Majaceite_-_P1460097.jpg), El Pantera, 7 de marzo de 2020; río a su paso por El Bosque | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `img/paisaje.webp` | [El Bosque Lomo de Enmedio.JPG](https://commons.wikimedia.org/wiki/File:El_Bosque_Lomo_de_Enmedio.JPG), Antonio Acosta Fernández | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `img/ribera.webp` | [Río Majaceite - P1460074.jpg](https://commons.wikimedia.org/wiki/File:R%C3%ADo_Majaceite_-_P1460074.jpg), El Pantera, 7 de marzo de 2020 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |

Las versiones adaptadas de las fotografías del río conservan CC BY-SA 4.0. La panorámica conserva CC BY 3.0. La autoría, las fuentes, las modificaciones y las licencias se indican también en el desplegable de créditos del footer. Los autores no están asociados con el establecimiento ni avalan esta web. Los pies de fotografía distinguen el entorno de la propiedad.

## Tipografías

Gelasio Regular y Karla Regular, servidas localmente desde `css/`. Fuente: Google Fonts ([Gelasio](https://fonts.google.com/specimen/Gelasio), [Karla](https://fonts.google.com/specimen/Karla)). Licencia SIL Open Font License 1.1 incluida en `css/Gelasio-OFL.txt` y `css/Karla-OFL.txt`. Sin peticiones de fuentes a terceros durante la visita.

## Accesibilidad y comprobación

Enlace para saltar al contenido, landmarks semánticos, enlaces y botones nativos, foco visible, textos alternativos, etiquetas de imágenes, anuncio de copia con `role="status"`, copia manual alternativa, enlaces de teléfono y crédito accesibles por teclado. El color tierra se reserva para detalles decorativos; el texto usa bosque u oliva sobre fondos claros.

Capturas y resultados de verificación locales en `.qa/` (excluido por `.gitignore`). Las pruebas usan Chrome headless y su protocolo de depuración, con un servidor local temporal; no forman parte de la web. Consultar `.qa/report.json` para los resultados medidos y `full-375.png`, `full-768.png`, `full-1440.png`, `full-1920.png` para las capturas.

Resultados: cuatro tamaños comprobados sin desbordamiento horizontal, sin imágenes rotas y con ambas fuentes cargadas; capturas completas revisadas visualmente. Copia real al portapapeles comprobada (`956727057`) y alternativa manual seleccionando los nueve dígitos. Anclas internas válidas, tres enlaces `tel:` correctos y consulta de Maps con dirección completa. Sin excepciones JavaScript; `node --check` correcto. Movimiento reducido sin transiciones y con desplazamiento automático; contenido visible al desactivar JavaScript.

No se realiza una llamada telefónica real ni se comprueba la atención del establecimiento. Los enlaces externos se verifican por su destino y formato, sin asegurar el resultado actual de Google Maps. No se ha modificado ninguna otra web ni se ha realizado un despliegue.
