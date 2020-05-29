const endFetchPoint = "http://localhost:3000/api/v1/activities"

document.addEventListener('DOMContentLoaded', () => {
    getActivities()
})

function getActivities() {
    fetch(endFetchPoint)
    .then(response => response.json())
    .then(activities => {
        console.log(activities);
    })
        
    }