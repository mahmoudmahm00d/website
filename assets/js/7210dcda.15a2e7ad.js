(self.webpackChunkgridjs_website=self.webpackChunkgridjs_website||[]).push([[9759],{47526:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return o},default:function(){return u}});var n=t(22122),i=t(19756),r=(t(67294),t(3905)),l={title:"Laravel"},s={unversionedId:"integrations/laravel",id:"integrations/laravel",isDocsHomePage:!1,title:"Laravel",description:"This package is a Laravel integration for the Grid.js. The packages makes it easy to create data-grid for your Laravel application, for example admin panel lists. It covers the basic server side functionalities for Grid.js like search, sorting and pagination.",source:"@site/docs/integrations/laravel.md",sourceDirName:"integrations",slug:"/integrations/laravel",permalink:"/docs/integrations/laravel",editUrl:"https://github.com/grid-js/website/edit/master/docs/integrations/laravel.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1617010690,formattedLastUpdatedAt:"3/29/2021",frontMatter:{title:"Laravel"},sidebar:"sidebar",previous:{title:"Angular",permalink:"/docs/integrations/angular"},next:{title:"Svelte",permalink:"/docs/integrations/svelte"}},o=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Credits",id:"credits",children:[]},{value:"License",id:"license",children:[]}],d={toc:o};function u(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This package is a Laravel integration for the Grid.js. The packages makes it easy to create data-grid for your Laravel application, for example admin panel lists. It covers the basic server side functionalities for Grid.js like search, sorting and pagination."),(0,r.kt)("p",null,"GitHub: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wdev-rs/laravel-datagrid"},"https://github.com/wdev-rs/laravel-datagrid")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You can install the package via composer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require wdev-rs/laravel-datagrid\n")),(0,r.kt)("p",null,"Install the Vue.js integration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install gridjs-vue\n")),(0,r.kt)("p",null,"Publish the vendor files by running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'php artisan vendor:publish --provider="WdevRs\\LaravelDatagrid\\LaravelDatagridServiceProvider"\n')),(0,r.kt)("p",null,"Register the DataGrid fronted Vue.js component by adding the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"require('./vendor/laravel-datagrid/laravel-datagrid');\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The base of this package is the ",(0,r.kt)("inlineCode",{parentName:"p"},"\\WdevRs\\LaravelDatagrid\\DataGrid\\DataGrid")," class. This class is used to define the\ncolumns and the behavior of the datagrid. While you can use this class directly from the controller, I'll\nsuggest extending it and create separate classes for each datagrid."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class CategoriesDataGrid extends DataGrid\n{\n\n    /**\n     * CategoriesDataGrid constructor.\n     */\n    public function __construct()\n    {\n        $this->query(Category::query())\n            ->column('id', 'ID', null, 50)\n            ->column('name', 'Name', function ($category) {\n                return view('admin.categories.actions.edit_link', ['category' => $category])->render();\n            })\n    }\n}\n")),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," method you can define what should be the base query for the DataGrid. It accepts a Laravel Query Builder object.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"column")," method is used to define the columns of the DataGrid, the argument are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - the name of the field in the database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - the label which should appear in the DataGrid column header"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formatter")," - optional, callable allows you to format the display of the column. As you can see from the above example\nprobably the most elegant way to do this is to include a blade view and render it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"width")," - optional, the with of the column")),(0,r.kt)("p",null,"When the DataGrid definition is ready, you can add it to the controller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function index(CategoriesDataGrid $dataGrid, Request $request)\n    {\n        return $dataGrid->render();\n    }\n")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," method is called without arguments it will use the default view ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/views/vendor/laravel-datagrid/datagrid.blade.php"),",\nor you can pass your own view and include the DataGrid blade file there:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function index(CategoriesDataGrid $dataGrid, Request $request)\n    {\n        return $dataGrid->render('admin.common.index');\n    }\n")),(0,r.kt)("h2",{id:"credits"},"Credits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wdev-rs"},"Daniel Werner"))),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"The MIT License (MIT)"))}u.isMDXComponent=!0}}]);