# 4 september 2022
i started this project.

# Work Diary

This is a work diary of this project. 

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
