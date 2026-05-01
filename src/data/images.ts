export const projectCollections = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/img/projects/**/*.{jpg,jpeg,png,gif}',
  { eager: true },
);
