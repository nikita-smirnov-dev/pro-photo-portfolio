import type { Author } from '@appTypes/authorTypes';

export const authorInfo: Author = {
  name: 'Raw Form Studio',
  city: 'Saint Petersburg',
  role: 'Creative Visual Studio',
  description:
    'Raw Form Studio is an independent visual archive focused on architecture, objects, automotive and environmental photography. The studio explores geometry, atmosphere, textures and modern environments through minimal and cinematic visual storytelling.',
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
      href: 'mailto@rawformstudio.com',
      label: 'hello@rawformstudio.com',
      type: 'email',
    },
    {
      name: 'vk',
      icon: 'vk',
      href: 'https://vk.com/rawformstudio',
      label: 'vk.com/rawformstudio',
      type: 'link',
    },
    {
      name: 'tg',
      icon: 'tg',
      href: 'https://t.me/rawformstudio',
      label: 't.me/rawformstudio',
      type: 'link',
    },
  ],
};
