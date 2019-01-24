# iteration-03.review
# BalanceCheck / Team 14

## Iteration 3 - Review & Retrospect

 * **When:** Friday, 30/11/18 13:00 - 16:00.
 * **Where:** BA 3200.

## Process - Reflection

#### Introduction

The completion of the MVP webapp for deliverable 3 required significant effort from the team to orchestrate the interactions between the different layers.

While some stretch goals of the project did not make it into the webapp, most of the product goals have been successfully met, and the team is quite proud of the current state of the project. 

This document provides an in-depth review of different takeaways from this iteration.

#### Decisions that turned out well

* The decision to set time aside for inter-layer clarifications proved itself valuable many times over.
    * During this time, members of different teams participated in short pair programming sessions to familiarize themselves with the syntax and structure of the other layers in the application.
    * The resulting improvement in codebase familiarity allowed for quick and confident adjustments during the integration process.

* The clarification of proper GitHub procedure resulted in a significant decrease in merge issues, as well as a faster recovery when merge issues did occur.
    * Commits were more clear and verbose.
    * Team members performed better code review before making / merging pull requests. 
      * [Pull request example.](https://drive.google.com/drive/folders/1q9uQQpnUxGm8U7QOMT4VPALJ4VxhhZ1Y?usp=sharing)
   	

#### Decisions that did not turn out as well as we hoped


* The stretch goals (A chrome extension and User login functionality) proved too complex to be implemented within the time frame, and were dropped early into the iteration,
    * This happened primarily because we did not assign these tasks in previous iterations, and no team members had experience in either of these functionalities.
    * As a result, the team did not have a realistic time frame for the implementation of these concepts.
    * As soon as the timescale for these features became apparent, we made a quick and firm decision to shelve these plans, with the option to attempt them if the MVP came together ahead of schedule.
* The meeting format from previous iterations was convenient for the team, but did not consider the inevitable growth of work as the MVP deadline approached.
    * As a result, the team found itself in need of additional project work without a workable schedule in which to do it.
    * The growth in work should have been anticipated, and planned for by lengthening meetings and/or adding new ones.

#### Planned changes


If we were to continue the project, we would make the following changes:
* More dynamic meeting schedule.
    * Anticipation of crunch times.
    * Time set aside in case more team meetings are needed.
* Stricter enforcement of documentation.
    * Choice of an official documentation format, especially for cross-layer methods and endpoints.
    * A wiki might be useful for describing the structure of some of the project components.
* Setting concrete technical requirements before proposing a feature or functionality.
    * To ensure realistic expectations can be set for features in which no team member is experienced.


## Product - Review

#### Goals and/or tasks that were met/completed:

**General**
* Website is working
* Created a demo video for our project (thanks to Naz's amazing editing and Josh's smooth voice)


**Frontend**
* Completed views
    * Homepage.
      * Working search by text/url.
      * Add article functionality.
      * Suggestion notification when no articles found
* Completed Article Card 
    * Improved visuals and displays the # votes in a color coordinated bar graph
*  Completed Article Page
    * Working article page with all article info & buttons.
        * working vote card with 5 category voting feature.
* Add Article
    * Working pop-up with a text field with add article button that creates an article into DB from a valid url

**Backend**
* All methods responsible for diffrent Endpoints used by front-end are functional.
* New articles are successfully added to DB via create article button.
* Database structure is in a way that provides the efficient queries by front-end app without needing to access it too frequently and unsafely.


#### Goals and/or tasks that were planned but not met/completed:

 * User login to allow users to track their history.
     * Addressed above.
 * Chrome Extension to allow users to vote directly from an article while logged in.
     * Addressed above.


## Meeting Highlights

Going into the next iteration, our main insights are:


 * Experience is key when setting deadlines.
     * Without knowledge of a framework / language / system, planing and development are next to impossible. If a component of the project is new territory for the team, experience must be gained **before** any reasonable plans can be put into motion.
 * Team members are human beings.
     * While unforeseen circumstances affecting the availability of team members cannot be predicted, they are also inevitable. We can and must design a team workflow which is flexible and able to adapt to these surprises. 