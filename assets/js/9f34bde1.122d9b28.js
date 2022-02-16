"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6182],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,p=f["".concat(l,".").concat(m)]||f[m]||d[m]||s;return r?n.createElement(p,i(i({ref:t},c),{},{components:r})):n.createElement(p,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45082:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),i=["components"],a={title:"Overview",sidebar_position:1},l="overview",u={unversionedId:"modules/sort/overview",id:"version-0.12.0/modules/sort/overview",title:"Overview",description:"Inlong-sort is used to extract data from different source systems, then transforms the data and finally loads the data into diffrent storage systems.",source:"@site/versioned_docs/version-0.12.0/modules/sort/overview.md",sourceDirName:"modules/sort",slug:"/modules/sort/overview",permalink:"/docs/0.12.0/modules/sort/overview",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.12.0/modules/sort/overview.md",tags:[],version:"0.12.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Performance testing of TubeMQ vs Kafka",permalink:"/docs/0.12.0/modules/tubemq/tubemq_perf_test_vs_Kafka_cn"},next:{title:"Deployment",permalink:"/docs/0.12.0/modules/sort/quick_start"}},c=[{value:"1 multi-tenancy",id:"1-multi-tenancy",children:[],level:2},{value:"2 change meta data without restart",id:"2-change-meta-data-without-restart",children:[],level:2},{value:"3 supported sources",id:"3-supported-sources",children:[],level:2},{value:"4 supported storages",id:"4-supported-storages",children:[],level:2},{value:"5 limitations",id:"5-limitations",children:[],level:2},{value:"6 future plans",id:"6-future-plans",children:[{value:"6.1 More kinds of source systems",id:"61-more-kinds-of-source-systems",children:[],level:3},{value:"6.2 More kinds of storage systems",id:"62-more-kinds-of-storage-systems",children:[],level:3},{value:"6.3 More kinds of file format in hive sink",id:"63-more-kinds-of-file-format-in-hive-sink",children:[],level:3}],level:2}],d={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"overview"},"overview"),(0,s.kt)("p",null,"Inlong-sort is used to extract data from different source systems, then transforms the data and finally loads the data into diffrent storage systems.\nInlong-sort is simply an Flink application, and relys on Inlong-manager to manage meta data(such as the source informations and storage informations)"),(0,s.kt)("h1",{id:"features"},"features"),(0,s.kt)("h2",{id:"1-multi-tenancy"},"1 multi-tenancy"),(0,s.kt)("p",null,"Inlong-sort is an multi-tenancy system, which means you can extract data from different sources(these sources must be of the same source type) and load data into different sinks(these sinks must be of the same storage type).\ne.g. you can extract data form different topics of inlong-tubemq and the load them to different hive clusters."),(0,s.kt)("h2",{id:"2-change-meta-data-without-restart"},"2 change meta data without restart"),(0,s.kt)("p",null,"Inlong-sort uses zookeeper to manage its meta data, every time you change meta data on zk, inlong-sort application will be informed immediately.\ne.g if you want to change the schema of your data, just change the meta data on zk without restart your inlong-sort application."),(0,s.kt)("h2",{id:"3-supported-sources"},"3 supported sources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"inlong-tubemq"),(0,s.kt)("li",{parentName:"ul"},"pulsar")),(0,s.kt)("h2",{id:"4-supported-storages"},"4 supported storages"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"clickhouse"),(0,s.kt)("li",{parentName:"ul"},"hive (Currently we just support parquet file format)")),(0,s.kt)("h2",{id:"5-limitations"},"5 limitations"),(0,s.kt)("p",null,"Currently, we just support extracting specified fields in the stage of ",(0,s.kt)("strong",{parentName:"p"},"Transform"),"."),(0,s.kt)("h2",{id:"6-future-plans"},"6 future plans"),(0,s.kt)("h3",{id:"61-more-kinds-of-source-systems"},"6.1 More kinds of source systems"),(0,s.kt)("p",null,"kafka and etc"),(0,s.kt)("h3",{id:"62-more-kinds-of-storage-systems"},"6.2 More kinds of storage systems"),(0,s.kt)("p",null,"Hbase, Elastic Search, and etc"),(0,s.kt)("h3",{id:"63-more-kinds-of-file-format-in-hive-sink"},"6.3 More kinds of file format in hive sink"),(0,s.kt)("p",null,"sequence file, orc"))}f.isMDXComponent=!0}}]);