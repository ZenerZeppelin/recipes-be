# recipes-be

Back-end application that allows users to read recipes. Authenticated users can add, edit or delete recipes and mark their favourite ones.
Recipes are organized by categories.  Admins can add, edit or delete categories.

Libraries/Technologies used:  
-express.js web framework  
-mongoose.js for communicating with database  
-jsonwebtoken.js for authenticating users  
-bcrypt.js for hashing users' passwords  

Collections in mongodb database:  
-users  
-recipes  
-categories  

There are also configuration files for dockerizing the application.
