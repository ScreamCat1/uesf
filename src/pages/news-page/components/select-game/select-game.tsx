import React from 'react';
import './select-game.scss';

export const SelectGame = () => (
    <div className="select-game">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_326_7210)">
                <path d="M5.53906 20L8.46782 18.8886L8.49157 18.8802L8.53906 17L5.53906 20Z" fill="white"/>
                <path
                    d="M20.1509 9.46244C19.8605 8.61547 19.4313 7.82242 18.8808 7.11556L19.6746 4.91535L17.5519 7.16836L18.869 7.12729L17.3814 7.30918H17.3108V7.22117H17.2226V7.15663L17.446 5.67809C16.7387 5.12716 15.9436 4.69875 15.094 4.41077C13.441 3.86308 11.6548 3.86308 10.0018 4.41077C9.15025 4.69983 8.3547 5.13245 7.64972 5.68982L5.43879 4.89188L7.74969 7.06862L7.70853 5.67809L7.91433 7.12142V7.2153H7.82025V7.30918H7.72029L6.28553 7.09209L7.54388 7.13903L5.43879 4.91535L6.23261 7.11556C5.67401 7.81899 5.24044 8.61279 4.95074 9.46244C4.40184 11.1118 4.40184 12.8941 4.95074 14.5435C5.24044 15.3931 5.67401 16.1869 6.23261 16.8903L5.44467 19.0612L7.5674 16.8434L6.24437 16.8845L7.63796 16.6967H7.70853V16.7847H7.80261V16.8551L7.57916 18.3278C8.28758 18.8771 9.08238 19.3053 9.93122 19.5951C11.5855 20.135 13.3691 20.135 15.0234 19.5951C15.8717 19.3066 16.6664 18.8804 17.3755 18.3337H17.3167C17.4049 18.3337 17.4049 18.2926 17.399 18.275V18.1225V17.9171C17.399 17.7822 17.399 17.6472 17.3696 17.5123C17.3402 17.3773 17.3167 17.1074 17.2873 16.9255L17.2108 16.8551L17.2638 16.8082C17.2638 16.8082 17.2638 16.7554 17.2638 16.7261H17.3637V16.638H17.4166C17.6401 16.6967 17.8694 16.7495 18.0929 16.7965L18.4633 16.8551L18.6456 16.8845H18.7397H18.7867C18.7867 16.8845 18.8161 16.8845 18.8455 16.8023V16.9021C19.4041 16.1986 19.8377 15.4048 20.1274 14.5552C20.6763 12.9058 20.6763 11.1236 20.1274 9.47418L20.1509 9.46244ZM14.4766 10.454C14.4766 10.1254 13.7474 9.40964 13.7474 9.40964L12.1833 9.45658L11.119 10.0844C10.5898 11.5042 11.5012 11.9677 11.5012 11.9677L12.054 11.6098C11.9473 11.5675 11.8554 11.495 11.7895 11.4011C11.7237 11.3073 11.6869 11.1963 11.6835 11.0818C11.6835 10.6476 12.2715 10.6242 12.8066 10.765C13.3417 10.9058 13.6475 11.9795 13.6298 12.5251C13.6122 13.0708 12.8066 13.458 12.8066 13.458H12.4126C12.0988 13.6644 11.7203 13.7496 11.348 13.6978C10.9758 13.6459 10.6351 13.4606 10.3899 13.1764L9.21384 11.4749L9.0492 10.055L9.1374 9.38617L9.75482 9.18082L10.2781 8.48262L12.0716 7.42065L12.1774 7.59667L12.5185 7.76095L12.9713 7.49693L14.947 8.24206L16.123 9.81448L16.5934 11.2989L16.4405 13.059L15.7584 14.5435L15.1704 14.8896L15.0822 15.2769L13.6828 15.9222H12.7831L11.7482 16.2039L9.8489 15.6172L9.56665 15.2064C9.56665 15.2064 12.2892 14.1562 13.2417 13.722C13.508 13.6119 13.7469 13.4451 13.9419 13.2333C14.1369 13.0215 14.2832 12.7698 14.3707 12.4958L14.6001 12.3785C14.6001 12.3785 14.5119 10.7884 14.4825 10.454H14.4766Z"
                    fill="white"/>
                <path d="M16.6122 5.12397H16.6331L16.5391 7L20.5286 4.00826L20.5391 4L16.6122 5.12397Z" fill="white"/>
                <path
                    d="M19.4407 18.8971L19.3041 18.7543L19.0254 18.4686L18.479 17.8971C18.1729 17.5886 17.856 17.2914 17.5391 17C17.5391 17.1486 17.5391 17.3029 17.5391 17.4571C17.5391 17.6114 17.5391 17.72 17.5391 17.8514V18.2C17.5391 18.2 17.5391 18.2343 17.6265 18.2457H17.5391L19.5391 19C19.5391 18.9858 19.5341 18.9721 19.525 18.9615C19.5159 18.9509 19.5034 18.9443 19.4899 18.9429L19.4407 18.8971Z"
                    fill="white"/>
                <path
                    d="M18.787 16.0608H18.7434H18.6562H18.4818C18.3674 16.0608 18.253 16.0204 18.1385 16.0123C17.9388 15.9959 17.7387 15.9959 17.5391 16.0123C17.8551 16.5386 18.1712 17.0568 18.4982 17.5669L19.0431 18.3765L19.3156 18.7895L19.4519 18.9919H19.4846C19.4932 18.9972 19.5025 19 19.5118 19C19.5212 19 19.5304 18.9972 19.5391 18.9919L18.9396 16.5628L18.8306 16.1013V16.2309C18.8143 16.0608 18.7979 16.0608 18.787 16.0608Z"
                    fill="white"/>
                <path d="M20.8661 11.92L24.5391 12L20.5391 10C20.7469 10.6248 20.8568 11.2704 20.8661 11.92Z"
                    fill="white"/>
                <path
                    d="M20.8589 12.0936C20.8476 12.8459 20.7374 13.5934 20.5313 14.3169L24.5391 11.9766L20.8589 12.0936ZM12.4455 3.68601L12.5391 0L10.1987 4.01365C10.9597 3.79579 11.7475 3.6855 12.5391 3.68601H12.4455ZM12.5391 3.68601C13.315 3.68983 14.0867 3.80007 14.8326 4.01365L12.5391 0L12.6327 3.68601H12.5391ZM12.5391 24L14.8794 19.9922C14.1557 20.1975 13.4083 20.3077 12.6561 20.3198L12.5391 24ZM10.1987 19.9922L12.5391 24L12.4455 20.3198C11.6854 20.3097 10.93 20.1995 10.1987 19.9922ZM4.54686 9.65968L0.539062 12L4.21922 11.9064C4.22846 11.1463 4.33864 10.3908 4.54686 9.65968ZM0.539062 12L4.54686 14.3403C4.34068 13.6168 4.23052 12.8693 4.21922 12.117L0.539062 12Z"
                    fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_326_7210">
                    <rect width="24" height="24" fill="white" transform="translate(0.539062)"/>
                </clipPath>
            </defs>
        </svg>
        <span className="select-game__name">
                Hearthstone
        </span>
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.53587 5.17168L11.4859 0.22168L12.8999 1.63568L6.53587 7.99968L0.171875 1.63568L1.58588 0.22168L6.53587 5.17168Z"
                fill="white"/>
        </svg>
    </div>
);