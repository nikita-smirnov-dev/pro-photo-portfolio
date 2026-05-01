export interface Project {
  id: string;
  title: string;
  category: 'commerce' | 'tests' | 'editorial';
  description: string;
  coverImage: string;
  // photos: string[];
}
