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
                    <p><strong>Age:</strong> ${member.age}</p>
                </div>
            </div>
    
        `
    teamCardsContainer.appendChild(card)
    });

}


window.onload = generateTeamCards()