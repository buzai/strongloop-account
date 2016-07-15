

module.exports = function(app) {

  var Role = app.models.jikeUser;
  Role.create(

    [
    {username: 'John', email: 'john@doe.com', password: 'opensesame'},
    {username: 'Jane', email: 'jane@doe.com', password: 'opensesame'},
    {username: 'Bob', email: 'bob@projects.com', password: 'opensesame'}
],

 function(err, users) 
 {
    if (err) return 
        // Create projects, assign project owners and project team members
        // Create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {

 
      // Make Bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[2].id
      }, function(err, principal) {
        if (err) return debug(err);
        debug(principal);
      });
    });
  }
  );
};