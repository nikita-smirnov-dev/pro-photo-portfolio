import type { Project } from '@appTypes/projectsTypes';

export const projects: Project[] = [
  {
    id: 'projects-1',
    title: 'Auto',
    category: 'commerce',
    description: 'faishon studio photo',
    coverImage: '/img/projects/project-1/cover-auto.jpg',
    photos: [
      {
        src: '/img/projects/project-1/photo-auto-1.jpg',
      },
      {
        src: '/img/projects/project-1/photo-auto-2.jpg',
      },
      {
        src: '/img/projects/project-1/photo-auto-3.jpg',
        size: 'wide',
      },
    ],
  },
  {
    id: 'project-2',
    title: 'Nature',
    category: 'tests',
    description: 'faishon studio photo',
    coverImage: '/img/projects/project-2/cover-nature.jpg',
    photos: [
      {
        src: '/img/projects/project-2/photo-nature-1.jpg',
      },
      {
        src: '/img/projects/project-2/photo-nature-2.jpg',
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
      },
      {
        src: '/img/projects/project-4/photo-moto-2.jpg',
      },
    ],
  },
];
