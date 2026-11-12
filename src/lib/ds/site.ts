import type { FooterLink, NavItem } from './types';

// Navigation for pages in the new design. Mirrors src/routes/(site)/menu.yaml (top level only).
export const navItems: NavItem[] = [
	{ label: 'Podcast', path: 'https://app.springcast.fm/podcast/de-grote-vriendelijke-herstelshow' },
	{ label: 'Methode', path: '/methode' },
	{ label: 'Training', path: 'https://ohlijf.systeme.io/trainingen' },
	{ label: 'Workshop', path: '/workshop' },
	{ label: 'Over ons', path: '/ons' },
	{ label: 'Contact', path: '/contact' }
];

export const headerCta: NavItem = {
	label: 'Gratis webinar',
	path: 'https://ohlijf.systeme.io/webinar-oorzaak-hoofdpijn'
};

export const footerLinks: FooterLink[] = [
	{ label: 'Privacybeleid', path: '/privacy' },
	{ label: 'Disclaimer', path: '/disclaimer' },
	{ label: 'Algemene voorwaarden', path: '/algemene-voorwaarden' }
];
