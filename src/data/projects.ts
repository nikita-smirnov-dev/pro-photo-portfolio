import type { Project } from '@appTypes/projectsTypes';

export const projects: Project[] = [
  {
    id: 'form-texture',
    title: 'Form & Texture',
    category: 'architecture',
    description: 'faishon studio photo',
    coverImage:
      '/img/projects/architecture/form-texture/form-texture-cover.jpg',
    photos: [
      {
        src: '/img/projects/architecture/form-texture/form-texture-01.jpg',
      },
      {
        src: '/img/projects/architecture/form-texture/form-texture-02.jpg',
      },
      {
        src: '/img/projects/architecture/form-texture/form-texture-04.jpg',
      },
      {
        src: '/img/projects/architecture/form-texture/form-texture-05.jpg',
        size: 'wide',
      },
    ],
  },
  {
    id: 'lines-curves',
    title: 'Lines & Curves',
    category: 'architecture',
    description: 'faishon studio photo',
    coverImage:
      '/img/projects/architecture/lines-curves/lines-curves-cover.jpg',
    photos: [
      {
        src: '/img/projects/architecture/lines-curves/lines-curves-01.jpg',
      },
      {
        src: '/img/projects/architecture/lines-curves/lines-curves-02.jpg',
      },
      {
        src: '/img/projects/architecture/lines-curves/lines-curves-03.jpg',
      },
      {
        src: '/img/projects/architecture/lines-curves/lines-curves-04.jpg',
        size: 'wide',
      },
      {
        src: '/img/projects/architecture/lines-curves/lines-curves-05.jpg',
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
