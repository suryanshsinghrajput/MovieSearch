# 4 september 2022
i started this project.

# Work Diary

This is a work diary of this project. 

October 9th 2022

And now we are in phase 11.
add essential libraries.

1. local storage 
1. react router dom

libraries are added.

next

react router dom hello world. Different links and showing different things.
https://medium.com/projectwt/create-react-app-hello-world-2022-edition-f36275a0e7c4

bootstrap is already added. that' good.

we have this.


    ERROR in ./src/components/Home.js 4:0-46

so, routing is done.

next,

facebook automatically logs in. If possible, we should stop this behavior.
react-facebook-login

https://github.com/keppelen/react-facebook-login

removed this line.


    autoLoad={true}

after logging in, on another tab, we should automatically detect and show user details. DONE.
next

more featuers.
 
October 8th 2022
Game Plan :

MovieSearch16 : 
1. we must rebuild/recopy/reuse/recycle the movie search project in react 16.
1. open the previous ‘project’.
1. create a new React 16 project. 
1. add both google login and facebook login.
1. move all the components from the ‘previous’ project to the new React 16 project.
1. After this is working, start adding new features and ideas until the batch is over.

first step is get the backend ready.

MongoDB_API_CRUD_HelloWorld

it is ready, it is working from Postman.

now, front end.

this is the problem.

    "react": "^18.2.0",
    "react-dom": "^18.2.0",
So, the old React JS 18.X version is working.

now, building the React 16 project.

https://github.com/Jay-study-nildana/FrontEndForStudents/tree/main/ReactJSForStudents/reactgoogleloginhelloworld https://github.com/Jay-study-nildana/FrontEndForStudents/tree/main/ReactJSForStudents/reactfbloginhelloworld

in these projects, we have

    "react": "^16.0.0",
    "react-dom": "^16.0.0",
new project folder

MovieSearch16

okay, google login is working.

next, add facebook login.

npm install react-facebook-login

get google and fb login to work in the same project. 
1. we can use both. 
we built a ‘dedicated’ login component.
App.js is very small, again.
Next, discuss and make the next plan.

# September 18th 2022

Ready to go to the next step. 

Next : 

1. Connect the 'search term' with the back end POST endpoint. 
1. get the results in the console log. 
1. Show the results in the component view

Get the host. 

http://localhost:8081/

this.server.get('/dummycar', (req, res) => {

http://localhost:8081/dummycar
this.server.get('/dummycarwithlodash', (req, res) => {

http://localhost:8081/dummycarwithlodash

this.server.post('/mongodb/searchformovie', (req, res) => {

http://localhost:8081/mongodb/searchformovie

termone: req.body.termone

{
    "termone" : ""
}

Phase Six Completed. 

Next : 

1. Router. Routing. Different links have different components.
1. local storage. Useful for storing user details.
1. FB login. 
1. Google login.
1. Put all this, in our movie project



# September 17th 2022

Ready to start Phase VI. 

Project has been cloned and everything is looking good. 

We can get the input box and POST search code from here 

https://github.com/Jay-study-nildana/FrontEndForStudents/blob/main/ReactJSForStudents/axioshelloworldhttps/src/components/PostSomethingMongo.js

https://developer.mozilla.org/en-US/docs/Web/Events

Okay, input box done. 

and button click is able to show the input gox 'search term'.

Next : 

1. Connect the 'search term' with the back end POST endpoint. 
1. get the results in the console log. 
1. Show the results in the component view

# September 11th 2022

Ready to start Phase V. 

Branch is 

https://github.com/Jay-study-nildana/MovieSearch/tree/PhaseFiveBeginsSeptember11th2022


Two references 

https://github.com/Jay-study-nildana/FrontEndForStudents/blob/main/ReactJSForStudents/axioshelloworldhttps/src/components/GetSomethingWithButton.js

https://github.com/Jay-study-nildana/FrontEndForStudents/blob/main/ReactJSForStudents/axioshelloworldhttps/src/components/PostSomethingMongo.js

Now, i have the movie count displaying. 

show the movie array in a list. 

```
                {post.movies.map((singlemovieitem) =>
                    <MovieItem key={singlemovieitem._id} movie={singlemovieitem} />
                )}
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Okay, able to show a list of movies in react JS. 

Phase Five is complete. 

# September 10th. 

Phase Three : Completed. 

Phase Four : has begun. 

1. put the NASA output into a separate component in a separate file.  

using this as an example. 

https://github.com/Jay-study-nildana/FrontEndForStudents/blob/main/ReactJSForStudents/StarterNASAAPODReactJS/src/NASAAPOD/APODWithAPI.js

Moved NASA code to separate component. 

App.js now only has components and nothing else. 

That is Phase Four complete. 


# September 4th 2022

Started this project. 

GamePlan 

I want to get the API server. (our focus is React JS axios, so, right now we will just copy, the API server)
Note : later, we have to build the API server also. 
