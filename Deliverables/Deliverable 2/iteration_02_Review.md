# iteration_02_Review
# BalanceCheck / Team 14
  
* When:  Fri Nov/2/2018
* Where date: BA 3200

## Process - Reflection

Main goal of the project is to try to meet MVP and then probably work on the feature extensions or improvements which really need time-consuming efforts for this course project. Although to fullfill agile approach we will try to have an evolutionary development that meets deadlines but is responsive to necessary changes at the same time.

#### Decisions that turned out well

* The task board on Trello was instrumental to achieving the goals set out in the planning meeting. The color-coding by team helped all members quickly get their bearings with regards to the tasks remaining for this iteration.
    * [Trello](https://trello.com/b/aTQmNo7I/csc301)


* Weekly meetings were very productive. Once a clear vision of the project had been set, Teams were able to quickly bring each other up to speed, leaving amble time for work within the teams. Having all members present allowed for quick and direct communication, as evinced in these sketches used to describe the databse schema:

    - Meeting 2.3
        - [Artifact 1](https://drive.google.com/open?id=1ZAo-7875OBz33mQIx6SHcnBZy_UDzvkF)
        - [Artifact 2](https://drive.google.com/open?id=1fedFjSMbNIrc1MrTlCXsPPhSabHeMpNZ)
* The github workflow was sucessful in preventing major conflics, and almost all used branches were sucsessfuly merged to master without issue. Team members communicated effectively via github, and used precise, thorough, and clear commit messages.
    - Article card branch.
        - [Example commit](https://github.com/csc301-fall-2018/project-team-14/commit/03e10a0d7ff162fc026a351b727e5931012684b7)
        
* With all the above avenues for project-based information, the messeger group remained effective as an immediate channel for time-sensitive communication and coordination, avoiding uneccesary clutter.




#### Decisions that did not turn out as well as we hoped

* Since the backend was mostly set up before the frontend, this resulted in an uneven distribution of work among team members, specifically a large amount of the heavy-lifting was done by the frontend team. This was unfortunte, especially due to the iteration coinciding with the semester midterms. More attention should be given to the distribution of labour in the future.

* We need to have some minor changes in the models of the data base. The new entities will be as follows:

> ### Entities:
> Article - An article is a url
> User - client
> Vote - unique vote for each user (cannot be edited)

> 
> ### Users 
> **Attributes:**
> username
> password
> email
> 
> **Functions:**
> Create account
> Delete account
> Rate articles
>
> 
> ### Articles
> 
> **Attributes:**
> Title - title of an article (title is a hyperlink to the actual article)
> Rating - An article has a rating in terms of its biasness (See below)
> Authors - lists of authors for this article
> Date - Publish date
> Source - Publisher (EX: www.bbcnews.com)
>  Text - Text of the article
> **Functions:**
> Rate Article - Users can rate an article
> 
> 
> ### Vote 
> 
> **Attributes:**
> Voted by - vote owner
> article - vote for this article
> 


#### Planned changes

 * Nothing to report.


## Product - Review

#### Goals and/or tasks that were met/completed:

 * Having assigned every main aspect of the project to a smaller group of members so that every member knows his/her task and area of collaboration.(Front-end, back-end, data-base and documentation)  
 * Having finalized the project technolgies and having all members sure that they know or have learned related technologies in thier area of work.
 * Having the minimum working back-end and data-base and structure ready to use by the front-end interactions to some extent.
 * Tried to fullfill the minimum coupling and maximum cohesion goal by defining sub-apps in Django and specific tables for them in the DB.
 * Having a basic article scraping function that extracts the attributes of an article using Newspaper Python library.
 * Having a working front-end initial design of the main page of the website including menus and navigation bar.
 * Applying a material design to the frontend
 * Creating React components for homepage, about page and article card
 * Creating a demo video for our project (thanks to Naz's amazing acting)

#### Goals and/or tasks that were planned but not met/completed:

 * Tagging articles by keywords topics was discarded, as we realized the implementation would be too time- and resource-consuming for the scope of this project, with little effect on product functionality.
 * Parsing based extraction of article metadata (title, author, etc) was deffered to next iteration, as it is not stricly required by this iteration's MVP.
 * Implementation of the Topic Card will be done in the next iteration due to plan change
 * Having a perfect design (css details and visual design)

## Meeting Highlights

Going into the next iteration, our main insights are:
 * Having back-end data base and structure such that we could have minimum coupling and maximum cohesion in Django apps views and models and probably by some change in tables of the DB.
 * Having front-end structure designed such that it ensures user-friendly approach and less unnecessary interaction of the user with the data base at the same time.
 * Having a working project that certainly satsifies MVP and working on feature improvements like ability to search by topic or having a discussion board for user if time permits.
 * Having more code review session
 * Havinga better Github branch organization and workflow

