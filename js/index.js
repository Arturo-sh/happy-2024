// Cuenta regresiva al 2024

// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Calculos de tiempo para dias, horas, minutos y segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar el resultado en el elemento con id="demo"
  document.getElementById("time").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Si la cuenta regresiva termina, mostrar el texto
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("message").innerHTML = "Feliz 2024!";
    // Cambiar imagen de fondo
    document.body.style.backgroundImage = "url('img/year_2024.jpg')";
    new_style = `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    background-color: rgba(255, 255, 255, 0.2);
    font-size: 100px;
    text-align: center;
    padding: 1px;
    `;
    document.getElementById("message").style = new_style;

    // Cambiar el color del texto de forma dinamica cada segundo pasado del 2024
    var color = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
      "lime",
      "purple",
      "brown",
      "white",
      "gray",
      "cyan",
      "magenta",
      "silver",
      "gold",
      "navy",
      "olive",
      "maroon",
      "limegreen",
      "aqua",
      "teal",
      "coral",
      "crimson",
    ];

    var i = 0;
    setInterval(function () {
      document.getElementById("message").style.color = color[i];
      i = (i + 1) % color.length;
    }, 250);
  }
}, 1000);
