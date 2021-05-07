(self.webpackChunkgridjs_website=self.webpackChunkgridjs_website||[]).push([[9948],{42303:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return r},metadata:function(){return i},toc:function(){return m},default:function(){return p}});var a=e(22122),l=e(19756),o=(e(67294),e(3905)),r={id:"sort",title:"sort"},i={unversionedId:"config/sort",id:"config/sort",isDocsHomePage:!1,title:"sort",description:"To enable the sorting plugin. Sort has two config objects:",source:"@site/docs/config/sort.md",sourceDirName:"config",slug:"/config/sort",permalink:"/docs/config/sort",editUrl:"https://github.com/grid-js/website/edit/master/docs/config/sort.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1592045086,formattedLastUpdatedAt:"6/13/2020",frontMatter:{id:"sort",title:"sort"},sidebar:"sidebar",previous:{title:"search",permalink:"/docs/config/search"},next:{title:"pagination",permalink:"/docs/config/pagination"}},m=[{value:"Generic sort config",id:"generic-sort-config",children:[]},{value:"Column specific sort config",id:"column-specific-sort-config",children:[]}],s={toc:m};function p(t){var n=t.components,e=(0,l.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To enable the sorting plugin. Sort has two config objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Generic config:")," to enable sort for all columns, enable multi column sort, server-side integration, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Column specific config:")," to enable sort on a specific column, to set custom comparator function, etc.")),(0,o.kt)("h2",{id:"generic-sort-config"},"Generic sort config"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"optional")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"GenericSortConfig")),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("a",{parentName:"li",href:"/docs/examples/sorting"},"Sorting"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GenericSortConfig")," type has the following properties:"),(0,o.kt)("div",{className:"full-width"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"to enable/disable sorting"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"multiColumn ",(0,o.kt)("inlineCode",{parentName:"td"},"optional")),(0,o.kt)("td",{parentName:"tr",align:null},"Enable/disable multi column sort"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"server ",(0,o.kt)("inlineCode",{parentName:"td"},"optional")),(0,o.kt)("td",{parentName:"tr",align:null},"Server-side integration"),(0,o.kt)("td",{parentName:"tr",align:null},"ServerConfig"))))),(0,o.kt)("p",null,"To simply enable sort for all columns:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new Grid({\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],\n    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],\n    ['Nisen', 'nis900@gmail.com',   '313 333 1923']\n  ],\n  sort: true\n});\n")),(0,o.kt)("p",null,"To disable multi column sorting:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new Grid({\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],\n    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],\n    ['Nisen', 'nis900@gmail.com',   '313 333 1923']\n  ],\n  sort: {\n    multiColumn: false\n  }\n});\n")),(0,o.kt)("h2",{id:"column-specific-sort-config"},"Column specific sort config"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"optional")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"SortConfig")),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("a",{parentName:"li",href:"/docs/examples/custom-sort"},"Custom sort"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SortConfig")," type has the following properties:"),(0,o.kt)("div",{className:"full-width"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"to enable/disable pagination"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"compare ",(0,o.kt)("inlineCode",{parentName:"td"},"optional")),(0,o.kt)("td",{parentName:"tr",align:null},"custom comparator function"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Comparator<TCell>")))))),(0,o.kt)("p",null,"To disable sort on a specific column:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new Grid({\n  columns: [\n    'Name',\n    'Email',\n    { \n      name: 'Phone Number',\n      sort: {\n        enabled: false\n      }\n    }\n  ],\n  sort: true,\n  data: [\n    ['John', 'john@example.com', '+353 40 222 3333'],\n    ['Mark', 'mark@gmail.com',   '+1 22 888 4444'],\n  ]\n});\n")),(0,o.kt)("p",null,"Or to use a custom comparator on a column:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new Grid({\n  columns: [\n    'Name',\n    'Email',\n    { \n      name: 'Phone Number',\n      sort: {\n        compare: (a, b) => {\n          if (a > b) {\n            return 1;\n          } else if (b > a) {\n            return -1;\n          } else {\n            return 0;\n          }\n        }\n      }\n    }\n  ],\n  sort: true,\n  data: [\n    ['John', 'john@example.com', '+353 40 222 3333'],\n    ['Mark', 'mark@gmail.com',   '+1 22 888 4444'],\n  ]\n});\n")))}p.isMDXComponent=!0}}]);