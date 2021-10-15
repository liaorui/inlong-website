"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3439],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7987:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"Architecture - Apache InLong's TubeMQ module"},c=void 0,l={unversionedId:"modules/tubemq/architecture",id:"modules/tubemq/architecture",isDocsHomePage:!1,title:"Architecture - Apache InLong's TubeMQ module",description:"1. TubeMQ Architecture:",source:"@site/docs/modules/tubemq/architecture.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/architecture",permalink:"/docs/modules/tubemq/architecture",editUrl:"https://github.com/apache/incubator-inlong-website/edit/main/docs/modules/tubemq/architecture.md",tags:[],version:"current",frontMatter:{title:"Architecture - Apache InLong's TubeMQ module"},sidebar:"tutorialSidebar",previous:{title:"Build && Deployment",permalink:"/docs/modules/dataproxy-sdk/quick_start"},next:{title:"Client RPC - Apache InLong's TubeMQ module",permalink:"/docs/modules/tubemq/client_rpc"}},u=[{value:"1. TubeMQ Architecture:",id:"1-tubemq-architecture",children:[]},{value:"2. Broker File Storage Scheme Improvement:",id:"2-broker-file-storage-scheme-improvement",children:[]}],p={toc:u};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-tubemq-architecture"},"1. TubeMQ Architecture:"),(0,a.kt)("p",null,"After years of evolution, the TubeMQ cluster is divided into the following 5 parts:\xa0\n",(0,a.kt)("img",{src:r(4504).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Portal\uff1a")," The Portal part responsible for external interaction and maintenance operations, including API and Web. The API connects to the management system outside the cluster. The Web is a page encapsulation of daily operation and maintenance functions based on the API;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Master\uff1a")," It is responsible for the Control part of the cluster. This part is composed of one or more Master nodes. Master HA performs heartbeat keep-alive and real-time hot standby switching between master nodes (This is the reason why everyone needs to fill in the addresses of all Master nodes corresponding to the cluster when using TubeMQ Lib). The main master is responsible for managing the status of the entire cluster, resource scheduling, permission checking, metadata query, etc;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Broker\uff1a")," The Store part responsible for data storage. This part is composed of independent Broker nodes. Each Broker node manages the Topic set in this node, including the addition, deletion, modification, and inquiring about Topics. It is also responsible for message storage, consumption, aging, partition expansion, data consumption offset records, etc. on the topic, and the external capabilities of the cluster, including the number of topics, throughput, and capacity, are completed by horizontally expanding the broker node;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Client\uff1a")," The Client part responsible for data production and consumption. We provide this part in the form of Lib. The most commonly used is the consumer. Compared with the previous, the consumer now supports Push and Pull data pull modes, data consumption behavior support both order and filtered consumption. For the Pull consumption mode, the service supports resetting the precise offset through the client to support the business extract-once consumption. At the same time, the consumer  has launched a new cross-cluster switch-free BidConsumer client;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Zookeeper\uff1a")," Responsible for the Zookeeper part of the offset storage. This part of the function has been weakened to only the persistent storage of the offset. Considering the next multi-node copy function, this module is temporarily reserved;"))),(0,a.kt)("h2",{id:"2-broker-file-storage-scheme-improvement"},"2. Broker File Storage Scheme Improvement:"),(0,a.kt)("p",null,"Systems that use disks as data persistence media are faced with various system performance problems caused by disk problems. The TubeMQ system is no exception, the performance improvement is largely to solve the problem of how to read, write and store message data. In this regard TubeMQ has made many improvements: storage instances is as the smallest Topic data management unit; each storage instance includes a file storage block and a memory cache block; each Topic can be assigned multiple storage instances. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"File storage block:")," The disk storage solution of TubeMQ is similar to Kafka, but it is not the same, as shown in the following figure: each file storage block is composed of an index file and a data file; the partiton is a logical partition in the data file; each Topic maintains and manages the file storage block separately, the related mechanisms include the aging cycle, the number of partitions, whether it is readable and writable, etc.\n",(0,a.kt)("img",{src:r(6341).Z}))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Memory cache block:")," We added a separate memory cache block on the file storage block, that is, add a block of memory to the original write disk to isolate the slow effect of the hard disk. The data is first flushed to the memory cache block, and then the memory cache block is batched flush the data to the disk file.\n",(0,a.kt)("img",{src:r(539).Z}))))}m.isMDXComponent=!0},6341:function(e,t,r){t.Z=r.p+"assets/images/store_file-afacb93118082ca4afc7f0ee3176af70.png"},539:function(e,t,r){t.Z=r.p+"assets/images/store_mem-05a41b24e2b5e68a769c9236d1e063d4.png"},4504:function(e,t,r){t.Z=r.p+"assets/images/sys_structure-8696e2c7dfebcbe30e47b2d99e185485.png"}}]);