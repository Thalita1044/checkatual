const microondas = (food, time) => {
  if (food == "pipoca" && time >= 10 && time < 20) {
    console.log("Prato pronto, bom apetite!!!");
  } else if (food== "pipoca" && time >= 20 && time < 30) {
    console.log("A comida queimou!");
  } else if (food == "pipoca" && time < 10) {
    console.log("Tempo insuficiente");
  } else if (food == "pipoca" && time>= 30) {
    console.log("Kabummm!");
  } else if (food == "macarrão" && time >= 8 && time < 16) {
    console.log("Prato pronto, bom apetite!!!");
  } else if (food == "macarrão" && time >= 16 && time < 24) {
    console.log("A comida queimou!");
  } else if (food == "macarrão" && time < 8) {
    console.log("Tempo insuficiente");
  } else if (food == "macarrão" && time >= 24) {
    console.log("Kabummm!");
  } else if (food == "carne" && time >= 15 && time < 30) {
    console.log("Prato pronto, bom apetite!!!");
  } else if (food =="carne" && time >= 30 && time < 45) {
    console.log("A comida queimou!");
  } else if (food == "carne" && time < 15) {
    console.log("Tempo insuficiente");
  } else if (food == "carne" && time >= 45) {
    console.log("Kabummm!");
  } else if (food == "feijão" && time >= 12 && time < 24) {
    console.log("Prato pronto, bom apetite!!!");
  } else if (food == "feijão" && time >= 24 && time < 36) {
    console.log("A comida queimou!");
  } else if (food == "feijão" && time < 12) {
    console.log("Tempo insuficiente");
  } else if (food == "feijão" && time >= 36) {
    console.log("Kabummm!");
  } else if (food == "brigadeiro" && time >= 8 && time < 16) {
    console.log("Prato pronto, bom apetite!!!");
  } else if (food == "brigadeiro" && time >= 16 && time < 24) {
    console.log("A comida queimou!");
  } else if (food == "brigadeiro" && time < 8) {
    console.log("Tempo insuficiente");
  } else if (food == "brigadeiro" && time >= 24) {
    console.log("Kabummm!");
  } else {
    console.log("Prato Inexistente");
  }
  }
    