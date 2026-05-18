import { v4 as uuidv4 } from 'uuid';

export const galleryData = [
    {
        id: uuidv4(),
        image: 'https://res.cloudinary.com/dm6aya7dn/image/upload/v1779139147/Me_qlrs1q.jpg',
        name: 'Me',
        message: 'This is me!'
    },
    {
        id: uuidv4(),
        image: 'https://res.cloudinary.com/dm6aya7dn/image/upload/v1778922743/ronaldo_wkzrec.jpg',
        name: 'Inspiration',
        message: 'Always pushing me to do better.'
    },
    {
        id: uuidv4(),
        image: 'https://res.cloudinary.com/dm6aya7dn/image/upload/v1779138668/Coders5_ytipvb.jpg',
        name: '9th Runner UP',
        message: 'Proud moment securing 9th runner in UIU Coders Combat 5.0'
    },
    {
        id: uuidv4(),
        image: 'https://res.cloudinary.com/dm6aya7dn/image/upload/v1778923173/SWE_Project_ensshs.jpg',
        name: 'Runner UP',
        message: 'The moment I won CSE Project show'
    },
];
