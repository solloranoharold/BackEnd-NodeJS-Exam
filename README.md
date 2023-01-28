# Installation

* npm install 

# Create database if not exists  (user_managementdb)

 node createDatabase.js  
 
# Migration and seeders 
 ** Migrate All Tables **
 * npm run db:migrate 
 
 ** Insert All Static Data **
 * npm run db:seed 

# RUN APPLICATION
* _node index_ or _nodemon_

# Headers Authentication 
  * KEY-Name = auth 
 * KEY-Password = db588403f0a1d3b897442a28724166b4 

 
 # API ENDPOINTS 
 
 ** POST ** : _localhost:3000/users/registerUser_

> ** BODY

 > {
 >  "Username" :  "test5",
 >   "Password" : "test",
 >   "FirstName" : "Harold",
 >   "UserLevel" : "User",
 >   "LastName" :  "Sollorano",
 >   "Address" : "GenTri" ,
 >   "PostCode" : "1234" ,
 >   "ContactNo" : "123456778"
 > }


 ** POST ** : _localhost:3000/users/updateUser_
  > {
  > "id" : 1,
 >  "Username" :  "test5",
 >   "Password" : "test",
 >   "FirstName" : "Harold",
 >   "UserLevel" : "User",
 >   "LastName" :  "Sollorano",
 >   "Address" : "GenTri" ,
 >   "PostCode" : "1234" ,
 >   "ContactNo" : "123456778"
 > }

 ** POST ** : _localhost:3000/users/deleteUser_
  > {
  > "id":1
  > }

 ** POST ** : _localhost:3000/users/deleteMultipleUser
  > [
  > 1,2,3
  > ]
 

** GET ** : _localhost:3000/users/getAllUser_

** GET(Login) : _localhost:3000/login/your_username / your_password_

# Test 
* npm test


 

 
 


