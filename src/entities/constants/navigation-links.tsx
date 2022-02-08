import { NavigationLinkInterface } from '../interfaces/navigation-link.interface';
import { eventsIcon, newsIcon, officesIcon } from './svg-icons';

export const NAVIGATION_LINKS: NavigationLinkInterface[] = [
    {
        icon: eventsIcon,
        to: 'events',
        title: 'Мероприятия'
    },
    {
        icon: newsIcon,
        to: 'news',
        title: 'Новости'
    },
    {
        icon: officesIcon,
        to: 'offices',
        title: 'Представительства'
    }

];