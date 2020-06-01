class Activity {
    constructor(activities, activitiesAttributes) {
        this.id = activities.id
        this.title = activitiesAttributes.title
        this.description = activitiesAttributes.description
        this.category = activitiesAttributes.category
        // push all new instances into the Activity array
        Activity.all.push(this)
        // debugger
    }
    // function key word decloration is not needed in classes
    renderActivities() {
        //  debugger
        return `
        <div data-id= ${this.id}>
        <h2>${this.title}</h2>
        <p>${this.description}</p>
        <p>Category: ${this.category.category_name}</p>
        <button data-id=${this.id}> Edit </button>
        </div>
        <br><br>`;
    }

}
// Needs to be outside of the class so it has a global scope.
Activity.all = [];