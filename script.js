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
        age: '',
        height: 'ft in',
        weight: '',
        purpose: '',
        strengths: '',
        weaknesses: '',
        skills: [''],
        biography: '',
        img: "mg1.png",
    },
    {
        name: 'Chef',
        age: '',
        height: 'ft in',
        weight: '',
        purpose: '',
        strengths: '',
        weaknesses: '',
        skills: [''],
        biography: '',
        img: "c1.png",
    },
    {
        name: 'PC Principal',
        age: '',
        height: 'ft in',
        weight: '',
        purpose: '',
        strengths: '',
        weaknesses: '',
        skills: [''],
        biography: '',
        img: "pcp1.webp",
    },
    {
        name: 'Randy Marsh',
        age: '',
        height: 'ft in',
        weight: '',
        purpose: '',
        strengths: '',
        weaknesses: '',
        skills: [''],
        biography: '',
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