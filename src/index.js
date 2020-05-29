const endFetchPoint = "http://localhost:3000/api/v1/activities"

document.addEventListener('DOMContentLoaded', () => {
    getActivities()

    const createActivityForm = document.querySelector('#create-activity-form')

    createActivityForm.addEventListener("submit", (e) => createFormHandler(e))
})

// This from handler is what grabs all of that value from the submitting of a form.

function getActivities() {
    fetch(endFetchPoint)
    .then(response => response.json())
    .then(activities => {
        activities.data.forEach(activities => {
    
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



function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector("#input-title").value
    const descriptionInput = document.querySelector("#input-description").value
    const categoryId = parseInt(document.querySelector("#categories").value)
    postFetchActivity(titleInput, descriptionInput, categoryId)
}


function postFetchActivity(title, description, category_id) {
    // console.log(title, description, category_id);
    const activityFormData = {title, description, category_id}
    fetch(endFetchPoint, {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(activityFormData)
        })
        .then(response => response.json())
        .then(activity => {
            const activityData = activity.data.attributes
            renderActivities(activityData)
    })
    
}
function renderActivities(activities) {
    let allActivities = 
    `<div data-id= ${activities.id}>
    <h2>${activities.title}</h2>
    <p>${activities.description}</p>
    <p>Category: ${activities.category.category_name}</p>
    <button data-id=${activities.id}> Edit </button>
    </div>
    <br><br>`

    document.querySelector("#activities_container").innerHTML +=allActivities;
}

