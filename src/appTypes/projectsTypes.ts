export interface ProjectPhoto {
  src: string;
  size?: 'standard' | 'wide' | 'full';
  alt?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'architecture' | 'automotive' | 'interios';
  description: string;
  coverImage: string;
  photos?: ProjectPhoto[];
}

export type PhotoGallery = Pick<Project, 'photos' | 'title'>;
