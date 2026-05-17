import type { Project } from '@appTypes/projectsTypes';

export const projects: Project[] = [
  {
    id: 'alexa',
    title: 'Alexa',
    category: 'persons',
    description: 'faishon studio photo',
    coverImage: '/img/projects/alexa/alexa-cover.jpg',
    photos: [
      {
        src: '/img/projects/alexa/alexa-01.jpg',
      },
      {
        src: '/img/projects/alexa/alexa-02.jpg',
      },
      {
        src: '/img/projects/alexa/alexa-04.jpg',
      },
      {
        src: '/img/projects/alexa/alexa-05.jpg',
        size: 'wide',
      },
      {
        src: '/img/projects/alexa/alexa-07.jpg',
        size: 'wide',
      },
    ],
  },
  {
    id: 'victoria',
    title: 'Victoria',
    category: 'persons',
    description: 'faishon studio photo',
    coverImage: '/img/projects/victoria/victoria-cover.jpg',
    photos: [
      {
        src: '/img/projects/victoria/victoria-06.jpg',
      },
      {
        src: '/img/projects/victoria/victoria-09.jpg',
      },
      {
        src: '/img/projects/victoria/victoria-10.jpg',
      },
      {
        src: '/img/projects/victoria/victoria-13.jpg',
      },
      {
        src: '/img/projects/victoria/victoria-14.jpg',
      },
      {
        src: '/img/projects/victoria/victoria-15.jpg',
      },
      {
        src: '/img/projects/victoria/victoria-17.jpg',
        size: 'wide',
      },
      {
        src: '/img/projects/victoria/victoria-19.jpg',
        size: 'wide',
      },
    ],
  },
  {
    id: 'project-3',
    title: 'Animals',
    category: 'editorial',
    description: 'faishon studio photo',
    coverImage: '/img/projects/project-3/cover-animals.jpg',
    photos: [
      {
        src: '/img/projects/project-3/photo-animals-1.jpg',
      },

      {
        src: '/img/projects/project-3/photo-animals-2.jpg',
      },

      {
        src: '/img/projects/project-3/photo-animals-3.jpg',
      },

      {
        src: '/img/projects/project-3/photo-animals-4.jpg',
        size: 'full',
      },
    ],
  },
  {
    id: 'project-4',
    title: 'Moto',
    category: 'commerce',
    description: 'faishon studio photo',
    coverImage: '/img/projects/project-4/cover-moto.jpg',
    photos: [
      {
        src: '/img/projects/project-4/photo-moto-1.jpg',
        size: 'wide',
      },
      {
        src: '/img/projects/project-4/photo-moto-2.jpg',
        size: 'wide',
      },
    ],
  },
];
