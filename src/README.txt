+. CSS

Project Root
└── src
    ├── Less                     
        ├── index.less          // Imports of all the base stylesheets
            ├── settings        // colors, variables, fonts goes here
                └── global
                └── colors          
            ├── tools
                └── mixins      
            ├── generic         // reset and/or normalize styles goes here
            ├── elements        // styling for bare HTML elements (like H1, A, etc.)
                └── page
                └── headings              
            ├── components      // specific classed UI components
                └── columns
                └── list
                └── box
                └── animation           
            └── utilities      // specific and helper classes
     

+. Accessibility

    To attain acceptable constract (WACG 2.0 AA) between foreground and background 
    some color values has been changed in 'scenerio-accessibility.html'.

        1.  List background color: #E5E5E5 to #F3F3F3 

        2. Green header color: #249A31 to  #188625
