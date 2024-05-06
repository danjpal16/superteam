// team member data

const teamMembers = [
    {
        name: 'Eric Cartman',
        age: '10',
        height: '4ft 4in',
        weight: '90lbs',
        purpose: 'Comic Relief',
        strengths: 'Master Manipulator',
        weaknesses: 'Fat',
        skills: ['Big Eater', 'Funny', 'Smart'],
        biography: 'Eric Cartman is a child',
    }
]

function generateTeamCards(){

    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        card.innerHTML= `
            <div class="card">
                <div class="card-header">
                ${member.name}
                </div>
                <p>
                ${member.age}
                </p>
            </div>
        
        `
    teamCardsContainer.appendChild(card)
    });

}


window.onload = generateTeamCards()