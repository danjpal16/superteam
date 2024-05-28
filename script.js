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
        img: "ec1.png",
    },
    {
        name: 'Stan Marsh',
        age: '10',
        height: '4ft 4in',
        weight: '90lbs',
        purpose: 'Comic Relief',
        strengths: 'Master Manipulator',
        weaknesses: 'Fat',
        skills: ['Big Eater', 'Funny', 'Smart'],
        biography: 'Eric Cartman is a child',
        img: "sm1.png",
    },
    {
        name: 'Kenny McCormick',
        age: '10',
        height: '4ft 4in',
        weight: '90lbs',
        purpose: 'Comic Relief',
        strengths: 'Master Manipulator',
        weaknesses: 'Fat',
        skills: ['Big Eater', 'Funny', 'Smart'],
        biography: 'Eric Cartman is a child',
        img: "km1.png",
    },
    {
        name: 'Kyle Broflovski',
        age: '10',
        height: '4ft 4in',
        weight: '90lbs',
        purpose: 'Comic Relief',
        strengths: 'Master Manipulator',
        weaknesses: 'Fat',
        skills: ['Big Eater', 'Funny', 'Smart'],
        biography: 'Eric Cartman is a child',
        img: "kb1.png",
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