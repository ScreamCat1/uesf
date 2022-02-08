import { SupportLanguageInterface } from '../interfaces/support-language.interface';
import { gbFlagIcon, uaFlagIcon } from './svg-icons';

export const SUPPORTED_LANGUAGES: SupportLanguageInterface[] = [
    {
        icon: uaFlagIcon,
        title: 'ua',
    },
    {
        icon: gbFlagIcon,
        title: 'en'
    }
];
