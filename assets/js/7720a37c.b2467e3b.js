(self.webpackChunkgridjs_website=self.webpackChunkgridjs_website||[]).push([[9345],{44696:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return o},default:function(){return p}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),s={id:"jquery",title:"jQuery"},l={unversionedId:"integrations/jquery",id:"integrations/jquery",isDocsHomePage:!1,title:"jQuery",description:"jQuery wrapper for Grid.js",source:"@site/docs/integrations/jquery.md",sourceDirName:"integrations",slug:"/integrations/jquery",permalink:"/docs/integrations/jquery",editUrl:"https://github.com/grid-js/website/edit/master/docs/integrations/jquery.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1598096785,formattedLastUpdatedAt:"8/22/2020",frontMatter:{id:"jquery",title:"jQuery"},sidebar:"sidebar",previous:{title:"Svelte",permalink:"/docs/integrations/svelte"},next:{title:"Hello, World!",permalink:"/docs/examples/hello-world"}},o=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[]}],d={toc:o};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/grid-js/gridjs-jquery"},"jQuery wrapper")," for Grid.js"),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Include jQuery and gridjs-jquery in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," tag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/jquery/dist/jquery.min.js"><\/script>\n<script src="https://unpkg.com/gridjs-jquery/dist/gridjs.production.min.js"><\/script>\n<link rel="stylesheet" type="text/css" href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css" />\n')),(0,i.kt)("p",null,"or install using NPM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save gridjs-jquery\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"gridjs-jquery")," contains Grid.js package as well. You don't need to install it separately."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Select your wrapper and call ",(0,i.kt)("inlineCode",{parentName:"p"},"Grid"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"$(\"div#wrapper\").Grid({\n  columns: ['Name', 'Age', 'Email'],\n  data: [\n    ['John', 25, 'john@k.com'],\n    ['Mark', 59, 'mark@e.com'],\n    // ...\n  ],\n});\n")),(0,i.kt)("p",null,"Live example: ",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/gridjs-jquery-jq4zf"},"https://codesandbox.io/s/gridjs-jquery-jq4zf"),"  "),(0,i.kt)("p",null,"Grid.js can also convert an HTML table. Simply select the table with jQuery\nand call ",(0,i.kt)("inlineCode",{parentName:"p"},"Grid"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'$("table#myTable").Grid();\n')),(0,i.kt)("p",null,"You can pass all Grid.js configs to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Grid")," function.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://gridjs.io/docs/config"},"Grid.js Config")," for more details."))}p.isMDXComponent=!0}}]);