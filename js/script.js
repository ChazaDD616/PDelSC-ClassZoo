class Zoologico {
  constructor() {
    this.animales = [];
  }

  añadirAnimal(nombre, jaula, tipo, peso) {
    const id = Math.floor(Math.random() * 1000) + 1;
    this.animales.push({ id, nombre, jaula, tipo, peso });
  }

  crearTablaAnimales() {
    const cuerpoTabla = document.querySelector('#animalTable tbody');
    cuerpoTabla.innerHTML = '';

    this.animales.forEach(animal => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${animal.id}</td>
        <td>${animal.nombre}</td>
        <td>${animal.jaula}</td>
        <td>${animal.tipo}</td>
        <td>${animal.peso}</td>
      `;
      cuerpoTabla.appendChild(fila);
    });
  }

  contarAnimalesEnJaula5ConPesoMenorA3() {
    let contador = 0;
    for (const animal of this.animales) {
      if (animal.jaula === 5 && animal.peso < 3) {
        contador++;
      }
    }
    return contador;
  }

  contarFelinosEnJaulas2a5() {
    let contador = 0;
    for (const animal of this.animales) {
      if (animal.tipo === 1 && animal.jaula >= 2 && animal.jaula <= 5) {
        contador++;
      }
    }
    return contador;
  }

  obtenerNombreAnimalEnJaula4ConPesoMenorA120() {
    for (const animal of this.animales) {
      if (animal.jaula === 4 && animal.peso < 120) {
        return animal.nombre;
      }
    }
  }
}

// Crea una instancia de la clase Zoologico
const zoologico = new Zoologico();

// Agrega algunos animales a la clase
zoologico.añadirAnimal("Tigre", 5, 1, 150);
zoologico.añadirAnimal("León", 2, 1, 180);
zoologico.añadirAnimal("Águila", 3, 2, 2);
zoologico.añadirAnimal("Serpiente", 4, 3, 80);
zoologico.añadirAnimal("Pantera", 5, 1, 100);

// Genera la tabla de Animales
zoologico.crearTablaAnimales();

// Muestra la cantidad de animales en la jaula 5 cuyo peso sea menor a 3 kg
document.getElementById("resultado1").textContent = "Cantidad de animales en la jaula 5 con peso menor a 3 kg: " + zoologico.contarAnimalesEnJaula5ConPesoMenorA3();

// Mostrar la cantidad de animales de tipo felino entre las jaulas 2 y 5
document.getElementById("resultado2").textContent = "Cantidad de animales tipo felino entre las jaulas 2 y 5: " + zoologico.contarFelinosEnJaulas2a5();

// Mostrar el nombre del animal en la jaula 4 con peso menor a 120
document.getElementById("resultado3").textContent = "Nombre del animal en la jaula 4 con peso menor a 120: " + zoologico.obtenerNombreAnimalEnJaula4ConPesoMenorA120();
