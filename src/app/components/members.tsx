export type MemberID = 'frankie' |
                       'remi'    |
                       'pita'    ;

export type MemberData = 'name'  |
                         'image' |
                         'bio'   ;

const members = {
    'frankie': {
        name: 'Frank Lin',
        image: '/assets/people/Frank_Lin.jpg',
        bio: 'I am a full-stack developer who has an endless curiosity for web development and AI. I am on a constant journey of learning and breaking things. Oh, and I am also the President of CodeDevils.',
        
    },
    'remi': {
        name: 'Remi Godin',
        image: '/assets/people/Remi_Godin.png',
        bio: 'Neovim, Linux, Rust, you know the type. I like understanding how stuff works. Also can do some Python, Java, C/C++, and Go.  Canadian guy who just moved to California. After a decade in the industrial automation field, I decided to go back to school and pursue my newfound passion for software engineering.'
    },
    'pita': {
        name: 'Pita Sherwood',
        image: '/assets/people/Pita_Sherwood.png',
        bio: "I'm Pita.  Full stack web and mobile developer, graphic designer.  Technical Project Manager for CodeDevils, you'll see me a lot around here."
    }
}


export const getMember = ({memberID, memberData}:{
    memberID: MemberID,
    memberData: MemberData
}) => {

    return members[memberID][memberData];
}