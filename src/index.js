const endFetchPoint = "http://localhost:3000/api/v1/activities"

document.addEventListener('DOMContentLoaded', () => {
    getActivities()
})

function getActivities() {
    fetch(endFetchPoint)
    .then(response => response.json())
    .then(activities => {
        activities.data.forEach(activities => {
            // debugger
            const allActivities = `
            <div data-id= ${activities.id}>
            <h2>${activities.attributes.title}</h2>
            <p>${activities.attributes.description}</p>
            <p>Category: ${activities.attributes.category.category_name}</p>
            <button data-id=${activities.id}> Edit </button>
            </div>
            <br><br>`

            document.querySelector("#activities_container").innerHTML +=allActivities
        })
    })
        
    }

    