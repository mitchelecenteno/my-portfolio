export interface NavNode {
  label: string;
  route?: string;
}

export const NAV_BAR: NavNode[] = [
  {
    label: 'Home',
    route: '#home',
  },
  {
    label: 'About',
    route: '#about',
  },
  {
    label: 'Projects',
    route: '#portfolio',
  },
  {
    label: 'Contact',
    route: '#contact',
  },
];
