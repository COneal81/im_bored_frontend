class Activity {
    // static creates a class method that you can call as such Activity.methodName()
    static findById(id) {
        return this.all.find(activity => activity.id == id);
    }


    static updateActivity(updatedActivityData) {
        const activityToUpdate = this.findById(updatedActivityData.data.id)
        // debugger
        activityToUpdate.title = updatedActivityData.data.attributes.title
        activityToUpdate.description = updatedActivityData.data.attributes.description
        activityToUpdate.category = updatedActivityData.data.attributes.category
    // debugger
        return activityToUpdate
    
    }


    constructor(id, activitiesAttributes) {
        this.id = id;
        this.title = activitiesAttributes.title;
        this.description = activitiesAttributes.description;
        this.category = activitiesAttributes.category;
        Activity.all.push(this)
    }


    // function key word decloration is not needed in classes
    renderActivities() {
        return `
            <div data-id= ${this.id}>
                <h2> ${this.title}</h2>
                <p><strong>Description:</strong> ${this.description}</p>
                <p><strong>Category:</strong> ${this.category.category_name}</p>

                <button data-id=${this.id}> Edit </button>
            </div>
            <br><br>`;
    }

    

    renderActivityUpdateForm() {
        updateCategorySelection()
        // debugger
        return `
            <form data-id=${this.id}>
            <h4> Update Activity </h4>

                <label><strong> Title: </strong></label>
                <input id='input-title' type='text' name='title' value='${this.title}' class='input-text'>
                <br><br>

                <label><strong> Description: </strong></label>
                <textarea id="input-description" name="description" rows="2" cols="55" value="">${this.description} </textarea>
                <br><br>
                
            
                <h5> <strong>Select a Category </strong><h5>
                <select id='update-categories' name='update-categories' value="${this.category.id}">
                
                </select>
                <br><br>
                
                <input id='edit-button' type='submit' name='submit' value='Update ${this.title}' class='submit'>
                <br><br>
            </form>
       `;
    }
}

// Needs to be outside of the class so it has a global scope.
Activity.all = [];