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
        //    debugger
            let newActivity = new Activity(activities, activities.attributes)

            document.querySelector("#activities_container").innerHTML += newActivity.renderActivities()
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
            const activityData = activity.data
            let newActivity = new Activity(activityData, activityData.attributes)

            document.querySelector("#activities_container").innerHTML += newActivity.renderActivities()
          
    })
    
}


