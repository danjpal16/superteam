// team member data

const teamMembers = [
    {
        name: 'Eric Cartman',
        age: '10',
        height: '4ft 8in',
        weight: 'Overweight',
        purpose: 'Comic Relief',
        strengths: 'Master Manipulator, Resourcefulness, Occasionally displays leadership qualities',
        weaknesses: 'Selfishness, Arrogance, Impulsiveness, Lack of empathy, Fat',
        skills: 'Big Eater, Funny, Smart, Persuasive speech, Strategic thinking' ,
        biography: 'Eric Cartman, the cunning and malevolent fourth grader from South Park, Colorado, is notorious for his selfish antics, relentless pursuit of personal gain, and talent for stirring controversy among his peers.',
        img: "ec1.png",
    },
    {
        name: 'Stan Marsh',
        age: '10',
        height: '4ft 6in',
        weight: 'Average',
        purpose: 'Moral center of the group',
        strengths: ['Empathy', 'Loyalty to friends', 'Strong sense of justice'],
        weaknesses: ['Naive', 'Easily influenced by peer pressure'],
        skills: ['Leadership', 'problem-solving', 'occasional musical talent'],
        biography: 'In South Park, Colorado, Stan Marsh, a compassionate fourth grader, embarks on comedic adventures with his close friends, navigating the towns absurdities.',
        img: "sm1.png",
    },
    {
        name: 'Kenny McCormick',
        age: '10',
        height: '4ft 6in',
        weight: 'Average',
        purpose: 'Sacrificial comedic relief',
        strengths: 'Resilience, Loyalty to friends, Occasional acts of heroism',
        weaknesses: 'Muffled speech (due to his hood), Poor, Frequent unfortunate accidents',
        skills: ['Survival instincts', 'Street smarts', 'Resourcefulness'],
        biography: 'In South Park, Colorado, Kenny McCormick, a perpetually hooded fourth grader, embodies the unpredictability of life in the eccentric town through a series of bizarre and often fatal mishaps.',
        img: "km1.png",
    },
    {
        name: 'Kyle Broflovski',
        age: '10',
        height: '4ft 9in',
        weight: 'Average',
        purpose: 'Voice of reason and morality',
        strengths: 'Intelligence, Strong sense of justice, Loyalty to friends',
        weaknesses: 'Stubbornness, Tendency to overreact emotionally',
        skills: ['Critical thinking', 'Problem-solving', 'Occasional proficiency in public speaking'],
        biography: 'Kyle Broflovski, a principled and intellectually curious fourth grader from South Park, Colorado, confronts prejudice and injustice with unwavering determination as he navigates the absurdities of life in the small mountain town alongside his friends.',
        img: "kb1.png",
    },
    {
        name: 'Butters Stotch',
        age: '10',
        height: '4ft',
        weight: 'Average',
        purpose: 'Main supporting characters, Target of ridicule and mistreatment',
        strengths: 'Kind-hearted, Resilience, Creativity',
        weaknesses: 'Naive, Gullible, Lack of assertiveness',
        skills: ['Singing', 'Imagination', 'Tap dancing'],
        biography: 'Butters Stotch, residing in South Park, Colorado, with his overprotective parents, Stephen and Linda, attends South Park Elementary where he faces frequent bullying yet maintains a cheerful demeanor, eagerly seeking friendship and helping others, his naive nature leading to amusing predicaments, endearing him as a beloved character in the "South Park" series.',
        img: "b1.png",
    },
    {
        name: 'Mr. Mackey',
        age: 'Late 30s or early 40s',
        height: '5ft 10in',
        weight: 'Below Average',
        purpose: 'School Counselor, Provides guidance and support',
        strengths: 'Empathy, Patience, Conflict Resolution',
        weaknesses: 'Naive, Overly Simplistic Advice, Personal Insecurities',
        skills: ['Counseling', 'Public Speaking', 'Music'],
        biography: 'Mr. Mackey, the school counselor at South Park Elementary, is known for his catchphrase "mmkay" and his earnest but sometimes flawed efforts to help students, yet consistently offering guidance and support with compassion.',
        img: "mm1.png",
    },
    {
        name: 'Mr. Garrison',
        age: 'Late 40s or early 50s',
        height: '5ft 9in',
        weight: '170lbs',
        purpose: 'Satirical representation of controversial and changing social norms, Comic relief, Social Commentary',
        strengths: 'Versatility, Resilience, Satirical Insight',
        weaknesses: 'Erratic Behavior, Identity Struggles, Extremism',
        skills: ['Teaching', 'Political Maneuvering', 'Adaptability'],
        biography: 'Mr. Herbert Garrison, a long-time resident and teacher in South Park, Colorado, undergoes personal transformations, including gender reassignment surgery, and unexpectedly wins the presidency in a satirical portrayal of real-world politics, serving as a central figure in the series for his eccentric behavior and sharp social commentary.',
        img: "mg1.png",
    },
    {
        name: 'Chef',
        age: 'Mid-40s',
        height: '6ft 3in',
        weight: '250lbs',
        purpose: 'Fatherly figure and mentor to the boys, Offering sage advice and guidance, Voice of reason',
        strengths: 'Wisdom, Musical Talent, Culinary SKills',
        weaknesses: 'Gullibility, etc (ones I cannot state)',
        skills: ['Cooking', 'Singing', 'Mentoring'],
        biography: 'Chef, the beloved school cafeteria chef in South Park, Colorado, known for his soulful singing and affection for the kids, provides advice while his humorous songs about love and sex add to his character, though his departure, due to being brainwashed by a cult, remains controversial yet memorable in the series.',
        img: "c1.png",
    },
    {
        name: 'PC Principal',
        age: 'Mid-to-late 30s',
        height: '6ft 1in',
        weight: '220lbs',
        purpose: 'Enforces politically correct culture, Maintains an environment free of discrimination and insensitivity',
        strengths: 'Passionate, Physical Strength, Leadership',
        weaknesses: 'Overzealousness, Aggression, Hypocrisy',
        skills: ['Enforcement of Policies', 'Physical Fitness', 'Public Speaking'],
        biography: 'PC Principal arrives at South Park Elementary, advocating for political correctness with aggressive tactics yet occasionally revealing a nuanced understanding of social issues, embodying the shows satire on contemporary PC culture.',
        img: "pcp1.webp",
    },
    {
        name: 'Randy Marsh',
        age: '45',
        height: '6ft',
        weight: '220lbs',
        purpose: 'Satirical representation of the average American middle-aged man, Comic Relief, Reflects the flaws of everyday life',
        strengths: 'Versatility, Enthusiasm, Resourcefulness',
        weaknesses: 'Impulsiveness, Obsession, Ignorance',
        skills: ['Geology', 'Entrepreneurship', 'Musical Talent'],
        biography: 'Randy Marsh, the eccentric father embarks on impulsive and often absurd adventures, from posing as a pop star to running a marijuana business, reflecting the shows satire on the trials of middle-aged men while remaining a central figure in his family and community.',
        img: "rm1.png",
    },
]

function generateTeamCards(){

    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-3')


        let backgroundColor

        switch(member.name.toLowerCase()) {
            case 'eric cartman':
                backgroundColor = "red"
                break;
            case 'stan marsh':
                backgroundColor = "navy"
                break;
            case 'kenny mccormick':
                backgroundColor = "orange"
                break;
            case 'kyle broflovski':
                backgroundColor = "greenyellow"
                break;
            case 'butters stotch':
                backgroundColor = "turquoise"
                break;
            case 'mr. mackey':
                backgroundColor = "gray"
                break;
            case 'mr. garrison':
                backgroundColor = "green"
                break;
            case 'chef':
                backgroundColor = "brown"
                break;
            case 'pc principal':
                backgroundColor = "darkblue"
                break;
            case 'randy marsh':
                backgroundColor = "darkcyan"
                break;
            
        }





        card.style.backgroundColor = backgroundColor







        card.innerHTML= `
            <div class="card p-2">
                <div class="card-header">
                ${member.name}
                </div>
                <div class="card-body">
                <img class="img-fluid" src="${member.img}">
                    <strong>Age:</strong> ${member.age}
                    <ul>
                        <li><strong>Height:</strong> ${member.height}</li>
                        <li><strong>Weight:</strong> ${member.weight}</li>
                        <li><strong>Purpose:</strong> ${member.purpose}</li>
                        <li><strong>Strengths:</strong> ${member.strengths}</li>
                        <li><strong>Weaknesses:</strong> ${member.weaknesses}</li>
                        <li><strong>Skills:</strong> ${member.skills}</li>
                    </ul>
                    <strong>Bio:</strong> ${member.biography}
                </div>
            </div>
    
        `
    teamCardsContainer.appendChild(card)
    });

}


window.onload = generateTeamCards()