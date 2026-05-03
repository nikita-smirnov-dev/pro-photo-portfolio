export interface SocialItem {
  name: string;
  icon?: string;
  href: string;
  label: string;
  type: 'link' | 'phone' | 'email';
}

export interface Author {
  name: string;
  city: string;
  role: string;
  bio: string;
  links: SocialItem[];
}

export type AuthorSocial = Pick<Author, 'links'>;
