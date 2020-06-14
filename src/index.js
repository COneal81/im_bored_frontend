const endFetchPoint = "http://localhost:3000/api/v1/activities"
const categoryEndPoint = "http://localhost:3000/api/v1/categories"


// Load the DOM and Event Listners
document.addEventListener('DOMContentLoaded', () => {
      // fetch and load Activities and Categories
    getActivities()
    categorySelection()
   
    // listen for a submit event from the form and handle the data beig passed in
    const createActivityForm = document.querySelector('#create-activity-form')
    createActivityForm.addEventListener("submit", (e) => createFormHandler(e))
    

    const editButtonActivitiesContainer = document.querySelector('#activities_container')
    editButtonActivitiesContainer.addEventListener('click', e => {
        const id = parseInt(e.target.dataset.id);
        const activity = Activity.findById(id);
        document.querySelector("#update-activity").innerHTML += activity.renderActivityUpdateForm();
        
        document.querySelector('#update-activity').addEventListener('submit', e => updateActivityFormHandler(e))
    });
})



// READ 
// This from handler is what grabs all of that value from the submitting of a form.
function getActivities() {
    fetch(endFetchPoint)
    .then(response => response.json())
    .then(activities => {
        activities.data.forEach(activities => {
            // debugger
            let allActivities = new Activity(activities.id, activities.attributes)
            document.querySelector("#activities_container").innerHTML += allActivities.renderActivities()
        })
    })    
}


function categorySelection() {
    fetch(categoryEndPoint)
    .then(response => response.json())
    .then(categories => {
        let categorySelection = document.querySelector('#categories')
        categories.data.forEach(category => {
         let option = document.createElement('option');
         option.setAttribute('text', category.attributes.category_name);
         option.setAttribute('value', category.id);
         option.innerHTML = category.attributes.category_name;
         categorySelection.appendChild(option)
        })    
    })  
 }



// CREATE 
function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector("#input-title").value
    const descriptionInput = document.querySelector("#input-description").value
    const categoryId = parseInt(document.querySelector("#categories").value)
    postFetchActivity(titleInput, descriptionInput, categoryId)
}


function postFetchActivity(title, description, category_id) {
    const activityFormData = {title, description, category_id}
    fetch(endFetchPoint, {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(activityFormData)
        })
        .then(response => response.json())
        .then(activity => {
            const newActivity = new Activity(activity.id, activity.data.attributes)
            document.querySelector('#activities_container').innerHTML += newActivity.renderActivities()
    })
}


// UPDATE
function updateCategorySelection() {
    fetch(categoryEndPoint)
           .then(response => response.json())
           .then(categories => {
               let categorySelection = document.querySelector('#update-categories')
               categories.data.forEach(category => {
                let option = document.createElement('option');
                option.setAttribute('text', category.attributes.category_name);
                option.setAttribute('value', category.id);
                option.innerHTML = category.attributes.category_name;
                categorySelection.appendChild(option)
               })    
           })
       }  

       
function updateActivityFormHandler(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const activity = Activity.findById(id);
    const title = e.target.querySelector("#input-title").value
    const description= e.target.querySelector("#input-description").value
    const category = parseInt(e.target.querySelector("#update-categories").value)
    patchFetchActivity(activity, title, description, category)
}



function patchFetchActivity(activity, title, description, category_id){
    const bodyJSONData = {title, description, category_id}
    fetch(`http://localhost:3000/api/v1/activities/${activity.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(bodyJSONData),
    })
    .then(response => response.json())
    .then(updatedActivityJSON => {
        const updatedAct = Activity.updateActivity(updatedActivityJSON)
        activityInfo = document.querySelector('#activities_container')
        activityInfo.innerHTML = updatedAct.renderActivities()
     });
}
    



    



