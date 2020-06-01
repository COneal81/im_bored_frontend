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


}
// Needs to be outside of the class so it has a global scope.
Activity.all = [];