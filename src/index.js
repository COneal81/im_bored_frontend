const endFetchPoint = "http://localhost:3000/api/v1/activities"

document.addEventListener('DOMContentLoaded', () => {
    getActivities()

    const createActivityForm = document.querySelector('#create-activity-form')

    createActivityForm.addEventListener("submit", (e) =>
    createFormHandler(e))
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
        
    function createFormHandler(e) {
        e.preventDefault()
        const titleInput = document.querySelector("#input-title").value
        const descriptionInput = document.querySelector("#input-description").value
        const categoryInput = parseInt(document.querySelector("#categories").value)
        postFetch(titleInput, descriptionInput, categoryInput)
    }
    
    function postFetch(titleInput, descriptionInput, category_id) {
        console.log(titleInput, descriptionInput, category_id)
    }
}

    