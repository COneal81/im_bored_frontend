class Activity {
    constructor(id, activitiesAttributes) {
        this.id = id;
        this.title = activitiesAttributes.title;
        this.description = activitiesAttributes.description;
        this.category = activitiesAttributes.category;
        // push all new instances into the Activity array
        Activity.all.push(this)
        // debugger
    }



    // function key word decloration is not needed in classes
    renderActivities() {
        //  debugger
        return `
            <div data-id= ${this.id}>
                <h2> ${this.title}</h2>
                <p><strong>Description:</strong> ${this.description}</p>
                <p><strong>Category:</strong> ${this.category.category_name}</p>
                <button data-id=${this.id}> Edit </button>
            </div>
            <br><br>`;
    }

    

    static findById(id) {
        return this.all.find(activity => activity.id == id);
    }



    renderActivityUpdateForm() {
        //  debugger
        return `
            <form data-id=${this.id}>
            <h4> Update Activity </h4>

                <label><strong> Title: </strong></label>
                <input id='input-title' type='text' name='title' value='${this.title}' class='input-text'>
                <br><br>

                <label><strong> Description: </strong></label>
                <textarea id="input-description" name="description" rows="2" cols="55" value="">${this.description} </textarea>
                <br><br>
                
                <label> <strong>Select a Category </strong></label>
                <select id='categories' name='categories' value='${this.category.category_name}'>
                    <option value="1">Winter</option>
                    <option value="2">Spring</option>
                    <option value="3">Summer</option>
                    <option value="4">Winter</option>
                    <option value="5">Indoor</option>
                    <option value="6">Outdoor</option>
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