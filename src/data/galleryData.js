import { v4 as uuidv4 } from 'uuid';

export const galleryData = [
    {
        id: uuidv4(),
        image: 'https://res.cloudinary.com/dm6aya7dn/image/upload/v1778922743/ronaldo_wkzrec.jpg',
        name: 'Inspiration',
        message: 'Always pushing me to do better.'
    },
    {
        id: uuidv4(),
        image: 'https://res.cloudinary.com/dm6aya7dn/image/upload/v1779141172/money_fn3bzx.jpg',
        name: 'Favorite Character',
        message: 'Money Heist - The Professor & Berlin'
    },
    {
        id: uuidv4(),
        image: 'https://res.cloudinary.com/dm6aya7dn/image/upload/v1778923173/SWE_Project_ensshs.jpg',
        name: 'Runner UP',
        message: 'The moment I won CSE Project show'
    },
];
