import image1 from '../assets/personal1.jpg'
import image2 from '../assets/personal2.jpg'

// import MyUC2 from '../assets/MyUC2.png'
import SpaceBook from '../assets/SpaceBook.png'
import TwitterBot from '../assets/TwitterBot.png'
import EsportsZone from '../assets/EsportsZone.png'
import PassnPlay from '../assets/PassnPlay.png'
// import UltimateTicTacToe from '../assets/UltimateTicTacToe.png'

const projects = [
    
    {
        name: 'My Ucalgary 2.0',
        description: 'A redo of the UofC student portal. Emphasizes a more user friendly experience.',
        image : image2,
        github: 'https://github.com/Vic-Han/MyUcalgary2.0',
        link: null,
        video : 'https://www.youtube.com/watch?v=DuWW8eVc-Mw',
        textColor: 'text-white',
    },
    {
        name: 'SpaceBook',
        description: 'A space themed social media platform. Includes key features with a space twist.',
        image : SpaceBook,
        github: 'https://github.com/EugeneL11/SpaceBook',
        link: null,
        video : 'https://www.youtube.com/watch?v=JtTn-pMRXLI&t=229s',
        textColor: 'text-white',
    },
    {
        name: 'Twitter Bot Detection',
        description: 'Detection of Twitter bots related to the Russo-Ukraine conflict. Uses a variety of features to cluster bots.',
        image : TwitterBot,
        github: 'https://github.com/Logan-PD/SENG-550-Project',
        link: "https://vic-han.github.io/pdf/SENG_550_Final_Project_Group_1.pdf",
        video : null,
        textColor: 'text-black',
    },
  
    {
        name: 'Esports Zone',
        description: 'Exlcusive gaming media platform. Many features included and designed for gamers.',
        image : EsportsZone,
        github: 'https://github.com/Vic-Han/Esports-Zone',
        link: null,
        video : 'https://www.youtube.com/watch?v=KEn2bstXrFY',
    },
    {
        name: 'Pass n Play Texas Holdem',
        description: 'Pass and play implemenation of Texas Holdem. Play with friends on the same device.',
        image : PassnPlay,
        github: 'https://github.com/Vic-Han/PassnPlayPoker',
        link: 'https://vic-han.github.io/PassnPlayPoker/',
        video : null,
    },
    {
        name: 'Ultimate Tic Tac Toe',
        description: 'This is a project',
        image : image1,
        github: 'https://github.com/Vic-Han/Ultimate-Tic-Tac-Toe-Engine',
        link: 'https://vic-han.github.io/Ultimate-Tic-Tac-Toe-Engine/',
        video : null,
    },

]

export default projects;