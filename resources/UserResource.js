const Resource = require('resources.js');

class UserResource extends Resource {

    toArray() {
        return  {
            id: this._id,
            name: this.name,
            email: this.email,
          }
      
    }
}



module.exports = UserResource;
