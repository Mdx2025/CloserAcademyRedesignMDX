/**
 * Dashboard data — shared between the main page and design-system showcase.
 */

/** @type {string[]} */
export const calendarDays = ['SAN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

/** @type {number[]} */
export const dates = Array.from({ length: 31 }, (_, i) => i + 1);

/** @type {number} */
export const highlightedDay = 19;

/** @type {string[]} */
export const hours = [
	'AM06:00',
	'AM07:00',
	'AM08:00',
	'AM09:00',
	'AM10:00',
	'AM11:00',
	'PM12:00',
	'PM01:00',
	'PM02:00'
];

/**
 * @typedef {Object} ApplicationCard
 * @property {string} title
 * @property {string} subtitle
 * @property {string} description
 * @property {string} location
 * @property {string} type
 * @property {string} link
 */

/** @type {ApplicationCard[]} */
export const applicationCards = [
	{
		title: 'Job in Graphic Design',
		subtitle: 'Lorem ipsum dolor et same',
		description:
			'Lorem ipsum dolor et same dolor et ipsum dolor lorem ipsum dolor...',
		location: 'Remote',
		type: 'Full Time',
		link: 'Read More'
	},
	{
		title: 'Job in Graphic Design',
		subtitle: 'Lorem ipsum dolor et same',
		description:
			'Lorem ipsum dolor et same dolor et ipsum dolor lorem ipsum dolor...',
		location: 'Remote',
		type: 'Full Time',
		link: 'Read More'
	},
	{
		title: 'Job in UI/UX Design',
		subtitle: 'Crafting user-friendly interfaces',
		description:
			'Collaborating with developers to enhance user experience and accessibility features.',
		location: 'Hybrid',
		type: 'Part Time',
		link: 'Explore Now'
	},
	{
		title: 'Job in Web Development',
		subtitle: 'Building responsive websites',
		description:
			'Using modern frameworks to deliver fast and efficient web solutions for clients.',
		location: 'On-site',
		type: 'Contract',
		link: 'Learn More'
	}
];

/**
 * @typedef {Object} InterviewCard
 * @property {string} date
 * @property {string} time
 * @property {string} description
 * @property {string} location
 * @property {string} type
 */

/** @type {InterviewCard[]} */
export const interviewCards = [
	{
		date: '10-07-2025',
		time: '02:00 PM',
		description:
			'Lorem ipsum dolor et same dolor et ipsum dolor lorem ipsum dolor...',
		location: 'Remote',
		type: 'Full Time'
	},
	{
		date: '10-07-2025',
		time: '02:00 PM',
		description:
			'Lorem ipsum dolor et same dolor et ipsum dolor lorem ipsum dolor...',
		location: 'Remote',
		type: 'Full Time'
	}
];

/**
 * @typedef {Object} ScheduleEvent
 * @property {string} title
 * @property {string} time
 * @property {'pink'|'green'|'blue'} variant
 * @property {string} top
 * @property {string} [left]
 * @property {string} height
 * @property {{src:string, alt:string}[]} [avatars]
 */

/** @type {ScheduleEvent[]} */
export const scheduleEvents = [
	{
		title: 'Morning Routine',
		time: '07:00 AM',
		variant: 'pink',
		top: '10px',
		height: '48px'
	},
	{
		title: 'Weekly Planning',
		time: '07:00 AM',
		variant: 'green',
		top: '82px',
		left: '130px',
		height: '64px'
	},
	{
		title: 'Business Calls',
		time: '07:00 AM',
		variant: 'blue',
		top: '192px',
		left: '240px',
		height: '86px',
		avatars: [
			{
				src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop',
				alt: 'Avatar 1'
			},
			{
				src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop',
				alt: 'Avatar 2'
			}
		]
	},
	{
		title: 'Weekly Planning',
		time: '07:00 AM',
		variant: 'green',
		top: '442px',
		left: '130px',
		height: '64px'
	}
];

/** Sidebar navigation items */
export const menuItems = [
	{ label: 'Dashboard', href: '/', icon: 'dashboard', active: true },
	{ label: 'Jobs', href: '/', icon: 'briefcase' },
	{ label: 'Applications', href: '/', icon: 'file-text' },
	{ label: 'Interviews', href: '/', icon: 'users' },
	{ label: 'Messages', href: '/', icon: 'message' }
];

export const configItems = [
	{ label: 'My Account', href: '/', icon: 'user' },
	{ label: 'Settings', href: '/', icon: 'settings' }
];
