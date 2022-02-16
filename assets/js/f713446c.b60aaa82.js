"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6101],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=s.createContext({}),l=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return s.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),g=r,p=m["".concat(c,".").concat(g)]||m[g]||d[g]||o;return t?s.createElement(p,a(a({ref:n},u),{},{components:t})):s.createElement(p,a({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16662:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var s=t(87462),r=t(63366),o=(t(67294),t(3905)),a=["components"],i={title:"Producer Example",sidebar_position:4},c=void 0,l={unversionedId:"modules/tubemq/producer_example",id:"version-0.12.0/modules/tubemq/producer_example",title:"Producer Example",description:"1 Producer Example",source:"@site/versioned_docs/version-0.12.0/modules/tubemq/producer_example.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/producer_example",permalink:"/docs/0.12.0/modules/tubemq/producer_example",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.12.0/modules/tubemq/producer_example.md",tags:[],version:"0.12.0",sidebarPosition:4,frontMatter:{title:"Producer Example",sidebar_position:4},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/0.12.0/modules/tubemq/quick_start"},next:{title:"Consumer Example",permalink:"/docs/0.12.0/modules/tubemq/consumer_example"}},u=[{value:"1 Producer Example",id:"1-producer-example",children:[{value:"1.1 TubeSingleSessionFactory",id:"11-tubesinglesessionfactory",children:[{value:"1.1.1 Send Message Synchronously",id:"111-send-message-synchronously",children:[],level:4},{value:"1.1.2 Send Message Asynchronously",id:"112-send-message-asynchronously",children:[],level:4},{value:"1.1.3 Send Message With Attributes",id:"113-send-message-with-attributes",children:[],level:4}],level:3},{value:"1.2 TubeMultiSessionFactory",id:"12-tubemultisessionfactory",children:[],level:3}],level:2}],d={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,s.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-producer-example"},"1 Producer Example"),(0,o.kt)("p",null,"  TubeMQ provides two ways to initialize session factory, TubeSingleSessionFactory and TubeMultiSessionFactory:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TubeSingleSessionFactory creates only one session in the lifecycle, this is very useful in streaming scenarios."),(0,o.kt)("li",{parentName:"ul"},"TubeMultiSessionFactory creates new session on every call.")),(0,o.kt)("h3",{id:"11-tubesinglesessionfactory"},"1.1 TubeSingleSessionFactory"),(0,o.kt)("h4",{id:"111-send-message-synchronously"},"1.1.1 Send Message Synchronously"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'   \n   public final class SyncProducerExample {\n   \n       public static void main(String[] args) throws Throwable {\n           final String masterHostAndPort = "localhost:8000";\n           final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n           final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);\n           final MessageProducer messageProducer = messageSessionFactory.createProducer();\n           final String topic = "test";\n           final String body = "This is a test message from single-session-factory!";\n           byte[] bodyData = StringUtils.getBytesUtf8(body);\n           messageProducer.publish(topic);\n           Message message = new Message(topic, bodyData);\n           MessageSentResult result = messageProducer.sendMessage(message);\n           if (result.isSuccess()) {\n               System.out.println("sync send message : " + message);\n           }\n           messageProducer.shutdown();\n       }\n   }\n')),(0,o.kt)("h4",{id:"112-send-message-asynchronously"},"1.1.2 Send Message Asynchronously"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'   public final class AsyncProducerExample {\n   \n      public static void main(String[] args) throws Throwable {\n          final String masterHostAndPort = "localhost:8000";\n          final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n          final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);\n          final MessageProducer messageProducer = messageSessionFactory.createProducer();\n          final String topic = "test";\n          final String body = "async send message from single-session-factory!";\n          byte[] bodyData = StringUtils.getBytesUtf8(body);\n          messageProducer.publish(topic);\n          final Message message = new Message(topic, bodyData);\n          messageProducer.sendMessage(message, new MessageSentCallback(){\n              @Override\n              public void onMessageSent(MessageSentResult result) {\n                  if (result.isSuccess()) {\n                      System.out.println("async send message : " + message);\n                  } else {\n                      System.out.println("async send message failed : " + result.getErrMsg());\n                  }\n              }\n              @Override\n              public void onException(Throwable e) {\n                  System.out.println("async send message error : " + e);\n              }\n          });\n          messageProducer.shutdown();\n      }\n')),(0,o.kt)("h4",{id:"113-send-message-with-attributes"},"1.1.3 Send Message With Attributes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'   public final class ProducerWithAttributeExample {\n   \n      public static void main(String[] args) throws Throwable {\n          final String masterHostAndPort = "localhost:8000";\n          final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n          final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(clientConfig);\n          final MessageProducer messageProducer = messageSessionFactory.createProducer();\n          final String topic = "test";\n          final String body = "send message with attribute from single-session-factory!";\n          byte[] bodyData = StringUtils.getBytesUtf8(body);\n          messageProducer.publish(topic);\n          Message message = new Message(topic, bodyData);\n          //set attribute\n          message.setAttrKeyVal("test_key", "test value");\n          //msgType is used for consumer filtering, and msgTime(accurate to minute) is used as the pipe to send and receive statistics\n          SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmm");\n          message.putSystemHeader("test", sdf.format(new Date()));\n          messageProducer.sendMessage(message);\n          messageProducer.shutdown();\n      }\n')),(0,o.kt)("h3",{id:"12-tubemultisessionfactory"},"1.2 TubeMultiSessionFactory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'   public class MultiSessionProducerExample {\n       \n       public static void main(String[] args) throws Throwable {\n           final int SESSION_FACTORY_NUM = 10;\n           final String masterHostAndPort = "localhost:8000";\n           final TubeClientConfig clientConfig = new TubeClientConfig(masterHostAndPort);\n           final List<MessageSessionFactory> sessionFactoryList = new ArrayList<>(SESSION_FACTORY_NUM);\n           final ExecutorService sendExecutorService = Executors.newFixedThreadPool(SESSION_FACTORY_NUM);\n           final CountDownLatch latch = new CountDownLatch(SESSION_FACTORY_NUM);\n           for (int i = 0; i < SESSION_FACTORY_NUM; i++) {\n               TubeMultiSessionFactory tubeMultiSessionFactory = new TubeMultiSessionFactory(clientConfig);\n               sessionFactoryList.add(tubeMultiSessionFactory);\n               MessageProducer producer = tubeMultiSessionFactory.createProducer();\n               Sender sender = new Sender(producer, latch);\n               sendExecutorService.submit(sender);\n           }\n           latch.await();\n           sendExecutorService.shutdownNow();\n           for (MessageSessionFactory sessionFactory : sessionFactoryList) {\n               sessionFactory.shutdown();\n           }\n       }\n   \n       private static class Sender implements Runnable {\n           \n           private MessageProducer producer;\n           \n           private CountDownLatch latch;\n   \n           public Sender(MessageProducer producer, CountDownLatch latch) {\n               this.producer = producer;\n               this.latch = latch;\n           }\n   \n           @Override\n           public void run() {\n               final String topic = "test";\n               try {\n                   producer.publish(topic);\n                   final byte[] bodyData = StringUtils.getBytesUtf8("This is a test message from multi-session factory");\n                   Message message = new Message(topic, bodyData);\n                   producer.sendMessage(message);\n                   producer.shutdown();\n               } catch (Throwable ex) {\n                   System.out.println("send message error : " + ex);\n               } finally {\n                   latch.countDown();\n               }\n           }\n       }\n   }\n')),(0,o.kt)("hr",null),(0,o.kt)("a",{href:"#top"},"Back to top"))}m.isMDXComponent=!0}}]);