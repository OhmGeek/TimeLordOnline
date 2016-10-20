# TimeLordOnline
This is an online timetabling program, similar to my previous TimeLord project, only with a better UI and online properties.

## Inspiration

Back when I was in Sixth Form (back in 2014/2015), I developed TimeLord, a timetabling system for my school timetabler. The program itself had various design flaws, and also featured a relatively ugly UI. 

With the wonders of modern HTML5 and CSS3, UI can be rapidly improved. Using MongoDB and the joys of JSON, data can be dealt with in a better way, which hopefully won't be as problematic when it comes to working with larger timetables. Finally, using the powerful ExpressJS, pages can be developed on the fly, using a light server platform.

## Tools

I'm using ExpressJS for the server logic, rendering pages using Mustache-Express. The main GUI will be created in HTML and CSS, perhaps using Bootstrap. This will interface with a MongoDB database to store all the created timetables, and login will be managed using Google (which makes things more secure).

## How to use

The program is very much in the development stage, although if you want, you can simply run:

  npm install OhmGeek/TimeLordOnline --save
  
## Improvements/Suggestions

If you have any suggestions for TimeLordOnline (name change might happen at some point), then please let me know! Contact me on GitHub, send a feature request, or perhaps help with the development!
