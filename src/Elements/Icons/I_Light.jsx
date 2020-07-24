import React from "react";
import { act } from "react-dom/test-utils";

const I_Light = ({ status }) => {

    const active = <svg width="78" height="79" viewBox="0 0 78 79" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M61.6902 39.5251C61.6902 46.5268 58.5135 53.0098 53.0353 57.3535C50.7987 59.1039 49.34 61.4054 48.8862 63.8689L48.7241 63.8365H29.275L29.048 63.8689C28.5942 61.3081 27.2652 59.0715 25.3527 57.6452C18.2862 52.2967 14.9798 43.5446 16.7951 34.7276C18.5779 26.1376 25.5472 19.1359 34.1372 17.3531C40.9769 15.8944 47.9785 17.58 53.2947 21.8912C58.6432 26.2348 61.6902 32.6531 61.6902 39.5251Z" fill="#FFC107"/>
    <path d="M60.2995 20.6567C59.6771 20.6567 59.0547 20.42 58.5815 19.9435C57.6317 18.9938 57.6317 17.454 58.5815 16.5043L63.0677 12.018C64.0175 11.0682 65.5572 11.0682 66.507 12.018C67.4568 12.9678 67.4568 14.5075 66.507 15.4572L62.0207 19.9435C61.5442 20.4168 60.9218 20.6567 60.2995 20.6567Z" fill="#FFC107"/>
    <path d="M75.4682 41.957H69.1245C67.7825 41.957 66.6934 40.8679 66.6934 39.5259C66.6934 38.1839 67.7825 37.0947 69.1245 37.0947H75.4682C76.8102 37.0947 77.8993 38.1839 77.8993 39.5259C77.8993 40.8679 76.8102 41.957 75.4682 41.957Z" fill="#FFC107"/>
    <path d="M64.7857 67.7426C64.1634 67.7426 63.541 67.506 63.0677 67.0295L58.5815 62.5432C57.6317 61.5934 57.6317 60.0537 58.5815 59.1039C59.5312 58.1542 61.071 58.1542 62.0207 59.1039L66.507 63.5902C67.4568 64.54 67.4568 66.0797 66.507 67.0295C66.0305 67.506 65.4081 67.7426 64.7857 67.7426Z" fill="#FFC107"/>
    <path d="M48.887 63.8684C48.7897 64.4194 48.7249 64.9705 48.7249 65.5539V72.7501C48.7249 75.862 46.1641 78.4228 43.0522 78.4228H34.9484C32.2255 78.4228 29.2757 76.3482 29.2757 71.8101V66.0726C29.2757 65.327 29.2109 64.5815 29.0488 63.8684L29.2757 63.8359H48.7249L48.887 63.8684Z" fill="#546D79"/>
    <path d="M39.0003 63.8359H29.2757L29.0488 63.8684C29.2109 64.5815 29.2757 65.327 29.2757 66.0726V71.8101C29.2757 76.3482 32.2255 78.4228 34.9484 78.4228H39.0003V63.8359Z" fill="#546D79"/>
    <path d="M38.9995 11.8329C37.6575 11.8329 36.5684 10.7438 36.5684 9.40176V3.0581C36.5684 1.71611 37.6575 0.626953 38.9995 0.626953C40.3415 0.626953 41.4306 1.71611 41.4306 3.0581V9.40176C41.4306 10.7438 40.3415 11.8329 38.9995 11.8329Z" fill="#FFC107"/>
    <path d="M17.6998 20.6567C17.0774 20.6567 16.4551 20.42 15.9818 19.9435L11.4955 15.4572C10.5458 14.5075 10.5458 12.9678 11.4955 12.018C12.4453 11.0682 13.985 11.0682 14.9348 12.018L19.4211 16.5043C20.3708 17.454 20.3708 18.9938 19.4211 19.9435C18.9413 20.4168 18.3222 20.6567 17.6998 20.6567Z" fill="#FFC107"/>
    <path d="M8.87637 41.957H2.53271C1.19071 41.957 0.101562 40.8679 0.101562 39.5259C0.101562 38.1839 1.19071 37.0947 2.53271 37.0947H8.87637C10.2184 37.0947 11.3075 38.1839 11.3075 39.5259C11.3075 40.8679 10.2184 41.957 8.87637 41.957Z" fill="#FFC107"/>
    <path d="M13.2135 67.7416C12.5912 67.7416 11.9688 67.505 11.4955 67.0285C10.5458 66.0787 10.5458 64.539 11.4955 63.5892L15.9818 59.1029C16.9316 58.1532 18.4713 58.1532 19.4211 59.1029C20.3708 60.0527 20.3708 61.5924 19.4211 62.5422L14.9348 67.0285C14.4583 67.505 13.8359 67.7416 13.2135 67.7416Z" fill="#FFC107"/>
    <path d="M51.1573 41.1461C49.8153 41.1461 48.7262 40.0569 48.7262 38.715C48.7262 33.7976 44.7294 29.8008 39.812 29.8008C38.47 29.8008 37.3809 28.7116 37.3809 27.3696C37.3809 26.0276 38.47 24.9385 39.812 24.9385C47.4069 24.9385 53.5885 31.1201 53.5885 38.715C53.5885 40.0569 52.4993 41.1461 51.1573 41.1461Z" fill="#FFD54F"/>
    </svg>;

    const disabled = <svg width="76" height="75" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M59.4355 37.397C59.4355 44.1199 56.3853 50.3447 51.1253 54.5154C48.9777 56.1961 47.5771 58.4059 47.1414 60.7714L46.9857 60.7402H28.3111L28.0933 60.7714C27.6575 58.3126 26.3814 56.165 24.5451 54.7955C17.76 49.66 14.5853 41.2564 16.3283 32.7906C18.0401 24.5427 24.7319 17.8198 32.9798 16.108C39.547 14.7074 46.2699 16.3258 51.3743 20.4654C56.5098 24.636 59.4355 30.7987 59.4355 37.397Z" fill="#C2C2C2"/>
    <path d="M58.1031 19.2803C57.5055 19.2803 56.9079 19.0531 56.4535 18.5956C55.5415 17.6837 55.5415 16.2053 56.4535 15.2933L60.7611 10.9857C61.673 10.0738 63.1514 10.0738 64.0634 10.9857C64.9753 11.8977 64.9753 13.3761 64.0634 14.288L59.7558 18.5956C59.2982 19.05 58.7007 19.2803 58.1031 19.2803Z" fill="#555A66"/>
    <path d="M72.6675 39.7321H66.5765C65.288 39.7321 64.2422 38.6863 64.2422 37.3978C64.2422 36.1093 65.288 35.0635 66.5765 35.0635H72.6675C73.9561 35.0635 75.0019 36.1093 75.0019 37.3978C75.0019 38.6863 73.9561 39.7321 72.6675 39.7321Z" fill="#555A66"/>
    <path d="M62.4107 64.4923C61.8131 64.4923 61.2155 64.265 60.7611 63.8075L56.4535 59.4999C55.5415 58.588 55.5415 57.1096 56.4535 56.1976C57.3654 55.2857 58.8438 55.2857 59.7558 56.1976L64.0634 60.5052C64.9753 61.4172 64.9753 62.8956 64.0634 63.8075C63.6059 64.265 63.0083 64.4923 62.4107 64.4923Z" fill="#555A66"/>
    <path d="M47.1418 60.7723C47.0485 61.3014 46.9862 61.8306 46.9862 62.3908V69.3004C46.9862 72.2883 44.5274 74.7472 41.5395 74.7472H33.7584C31.1439 74.7472 28.3116 72.7552 28.3116 68.3978V62.8888C28.3116 62.1729 28.2494 61.4571 28.0938 60.7723L28.3116 60.7412H46.9862L47.1418 60.7723Z" fill="#555A66"/>
    <path d="M37.6489 60.7412H28.3116L28.0938 60.7723C28.2494 61.4571 28.3116 62.1729 28.3116 62.8888V68.3978C28.3116 72.7552 31.1439 74.7472 33.7584 74.7472H37.6489V60.7412Z" fill="#555A66"/>
    <path d="M37.6488 10.8075C36.3602 10.8075 35.3145 9.76175 35.3145 8.4732V2.38218C35.3145 1.09363 36.3602 0.0478516 37.6488 0.0478516C38.9373 0.0478516 39.9831 1.09363 39.9831 2.38218V8.4732C39.9831 9.76175 38.9373 10.8075 37.6488 10.8075Z" fill="#555A66"/>
    <path d="M17.1997 19.2803C16.6022 19.2803 16.0046 19.0531 15.5502 18.5956L11.2426 14.288C10.3306 13.3761 10.3306 11.8977 11.2426 10.9857C12.1545 10.0738 13.6329 10.0738 14.5448 10.9857L18.8524 15.2933C19.7644 16.2053 19.7644 17.6837 18.8524 18.5956C18.3918 19.05 17.7973 19.2803 17.1997 19.2803Z" fill="#555A66"/>
    <path d="M8.72613 39.7311H2.6351C1.34656 39.7311 0.300781 38.6854 0.300781 37.3968C0.300781 36.1083 1.34656 35.0625 2.6351 35.0625H8.72613C10.0147 35.0625 11.0605 36.1083 11.0605 37.3968C11.0605 38.6854 10.0147 39.7311 8.72613 39.7311Z" fill="#555A66"/>
    <path d="M12.8921 64.4913C12.2946 64.4913 11.697 64.2641 11.2426 63.8065C10.3306 62.8946 10.3306 61.4162 11.2426 60.5043L15.5502 56.1967C16.4621 55.2847 17.9405 55.2847 18.8524 56.1967C19.7644 57.1086 19.7644 58.587 18.8524 59.4989L14.5448 63.8065C14.0873 64.2641 13.4897 64.4913 12.8921 64.4913Z" fill="#555A66"/>
    <path d="M49.3216 38.9528C48.033 38.9528 46.9873 37.907 46.9873 36.6185C46.9873 31.8969 43.1496 28.0593 38.4281 28.0593C37.1395 28.0593 36.0938 27.0135 36.0938 25.7249C36.0938 24.4364 37.1395 23.3906 38.4281 23.3906C45.7205 23.3906 51.6559 29.326 51.6559 36.6185C51.6559 37.907 50.6101 38.9528 49.3216 38.9528Z" fill="#555A66"/>
    </svg>;    

    var view = active;

    switch (status) {
        case "active":
            view = active;
            break;

        case "disabled":
            view = disabled;
            break;

        default:

            break

    }

    return (
        <>
            {view}
        </>
    )

}

export default I_Light;