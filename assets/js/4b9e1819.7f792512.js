(self.webpackChunkgridjs_website=self.webpackChunkgridjs_website||[]).push([[5253],{35553:function(e,n,t){"use strict";t.d(n,{$:function(){return d}});var r=t(93552),o=t(10175),s={search:{placeholder:"\ud83d\udd0d Busqueda..."},sort:{sortAsc:"Ordenar la columna en orden ascendente",sortDesc:"Ordenar la columna en orden descendente"},pagination:{previous:"Anterior",next:"Siguiente",navigate:function(e,n){return"P\xe1gina "+e+" de "+n},page:function(e){return"P\xe1gina "+e},showing:"Mostrando los resultados",of:"sobre",to:"a",results:""},loading:"Cargando...",noRecordsFound:"Nig\xfan resultado encontrado",error:"Se produjo un error al recuperar datos"},a={search:{placeholder:"\ud83d\udd0d Recherche..."},sort:{sortAsc:"Trier la colonne dans l'ordre croissant",sortDesc:"Trier la colonne dans l'ordre d\xe9croissant"},pagination:{previous:"Pr\xe9c\xe9dent",next:"Suivant",navigate:function(e,n){return"Page "+e+" de "+n},page:function(e){return"Page "+e},showing:"Affichage des r\xe9sultats",of:"sur",to:"\xe0",results:""},loading:"Chargement...",noRecordsFound:"Aucun r\xe9sultat trouv\xe9",error:"Une erreur est survenue lors de la r\xe9cup\xe9ration des donn\xe9es"},i=t(16589),c=t(67294),u=t(85384),d=function(e){function n(){return e.apply(this,arguments)||this}return(0,r.Z)(n,e),n.prototype.render=function(){return c.createElement(i.Z,{children:this.props.children,transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (typeof (grid) == 'object' && wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:Object.assign({Grid:o.rj,html:o.dy,h:o.h,gCreateRef:o.Vf,gComponent:o.wA,PluginPosition:o.t8,BaseComponent:o.H6,CodeBlock:i.Z,useEffect:c.useEffect,useRef:c.useRef,faker:u,esES:s,frFR:a},this.props.scope)})},n}(c.Component)},42929:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var r=t(22122),o=t(19756),s=(t(67294),t(3905)),a=t(35553),i={id:"custom-sort",title:"Custom sort",keywords:["javascript","table","javascript table","gridjs","grid js","sort","custom sort","sorting"]},c={unversionedId:"examples/custom-sort",id:"examples/custom-sort",isDocsHomePage:!1,title:"Custom sort",description:"You can customize the sort plugin by using the compare function. Each column accepts a custom compare function.",source:"@site/docs/examples/custom-sort.md",sourceDirName:"examples",slug:"/examples/custom-sort",permalink:"/docs/examples/custom-sort",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/custom-sort.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,formattedLastUpdatedAt:"7/1/2020",frontMatter:{id:"custom-sort",title:"Custom sort",keywords:["javascript","table","javascript table","gridjs","grid js","sort","custom sort","sorting"]},sidebar:"sidebar",previous:{title:"Multi column sort",permalink:"/docs/examples/multi-sort"},next:{title:"Stock Market",permalink:"/docs/examples/stock-market"}},u=[],d={toc:u};function l(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can customize the sort plugin by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"compare")," function. Each column accepts a custom ",(0,s.kt)("inlineCode",{parentName:"p"},"compare"),' function.\nIn this example, we are sorting the "Phone Number" column based on the ',(0,s.kt)("em",{parentName:"p"},"last 4 digits"),":"),(0,s.kt)(a.$,{children:"\nconst grid = new Grid({\n  columns: [\n    'Name',\n    'Email',\n    { \n      name: 'Phone Number',\n      sort: {\n        compare: (a, b) => {\n          const code = (x) => x.split(' ').slice(-1)[0];\n          \n          if (code(a) > code(b)) {\n            return 1;\n          } else if (code(b) > code(a)) {\n            return -1;\n          } else {\n            return 0;\n          }\n        }\n      }\n    }\n  ],\n  sort: true,\n  data: [\n    ['John', 'john@example.com', '+353 40 222 3333'],\n    ['Mark', 'mark@gmail.com',   '+1 22 888 4444'],\n    ['Eoin', 'eo3n@yahoo.com',   '+355 10 878 5554'],\n    ['Nisen', 'nis900@gmail.com',   '+313 333 1923']\n  ]\n});\n",mdxType:"LiveExample"}))}l.isMDXComponent=!0}}]);