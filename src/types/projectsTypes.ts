export interface Project {
  id: string;
  title: string;
  category: 'commercial' | 'tests' | 'editorial';
  description: string;
  coverImage: string;
  // photos: string[];
}
