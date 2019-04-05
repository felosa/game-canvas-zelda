# ARROW HACKER

## INTRODUCCIÓN
Es un juego realizado en HTML5 canvas donde hay dos modos de juego.

## ORIGEN DEL JUEGO
  No soy un gran gamer pero cuando era pequeño jugué al Zelda: Ocarina of Time para N64 y desde entonces sigue siendo el juego al que más cariño le tengo, por eso pensé en hacer que los players fueran Link. 
  
## OBJETIVO
Todos contra todos: Era la idea inicial en lo que me centré al principio. 
  Consiste en quitarle 3 vidas al contrario disparandole flechas. Los lobos te matan en el acto y no pueden ser matados.
  
Juego Individual: Pensé que si alguien quería jugar solo tenía que implementar algo nuevo, así que implementé un nuevo modo de juego.
  Consiste en matar al dragón quitándole las 10 vidas que tiene. Los lobos igualmente te matan en el acto y no pueden ser matados, cada bola del dragón te quita una vida.
  
## PUNTOS FUERTES DEL CODIGO Y DIFICULTADES ENCONTRADAS
  Movimiento de sprites: Estoy bastante contento con el resultado de los sprites tanto de jugadores como lobos, ya que me costó ajustarlos bien para que pareciera fluido. 
  Movimiento de lobos: Los lobos se mueven de forma random y sin duda es lo que más me ha costado que saliera. Inicialmente elegían un sentido diferente en cada refresco de pantalla y parecía que iban vibrando.
  
  Colisiones: He tenido que crear bastantes colisiones tanto con jugadores y enemigos como con las flechas y las bolas de fuego. El que más me ha costado es el de los lobos con las paredes ya que a veces se teletransportaban de sitio. 
  
## ASPECTOS A MEJORAR EN UN FUTURO
  En un futuro me gustaría poder elegir entre 2 y 4 jugadores, así como poder elegir el color de cada uno. 
  También quiero poner un poder nuevo, con un item en forma de arco que apareciera de manera random en el mapa y hacer que cogiéndolo puedas disparar 3 flechas a la vez, en diferentes direcciones. 
  También me gustaría refactorizar el método de las colisiones ya que he creado varias funciones diferentes y sé que puedo hacerlo solo en una función cambiando simplemente las variables para cada elemento.
  
## AGRADECIMIENTOS
  Me gustaría agradecer a los TA's, a Dani y Ironhackers su ayuda para poder realizar este proyecto, pero sobre todo a mis compañeros, que hemos estado muy unidos ayudandonos todos entre nosotros, así que un aplauso para ellos porfavor. 
  
  
## ENLACE A JUEGO

[GAME](https://felosa.github.io/game-canvas-zelda/)


 


