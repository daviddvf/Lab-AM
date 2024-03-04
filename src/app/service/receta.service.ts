import { Injectable } from '@angular/core';
import { Receta } from '../interface/receta';
@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: ' hamburguesa gourmet', 
      image: 'https://www.beloleum.com/wp-content/uploads/2023/10/hamburguesas-caseras-gourmet.png',
      ingredientes: ["500g carne de ternera","sal marina", "pimienta negra", "pan hamburgesa", "tomate","lechuga"]
    },
    {
      id: 2, 
      nombre: 'tacos de Carne', 
      image: 'https://www.recetasnestlecam.com/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/58f1cc93e7da72e5a1b6acd5f8e8e4e7.webp?itok=qeIyAHAQ',
      ingredientes: ['(454 g.) 1 Libra Carne Molida De Res',
        'Sal y Pimienta al gusto',
       ' (16 g.) 4 dientes Ajo Cortados finamente',
        '(75 g.) 1/2 Taza Cebolla Cortada finamente',
        '(5 ml.) 5 Cucharaditas Aceite De Maíz',
        '(3 g.) 1 Cucharadita Paprika',
        '(76 g.) 1 Sobre Crema De Tomate MAGGI®',
        '(500 ml.) 2 Tazas Agua',
        '(370 g.) 2 Tazas Tomate Cortado en cubos pequeños',
        '(90 g.) 3/4 Taza Cebolla Morada Cortada finamente',
        '(65 ml.) 1/4 Taza Jugo de limón',
        '(30 ml.) 2 Cucharadas Aceite De Oliva',
        '(9 g.) 1/2 Taza Cilantro Cortado finamente',
        'Sal y Pimienta al gusto',
        '(480 g.) 16 Tortillas De Trigo']
    },
    {
      id: 3, 
      nombre: 'Lasagna', 
      image: 'https://i.blogs.es/d05ff1/lasana_bolonesa/1366_2000.jpg',
      ingredientes: ['Salsa boloñesa 750 g',
      'Láminas de pasta para lasaña 12',
      'Queso rallado para gratinar 100 g',
      'Mantequilla 70 g',
      'Harina de trigo 70 g',
      'Leche 1 l',
      'Sal',
      'Pimienta blanca molida',
      'Nuez moscada molida (opcional)'  ]
    },
    {
      id: 4, 
      nombre: 'Espagueti a la boloñesa', 
      image: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/b4aa6ec5e3cdb2273882cf138539476a.webp?itok=E7iswCZI',
      ingredientes: ['5 Rodajas de Tocino picadas',
      '1/2 Cebolla picada finamente',
      '1 Cucharadita de Ajo picado finamente',
      '800 Gramos de Carne de res molida',
      '2 Cucharadas de Salsa Tipo Inglesa CROSSE & BLACKWELL®',
      '1 Cucharada de Jugo MAGGI®',
      '1 Taza de Puré de tomate',
      '1/4 Cucharadita de Hierbas finas',
      '1/4 Cucharadita de Orégano seco molido',
      '1 Cubo de Concentrado de Tomate con Pollo CONSOMATE®',
      '3/4 Taza de Agua',
      '2 Jitomates cortados en cubos',
      '1 Paquete de Espagueti (200 g)',
      '1/3 Taza de Queso parmesano rallado',
      

      ]
    }
  ];


  constructor() { }

  getReceta(idReceta: number){
    return {...this.recetas.find(
      (receta: Receta) =>{
        return receta.id === idReceta
      }
    )};
  }

  getRecetas(){
    return [...this.recetas];
  }
}
