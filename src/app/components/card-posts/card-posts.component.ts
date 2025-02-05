import { Component } from '@angular/core';
@Component({
  selector: 'app-card-posts',
  templateUrl: './card-posts.component.html',
  styleUrls: ['./card-posts.component.scss'],
  standalone:false
})
export class CardPostsComponent {

  isFavorite: boolean = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }


  posts = [
    {
      avatar: 'data:image/jpeg;base64,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',
      username: 'adansitoe',
      location: 'Mexico',
      image: 'https://i.ytimg.com/vi/PTHhQTgUitE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA9MAcOqCeMGwmp2o50rDpI-aIgHQ',
      likes: '15k',
      description: 'jajajaj que buen momazo',
      comentarios: 'giovas',
      comen: 'jajaj que buen momo'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
      username: 'Pedro Santos',
      location: 'Brasil',
      image: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/12-gui-gomes.jpg?w=1900&h=1267',
      likes: '22k',
      description: 'Explorando la selva amazónica 🐒',
      comentarios: 'elpepe',
      comen: '¡Impresionante!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      username: 'Luciana Perez',
      location: 'Chile',
      image: 'https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      likes: '18k',
      description: 'Día de picnic en el parque 🌳',
      comentarios: 'carlos',
      comen: '¡Me encanta!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
      username: 'Felipe González',
      location: 'México',
      image: 'https://media.istockphoto.com/id/1276528317/photo/bicycle-in-front-of-the-bay-of-parati-rio-de-janeiro.jpg?b=1&s=612x612&w=0&k=20&c=r5-uCxoJ2WbYXa4f1RLrRlahXKb9SNuOlwHcB4Mdh84=',
      likes: '20k',
      description: 'Paseo en bicicleta 🚴‍♂️',
      comentarios: '¡Qué divertido!',
      comen: '¡Quiero ir!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
      username: 'Martina Díaz',
      location: 'Argentina',
      image: 'https://images.pexels.com/photos/30395535/pexels-photo-30395535/free-photo-of-scenic-pier-sunset-at-rosarito-beach-mexico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      likes: '25k',
      description: 'Amanecer en la montaña 🏔️',
      comentarios: '¡Qué vista!',
      comen: '¡Hermoso!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/25.jpg',
      username: 'Esteban Ramírez',
      location: 'Colombia',
      image: 'https://images.pexels.com/photos/13328900/pexels-photo-13328900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      likes: '19k',
      description: 'Día de pesca 🎣',
      comentarios: '¡Buena captura!',
      comen: '¡Felicidades!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
      username: 'Valeria Torres',
      location: 'Perú',
      image: 'https://images.pexels.com/photos/2231989/pexels-photo-2231989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      likes: '28k',
      description: 'Fiesta con amigos 🎉',
      comentarios: '¡Qué fiesta!',
      comen: '¡Me encanta!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/27.jpg',
      username: 'Alejandro Vega',
      location: 'Ecuador',
      image: 'https://images.pexels.com/photos/416726/pexels-photo-416726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      likes: '21k',
      description: 'Tarde de surf 🏄‍♂️',
      comentarios: '¡Qué olas!',
      comen: '¡Genial!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      username: 'Camila Herrera',
      location: 'Uruguay',
      image: 'https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      likes: '23k',
      description: 'Día de compras 🛍️',
      comentarios: '¡Qué divertido!',
      comen: '¡Quiero ir!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
      username: 'Lucas Fernández',
      location: 'Paraguay',
      image: 'https://images.pexels.com/photos/29912185/pexels-photo-29912185/free-photo-of-avenue-of-royal-palms-in-rio-s-botanical-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      likes: '17k',
      description: 'Caminata por el parque 🌲',
      comentarios: '¡Qué tranquilidad!',
      comen: '¡Me encanta!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
      username: 'Florencia Martínez',
      location: 'Bolivia',
      image: 'https://images.pexels.com/photos/30418294/pexels-photo-30418294/free-photo-of-tranquil-beach-gathering-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      likes: '24k',
      description: 'Atardecer en la playa 🌅',
      comentarios: '¡Qué vista!',
      comen: '¡Hermoso!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/31.jpg',
      username: 'Daniel Suárez',
      location: 'Venezuela',
      image: 'https://images.pexels.com/photos/1540108/pexels-photo-1540108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      likes: '16k',
      description: 'Día de buceo 🤿',
      comentarios: '¡Qué aventura!',
      comen: '¡Impresionante!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      username: 'Carolina Ruiz',
      location: 'España',
      image: 'https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg',
      likes: '26k',
      description: 'Tarde de yoga 🧘‍♀️',
      comentarios: '¡Qué relajante!',
      comen: '¡Me encanta!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      username: 'Jorge Herrera',
      location: 'Brasil',
      image: 'https://images.pexels.com/photos/30449191/pexels-photo-30449191/free-photo-of-sunrise-over-caloundra-beach-queensland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      likes: '22k',
      description: 'Día de kayak 🚣‍♂️',
      comentarios: '¡Qué emocionante!',
      comen: '¡Quiero ir!'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/34.jpg',
      username: 'Paula Vega',
      location: 'Chile',
      image: 'https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      likes: '18k',
      description: 'Día de picnic en el parque 🌳',
      comentarios: '¡Qué lindo!',
      comen: '¡Me encanta!'
    },
    
    

  ];

 

  
  
}
