const btnAll = document.querySelectorAll(".btn");

btnAll.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    // rectangle
    if (index === 0) {
      const base = findElement("base");
      const hight = findElement("hight");

      if (
        typeof base === "number" &&
        typeof hight === "number" &&
        isNaN(base) === false &&
        isNaN(hight) === false
      ) {
        document.querySelector(".triangleresult").innerText =
          0.5 * base * hight;
      }
      // rectangle
    } else if (index === 1) {
      const base = findElement("rectanglewidth");
      const hight = findElement("ractanglelength");

      if (
        typeof base === "number" &&
        typeof hight === "number" &&
        isNaN(base) === false &&
        isNaN(hight) === false
      ) {
        document.querySelector(".recresult").innerText = base * hight;
      }
    }
    // parallelogram
    else if (index === 2) {
      const base = findElement("parallebase");
      const hight = findElement("parallehight");

      if (
        typeof base === "number" &&
        typeof hight === "number" &&
        isNaN(base) === false &&
        isNaN(hight) === false
      ) {
        document.querySelector(".parallelogramresult").innerText = base * hight;
      }
    }
    // Rhombus
    else if (index === 3) {
      const base = findElement("rhombusd1");
      const hight = findElement("rhombusd2");

      if (
        typeof base === "number" &&
        typeof hight === "number" &&
        isNaN(base) === false &&
        isNaN(hight) === false
      ) {
        document.querySelector(".rhombusresult").innerText = 0.5 * base * hight;
      }
    }
    // pentagon
    else if (index === 4) {
      const base = findElement("pentagon1");
      const hight = findElement("pentagon2");

      if (
        typeof base === "number" &&
        typeof hight === "number" &&
        isNaN(base) === false &&
        isNaN(hight) === false
      ) {
        document.querySelector(".pentagonresult").innerText =
          0.5 * base * hight;
      }
    } else {
      const base = findElement("ellipsea");
      const hight = findElement("ellipseb");
      const pi = 3.14159;

      if (
        typeof base === "number" &&
        typeof hight === "number" &&
        isNaN(base) === false &&
        isNaN(hight) === false
      ) {
        document.querySelector(".ellipseresult").innerText = pi * base * hight;
      }
    }

    document.querySelectorAll("input").forEach((inputEl) => {
      inputEl.value = "";
    });
  });
});

function findElement(element) {
  const ele = document.getElementById(element);
  const elevalue = ele.value;
  const value = parseFloat(elevalue);
  return value;
}
