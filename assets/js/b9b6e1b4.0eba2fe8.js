(self.webpackChunkgridjs_website=self.webpackChunkgridjs_website||[]).push([[296],{35553:function(e,n,t){"use strict";t.d(n,{$:function(){return l}});var a=t(93552),r=t(10175),o={search:{placeholder:"\ud83d\udd0d Busqueda..."},sort:{sortAsc:"Ordenar la columna en orden ascendente",sortDesc:"Ordenar la columna en orden descendente"},pagination:{previous:"Anterior",next:"Siguiente",navigate:function(e,n){return"P\xe1gina "+e+" de "+n},page:function(e){return"P\xe1gina "+e},showing:"Mostrando los resultados",of:"sobre",to:"a",results:""},loading:"Cargando...",noRecordsFound:"Nig\xfan resultado encontrado",error:"Se produjo un error al recuperar datos"},s={search:{placeholder:"\ud83d\udd0d Recherche..."},sort:{sortAsc:"Trier la colonne dans l'ordre croissant",sortDesc:"Trier la colonne dans l'ordre d\xe9croissant"},pagination:{previous:"Pr\xe9c\xe9dent",next:"Suivant",navigate:function(e,n){return"Page "+e+" de "+n},page:function(e){return"Page "+e},showing:"Affichage des r\xe9sultats",of:"sur",to:"\xe0",results:""},loading:"Chargement...",noRecordsFound:"Aucun r\xe9sultat trouv\xe9",error:"Une erreur est survenue lors de la r\xe9cup\xe9ration des donn\xe9es"},i=t(16589),d=t(67294),c=t(85384),l=function(e){function n(){return e.apply(this,arguments)||this}return(0,a.Z)(n,e),n.prototype.render=function(){return d.createElement(i.Z,{children:this.props.children,transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (typeof (grid) == 'object' && wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:Object.assign({Grid:r.rj,html:r.dy,h:r.h,gCreateRef:r.Vf,gComponent:r.wA,PluginPosition:r.t8,BaseComponent:r.H6,CodeBlock:i.Z,useEffect:d.useEffect,useRef:d.useRef,faker:c,esES:o,frFR:s},this.props.scope)})},n}(d.Component)},6613:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),s=t(35553),i={id:"loading-state",title:"Loading State",keywords:["javascript","table","javascript table","gridjs","grid js","load","loading"]},d={unversionedId:"examples/loading-state",id:"examples/loading-state",isDocsHomePage:!1,title:"Loading State",description:"Grid.js renders a loading bar automatically while it waits for the data to be fetched. Here we are using an async",source:"@site/docs/examples/loading-state.md",sourceDirName:"examples",slug:"/examples/loading-state",permalink:"/docs/examples/loading-state",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/loading-state.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,formattedLastUpdatedAt:"7/1/2020",frontMatter:{id:"loading-state",title:"Loading State",keywords:["javascript","table","javascript table","gridjs","grid js","load","loading"]},sidebar:"sidebar",previous:{title:"Resizable columns",permalink:"/docs/examples/resizable"},next:{title:"Wide Table",permalink:"/docs/examples/wide-table"}},c=[],l={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Grid.js renders a loading bar automatically while it waits for the data to be fetched. Here we are using an async\nfunction to demonstrate this behaviour (e.g. an async function can be a XHR call to a server backend)"),(0,o.kt)(s.$,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  sort: true,\n  search: true,\n  data: () => {\n    return new Promise(resolve => {\n      setTimeout(() =>\n        resolve([\n          ['John', 'john@example.com', '(353) 01 222 3333'],\n          ['Mark', 'mark@gmail.com', '(01) 22 888 4444']\n        ]), 2000);\n    });\n  }\n});\n",mdxType:"LiveExample"}),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Other operations like searching and sorting happens immediately because the data has already been imported and cached\nby the Grid.js pipeline. We only pay the cost of importing initial data (",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout")," in this case)"))))}u.isMDXComponent=!0}}]);