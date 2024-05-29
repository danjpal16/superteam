// team member data

const teamMembers = [
    {
        name: 'Eric Cartman',
        age: '10',
        height: '4ft 8in',
        weight: 'Overweight',
        purpose: 'Comic Relief',
        strengths: ['Master Manipulator', 'Resourcefulness', 'Occasionally displays leadership qualities'],
        weaknesses: ['Selfishness', 'Arrogance', 'Impulsiveness', 'Lack of empathy', 'Fat'],
        skills: ['Big Eater', 'Funny', 'Smart', 'Persuasive speech', 'Strategic thinking'],
        biography: 'Eric Cartman, a cunning and often malevolent fourth grader from South Park, Colorado, is known for his selfish antics, relentless pursuit of personal gain, and knack for stirring up controversy among his peers',
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
        biography: 'Stan Marsh, a compassionate and principled fourth grader from South Park, Colorado, navigates the absurdities of life in the small mountain town alongside his close friends, often finding himself at the center of bizarre and comedic adventures',
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
        biography: 'Kenny McCormick, a perpetually hooded and ill-fated fourth grader from South Park, Colorado, endures a series of bizarre and often fatal mishaps, symbolizing the unpredictability and fragility of life in the eccentric mountain town',
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
        biography: 'Kyle Broflovski, a principled and intellectually curious fourth grader from South Park, Colorado, navigates the absurdities of life in the small mountain town alongside his friends, often confronting prejudice and injustice with unwavering determination',
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
        biography: 'Butters Stotch lives in South Park, Colorado, with his overprotective parents, Stephen and Linda. He attends South Park Elementary, where he is frequently bullied. Despite this, Butters stays cheerful, eager to make friends and lend a hand. His naive nature often lands him in amusing predicaments, making him a beloved character in the "South Park" series',
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
        biography: 'Mr. Mackey is the school counselor at South Park Elementary, where he has worked for many years. He is known for his distinctive catchphrase, "mmkay," and his well-intentioned but sometimes misguided attempts to help the students. Despite his professional role, Mr. Mackey has his own struggles, including a history of substance abuse, which is occasionally referenced in the show. Throughout the series, he provides guidance and support to the students, often with mixed results, but his heart is always in the right place ',
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
        biography: 'Mr. Herbert Garrison is a long-time resident and teacher in the small mountain town of South Park, Colorado. Known for his bizarre and often inappropriate behavior, Mr. Garrison has undergone numerous personal transformations, including gender reassignment surgery to become Mrs. Garrison, and later de-transitioning back to Mr. Garrison. His life took a significant turn when he ran for President of the United States, winning the election in a storyline that closely parodied real-world political events. Throughout his tumultuous journey, Mr. Garrison remains a provocative and controversial figure, reflecting the irreverent take on identity, politics, and society at large. Despite his flaws and often offensive antics, he is a central figure in the series, providing both comic relief and sharp social commentary.',
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
        biography: 'Jerome "Chef" McElroy is the beloved school cafeteria chef in the town of South Park, Colorado. Known for his soulful singing voice and his affectionate term "children" for addressing the kids, Chef is a central figure who often provides the boys—Stan, Kyle, Cartman, and Kenny—with advice and support. Despite his jovial and caring nature, Chef is also characterized by his strong libido, frequently singing about love and sex, which provides much of the humor. His character was written out of the series in a controversial episode, where it was revealed that Chef had been brainwashed by a cult, leading to his untimely demise. Despite his departure, Chef remains a memorable and iconic character in the South Park universe.',
        img: "c1.png",
    },
    {
        name: 'PC Principal',
        age: 'Mid-to-late 30s',
        height: '6ft 1in',
        weight: '220lbs',
        purpose: 'Enforces politically correct culture in South Park Elementary, Maintains an environment free of discrimination and insensitivity',
        strengths: 'Passionate, Physical Strength, Leadership',
        weaknesses: 'Overzealousness, Aggression, Hypocrisy',
        skills: ['Enforcement of Policies', 'Physical Fitness', 'Public Speaking'],
        biography: 'PC Principal, whose full name is not revealed in the series, arrives in South Park as the new principal of South Park Elementary, replacing Principal Victoria. He is a staunch advocate for political correctness and takes his role seriously, often going to extreme lengths to ensure that the students and faculty adhere to his strict standards of social justice and sensitivity. His tenure is marked by his aggressive approach to handling issues of discrimination, bullying, and offensive behavior. Despite his often abrasive methods, PC Principal occasionally shows a more nuanced understanding of the complexities of social issues. He becomes a prominent figure in South Park, embodying the satirical take on the sometimes overbearing nature of political correctness in contemporary society.',
        img: "pcp1.webp",
    },
    {
        name: 'Randy Marsh',
        age: '45',
        height: '6ft',
        weight: '220lbs',
        purpose: 'Satirical representation of the average American middle-aged man, Comic Relief, Reflects the flaws and follies of everyday life',
        strengths: 'Versatility, Enthusiasm, Resourcefulness',
        weaknesses: 'Impulsiveness, Obsession, Ignorance',
        skills: ['Geology', 'Entrepreneurship', 'Musical Talent'],
        biography: 'Randy S. Marsh is a geologist and the eccentric father of Stan Marsh, living in the small town of South Park, Colorado. Known for his impulsive and often ridiculous behavior, Randy frequently finds himself embroiled in a variety of outlandish and humorous situations. From becoming a pop star (Lorde) to running Tegridy Farms, his marijuana business, Randy exploits are marked by his boundless enthusiasm and lack of foresight. Despite his many flaws and frequent embarrassments, Randy remains a central figure in his family and the South Park community. His actions, though often misguided, reflect the satirical take on the trials and tribulations of the average American middle-aged man.',
        img: "rm1.png",
    },
]

function generateTeamCards(){

    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-3')


        let backgroundColor

        switch(member.age.toLowerCase()) {
            case '10':
                backgroundColor = ""
                break
        }





        card.style.backgroundColor = backgroundColor







        card.innerHTML= `
            <div class="card ">
                <div class="card-header">
                ${member.name}
                </div>
                <div class="card-body">
                <img src="${member.img}">
                    <p><strong>Age:</strong> ${member.age}</p>
                </div>
            </div>
    
        `
    teamCardsContainer.appendChild(card)
    });

}


window.onload = generateTeamCards()