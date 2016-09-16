# TimeLord Online
This is an online timetabling program, similar to my previous TimeLord project, only with a better UI and online properties.

## Aims

TimeLord was written without prototyping, and I noticed a few problems with the final result:
  - Early design problems led to unefficient code, that was sometimes hard to maintain.
  - The UI created didn't look terribly wonderful. The whole table UI was drawn using a PictureBox, which had worked on the system that TimeLord was designed to replace.
  - File storage was a proprietary format.

## Improvements

  - The online version shall use HTML to create a better GUI, and thanks to CSS we can style this GUI.
  - Animations on the GUI can be created using local javascript, and interaction with the timetable can also take place with the local javascript
  - When we finally want to store the files, we can send a post request back to the server. These post requests can also occur as changes happen, so there is little chance of data loss if the local machine goes down/loses connection.
  - Printing will be easy as we can use CSS and HTML to make a lovely timetable. Also, the user can customise the templates themselves.
 
 
