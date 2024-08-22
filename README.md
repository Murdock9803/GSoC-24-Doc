<div align="center">
  
# Google Summer Of Code 2024 - Final Report

<img width="1381" alt="" src="https://github.com/Murdock9803/GSoC-24-Doc/blob/main/src/assets/GSoC%2BCC-banner.png">

***

| **Project**:  | [Modernize CC Resource Archive](https://summerofcode.withgoogle.com/programs/2024/projects/ZIhUmKRN)  |
| ------------- | ------------- |
| **Organization**:  | [Creative Commons](https://github.com/creativecommons)  |
| **Contributor**: | [Ayush Sahu](https://github.com/Murdock9803)|
| **Mentors:**  | <table><tr><td>**Lead**:</td><td>[Sara Lovell](https://github.com/possumbilities)</td></tr><tr><td>**Support**:</td><td>[Shafiya Heena](https://github.com/Shafiya-Heena), [Timid Robot Zehta](https://github.com/TimidRobot)</td></tr></table> |

***

## THE PROJECT I AM WORKING ON 

<div align="left">

Creative Commons has been advocating for the Open Sharing of knowledge for years, standardizing the process of granting permissions to use someone's work legally. The [CC Resource Archive](https://resources.creativecommons.org/) is the home to various resources about Creative Commons submitted by people all over the world.

The project - ***Modernize CC Resource Archive*** focuses on implementing a comprehensive  visual overhaul to the Resource Archive to align with current Creative Commons aesthetics and functionality standards. Utilizing the Internal Design System (Vocabulary), the project aims to upgrade the visual design, implement semantic, accessible, and standards-compliant HTML, CSS, and JavaScript, and improve user experience (UX) for resource submission while ensuring site stability on GitHub Pages. Through these efforts and solid documentation, the revamped Resources Archive will meet modern standards, enhance usability, and facilitate maintainability for both users and developers.

</div>

***

## OVERALL IMPACT

<div align="left">

The project's main focus is not just to improve the User Interface of the *Resource Archive* but also making it more accessible and maintainable. At the completion of the project, the Resource Archive site will be at par with other Creative Commons sites, and follow the same design scheme. This will enhance the user experience with enhancements/addition of various functionalities.

</div>

***

## CONTRIBUTIONS AND WORK (MERGED)

<div align="left">

Throughout the program timeline, the following tasks were executed/merged. As the project involved major changes in user interface, many PRs are based on CSS and JavaScript code. The resource archive is built on Jekyll as static pages, deployed with Github Pages. The local development setup is most preferably done with Docker.

- ### Development Environment Optimisation and Setup - PRs [#266](https://github.com/creativecommons/cc-resource-archive/pull/266), [#268](https://github.com/creativecommons/cc-resource-archive/pull/268) and [#279](https://github.com/creativecommons/cc-resource-archive/pull/279)
  With help from mentors and thorough testing, we were able to optimize the development environment, update the `docker-compose.yml` file to the current spec, and made sure the local development experience remains seamless.
  
- ### Improving File Structure - PRs [#280](https://github.com/creativecommons/cc-resource-archive/pull/280), [#281](https://github.com/creativecommons/cc-resource-archive/pull/281), [#282](https://github.com/creativecommons/cc-resource-archive/pull/282), [#289](https://github.com/creativecommons/cc-resource-archive/pull/289), [#292](https://github.com/creativecommons/cc-resource-archive/pull/292) and  [#296](https://github.com/creativecommons/cc-resource-archive/pull/296)
  After discussing with my mentor, I improved the file structure in the codebase for better understandability and maintainability. After updating the structure, the paths to all the files that were changed were modified.  This was achieved by a group of Pull Requests that were created catering to the issue.

- ### Listing Page UI Changes - PRs [#298](https://github.com/creativecommons/cc-resource-archive/pull/298) and  [#302](https://github.com/creativecommons/cc-resource-archive/pull/302)
  The `listing.html` page is responsible for the display of resource cards on the `index.html` and `all.html` pages. The resource cards had an outdated visual setup and needed to be aligned with the Internal Design System of Creative Commons known as Vocabulary.
  
- ### Listing Page (All) JavaScript Changes - PR [#300](https://github.com/creativecommons/cc-resource-archive/pull/300)
  The javaScript code in `listing.html` file resided in the `<head>` section of the page. The code was outdated and was lacking the ES6 JavaScript concepts. For example, there were uses of `var` keyword, `document.write()` method, etc.. The code was responsible for a number of tasks related to the display of resources. It extracted the user-selected categories from the URL and then returned them as variables. Also, the javaScript code was responsible for displaying the resources which contained the selected categories. 

- ### Resource Page UI Changes - PR [#304](https://github.com/creativecommons/cc-resource-archive/pull/304)
  The resource page is a `layout` to show various resources that are submitted in the resource archive. This layout page accepts values from the `front matter` of various resources. This page was overall enhanced in terms of alignment to Creative Commons’ Design System. 

- ### Submission Page UI Changes - PR [#315](https://github.com/creativecommons/cc-resource-archive/pull/315)
  The submission.html page is responsible for the area where contributors come to contribute to the resource archive with their resources about Creative Commons or Open sharing of knowledge in general. 

- ### Filters Placement and Functioning - PR [#316](https://github.com/creativecommons/cc-resource-archive/pull/316)
  The resource archive utilizes filters to select similar resources. These filters are grouped in the form of three categories, TOPIC, MEDIUM and LANGUAGE. Each category has some filter options to choose from. In the previous iteration of the resource archive site, the category filters were placed in the middle of the page, and they also did not have any icon for the indication of a selected filter. 
  
</div>

***

## STRETCH GOALS & FUTURE WORK (TO BE DONE)

<div align="left">

- ### WAI ARIA Accessibility
  To enhance the ease of access for all the users across the world, we are including ARIA accessibility to the website, This was a goal suggested by my mentor once I completed the tasks mentioned in the timeline.
  
- ### Search Functionality with LUNR.js
  As the site contains a number of resources on various topics related to Creative Commons and Open Sharing of Knowledge, the user might want to search for a specific resource. This can be achieved if the site has a search algorithm supporting strong searches. After discussion, we selected LUNR.js to be the library which will be included in the website.
  
</div>

***

## PROJECT INSIGHTS - BLOG POSTS

<div align="left">

- #### From Start to MidTerm - [Empowering Open Knowledge: GSoC 2024 With Creative Commons](https://opensource.creativecommons.org/blog/entries/empowering-open-knowledge-gsoc-2024-with-creative-commons/)
- #### From MidTerm to End - [Continuing Open Collaboration: GSoC 2024 With Creative Commons]()
  
</div>

***


## CONCLUSION, GRATITUDE AND MESSAGE FOR NEW CONTRIBUTORS

<div align="left">

I would like to express my heartfelt gratitude to my mentors and the entire Creative Commons community for giving me this incredible opportunity. Your support and guidance have been invaluable. Special thanks to my mentor [Sara Lovell (Possumbilities)](https://github.com/possumbilities) for the constant support that I received from you all the time. I am really grateful for not only the technical help, but also the motivation, support and encouragement I got from your side. Also [Timid Robot](https://github.com/TimidRobot) and [Shafiya Heena](https://github.com/Shafiya-Heena) were always present there whenever I needed them. Be it the weekly review meetings, or my confusion related to the development environment, I never felt I’m alone in this . I am excited to work further under your guidance and contribute to the shared vision of Creative Commons.

All the contributors that are hoping to contribute to this repository, or this organization, I welcome you with all my heart. If you are targeting to get selected in an Open Source mentorship program, that is a great idea. But do not just contribute to Open Source for the sake of resume building and stipend. I agree they are very good benefits, but Open Source is simply much more than this. Once you contribute to Open Source, you will fall in love with the support you get from this community, just like I did. You can find me on [GitHub](https://github.com/) and on the [CC-Resource-Archive](https://github.com/creativecommons/cc-resource-archive) repository mainly. Let’s have the conversation there!
  
</div>

***

</div>
