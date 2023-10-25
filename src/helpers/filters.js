import { carta_alimentos } from '../data/carta_alimentos';
import { carta_bebidas } from '../data/carta_bebidas';
import { litros_bambinos } from '../data/litros_bambinos';

export const filterByCategory = (nombre, tipo) => {
  let filtro;

  if (tipo === 'carta_alimentos') {
    filtro = carta_alimentos.filter(
      (carta) =>
        carta.categoria === nombre || carta.categoria.includes(nombre)
    );
  }

  if (tipo === 'carta_bebidas') {
    filtro = carta_bebidas.filter(
      (carta) =>
        carta.categoria === nombre || carta.categoria.includes(nombre)
    );
  }

  if (tipo === 'litros_bambinos') {
    filtro = litros_bambinos.filter(
      (carta) =>
        carta.categoria === nombre || carta.categoria.includes(nombre)
    );
  }

  return filtro;
};

