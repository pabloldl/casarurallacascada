# Casa Rural La Cascada · Rediseño local

HTML5, CSS3 y JavaScript vanilla. Abrir index.html con Live Server. Sin compilación ni despliegue.

## Diseño y contenido
Portada fotográfica de la vivienda, crema y verde oliva, tipografías locales Gelasio y Karla, presentación de la casa, composición fotográfica asimétrica, detalles exteriores, entorno y consulta telefónica. Se han conservado todos los originales.

Las nueve fotografías aportadas se encuentran realmente en `img/`, no en `imgs/`. Se inspeccionaron visualmente juntas antes del rediseño:

| Archivo | Resolución | Contenido y decisión |
| --- | --- | --- |
| 371896156.jpg | 1024 × 768 | Jardín y fachada, luz de día y composición amplia: portada. |
| 237841843.jpg | 1024 × 683 | Entrada y fachada albero, luz suave: presentación. |
| 237842339.jpg | 1024 × 683 | Mesa entre vegetación, luz filtrada: galería principal. |
| 371896148.jpg | 1024 × 768 | Piscina elevada, luz directa: galería. No se promete disponibilidad ni temporada. |
| 79564071.jpg | 1024 × 768 | Barbacoa de obra, luz directa: galería. |
| 237843583.jpg | 1024 × 683 | Rosa y fachada, detalle con fondo desenfocado: galería. |
| 237841730.jpg | 1024 × 683 | Letrero y entrada, sombras y cielo: visor adicional. |
| 237842988.jpg | 1024 × 683 | Macetas y placa rural, encuadre de detalle: visor adicional. |
| 79568879.jpg | 576 × 768 | Cascada vertical: no utilizada porque su relación exacta con la propiedad no está documentada. |

Todas tienen resolución moderada; se muestran sin deformación y el visor permite verlas completas. El hero y mosaico recortan con object-fit: cover. No se han generado fotografías ni añadido interiores ficticios.

## Contacto y fuentes
Teléfono: +34 956 727 057. Dirección: Camino de La Torrecilla s/n, 11670 El Bosque, Cádiz. Coinciden con la ficha consultada el 28 de octubre de 2026: https://www.google.cl/travel/hotels/entity/ChoIqaiSvIz08uufARoNL2cvMTFjczMxcjFqMRAB

La consulta se realiza mediante enlaces tel:. Maps abre una búsqueda por nombre y dirección; no se afirma que sea una ficha oficial. No se han añadido WhatsApp, correo, precios, calendario, formulario, capacidad ni servicios no documentados. Jardín, mobiliario y barbacoa se describen a partir de las fotografías aportadas.

Permiso de publicación de las nueve fotografías aportadas: confirmado expresamente por el usuario el 28 de octubre de 2026. Esta entrega permanece local, sin despliegue.

Panorámica del entorno conservada: Antonio Acosta Fernández, https://commons.wikimedia.org/wiki/File:El_Bosque_Lomo_de_Enmedio.JPG — CC BY 3.0, https://creativecommons.org/licenses/by/3.0/ . Convertida a WebP, redimensionada y recortada en pantalla. Crédito visible en el pie. Las demás imágenes antiguas se conservan sin utilizarse.

Tipografías locales con licencias SIL OFL en css/.

## Interacción y verificación
Visor nativo dialog con ocho fotos, anterior/siguiente, flechas de teclado, Escape, botón de cierre, retorno del foco, bloqueo del fondo y gestos horizontales. Sin JavaScript las fotografías principales siguen siendo enlaces a los originales y la navegación permanece visible. Movimiento reducido respetado.

Comprobaciones ejecutadas con Chrome headless y CDP: 375, 768, 1440 y 1920 px sin desbordamiento horizontal ni imágenes rotas; ocho originales del visor cargados; apertura, avance, vuelta circular, Escape, retorno del foco, desbloqueo del fondo; apertura/cierre del menú móvil; anclas y formato tel:; movimiento reducido; navegación y fotografía visibles sin JavaScript; sin excepciones JavaScript. node --check correcto. Capturas de 375 y 1440 revisadas visualmente. Resultados y capturas en .qa/redesign-report.json y .qa/redesign-*.png.

No se ha probado en un iPhone físico, realizado una llamada real ni verificado la atención telefónica. Los enlaces externos se revisaron por destino; no se asegura la respuesta de cada servicio. Los gestos táctiles están implementados pero no se han comprobado en un dispositivo físico. No se modificaron otras webs.

