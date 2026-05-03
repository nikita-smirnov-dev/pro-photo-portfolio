import type { Author } from '@appTypes/authorTypes';

export const authorInfo: Author = {
  name: 'Julia Dubrovina',
  city: 'Saint Petersburg',
  role: 'Fashion & Commercial Photographer',
  bio: 'Julia Dubrovina is a fashion and commercial photographer based in Saint Petersburg. Focusing on minimalist aesthetics and studio lighting, she works with modeling agencies and local brands to create clean, high-end visual content.',
  links: [
    {
      name: 'phone',
      href: '+7 (900) 000-00-00',
      label: '+7 (900) 000-00-00',
      type: 'phone',
    },
    {
      name: 'email',
      icon: 'email',
      href: 'dubrovina.photo@example.com',
      label: 'dubrovina.photo@example.com',
      type: 'email',
    },
    {
      name: 'vk',
      icon: 'vk',
      href: 'https://vk.com',
      label: 'vk/j_dubrovina',
      type: 'link',
    },
    {
      name: 'tg',
      icon: 'tg',
      href: 'https://t.me',
      label: 't.me/j_dubrovina',
      type: 'link',
    },
  ],
};
