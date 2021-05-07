(self.webpackChunkgridjs_website=self.webpackChunkgridjs_website||[]).push([[6369],{72117:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return o},default:function(){return p}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i={id:"server",title:"server"},d={unversionedId:"config/server",id:"config/server",isDocsHomePage:!1,title:"server",description:"To load and import data from a remote URL. Server storage uses fetch API to send the call and fetch the data.",source:"@site/docs/config/server.md",sourceDirName:"config",slug:"/config/server",permalink:"/docs/config/server",editUrl:"https://github.com/grid-js/website/edit/master/docs/config/server.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1592342160,formattedLastUpdatedAt:"6/16/2020",frontMatter:{id:"server",title:"server"},sidebar:"sidebar",previous:{title:"columns",permalink:"/docs/config/columns"},next:{title:"style",permalink:"/docs/config/style"}},o=[],s={toc:o};function p(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To load and import data from a remote URL. Server storage uses ",(0,l.kt)("inlineCode",{parentName:"p"},"fetch")," API to send the call and fetch the data."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"optional")," (",(0,l.kt)("inlineCode",{parentName:"li"},"data"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"from")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"server")," must be provided)"),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("a",{parentName:"li",href:"/docs/examples/server"},"Server"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/examples/server-side-search"},"Server-side search")," and ",(0,l.kt)("a",{parentName:"li",href:"/docs/examples/server-side-pagination"},"Server-side pagination"))),(0,l.kt)("div",{className:"full-width"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"Server base URL"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://myapi.com"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method ",(0,l.kt)("inlineCode",{parentName:"td"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP method"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GET"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"POST"),", etc")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headers ",(0,l.kt)("inlineCode",{parentName:"td"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP headers"),(0,l.kt)("td",{parentName:"tr",align:null},"HeadersInit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ 'Accept-Charset': 'utf-8', 'X-My-Custom-Header': 'cool' }"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body ",(0,l.kt)("inlineCode",{parentName:"td"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP Body payload"),(0,l.kt)("td",{parentName:"tr",align:null},"BodyInit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ 'loginId': 'gridjs', 'password': 'd4da' }"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"then ",(0,l.kt)("inlineCode",{parentName:"td"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Function to refine/select attributes"),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(data) => [data.name, data.email]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"handle ",(0,l.kt)("inlineCode",{parentName:"td"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Function to handle the response"),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res) => res.json()"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"total ",(0,l.kt)("inlineCode",{parentName:"td"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Function to set the total records"),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(data) => data.total")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Grid({\n  columns: ['Name', 'Language', 'Released At', 'Artist'],\n  server: {\n    url: 'https://api.scryfall.com/cards/search?q=Inspiring',\n    then: data => data.data.map(card => [card.name, card.lang, card.released_at, card.artist]),\n    handle: (res) => {\n      // no matching records found\n      if (res.status === 404) return {data: []};\n      if (res.ok) return res.json();\n      \n      throw Error('oh no :(');\n    },\n  } \n});\n")))}p.isMDXComponent=!0}}]);