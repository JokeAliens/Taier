"use strict";(self.webpackChunktaier_website=self.webpackChunktaier_website||[]).push([[4859],{3905:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return c}});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=a.createContext({}),u=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=u(t.components);return a.createElement(p.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=u(e),c=r,s=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return e?a.createElement(s,i(i({ref:n},d),{},{components:e})):a.createElement(s,i({ref:n},d))}));function c(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=e[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},983:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return k}});var a=e(7462),r=e(3366),l=(e(7294),e(3905)),i=["components"],o={title:"Flink On Standalone",sidebar_label:"Flink On Standalone"},p=void 0,u={unversionedId:"functions/component/flink-on-standalone",id:"functions/component/flink-on-standalone",title:"Flink On Standalone",description:"\u542f\u52a8Flink Standalone\u73af\u5883",source:"@site/docs/functions/component/flink-on-standalone.md",sourceDirName:"functions/component",slug:"/functions/component/flink-on-standalone",permalink:"/Taier/docs/functions/component/flink-on-standalone",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/functions/component/flink-on-standalone.md",tags:[],version:"current",frontMatter:{title:"Flink On Standalone",sidebar_label:"Flink On Standalone"},sidebar:"docs",previous:{title:"Flink On Yarn",permalink:"/Taier/docs/functions/component/flink-on-yarn"},next:{title:"Spark",permalink:"/Taier/docs/functions/component/spark"}},d=[{value:"\u542f\u52a8Flink Standalone\u73af\u5883",id:"\u542f\u52a8flink-standalone\u73af\u5883",children:[],level:2},{value:"Standalone \u63a7\u5236\u53f0\u53c2\u6570",id:"standalone-\u63a7\u5236\u53f0\u53c2\u6570",children:[],level:2}],m={toc:d};function k(t){var n=t.components,e=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u542f\u52a8flink-standalone\u73af\u5883"},"\u542f\u52a8Flink Standalone\u73af\u5883"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1\u3001\u4e0b\u8f7d flink")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"flink\u5b98\u7f51\u4e0b\u8f7d ",(0,l.kt)("a",{parentName:"li",href:"https://flink.apache.org/downloads.html"},"release 1.12.7"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2\u3001chunjun\u7684\u63d2\u4ef6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u62c9\u53d6\u6700\u65b0\u7684chunjun ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/chunjun"},"master")," \u7248\u672c\u9879\u76ee\uff0c\u6253\u5305 mvn clean package -DskipTests, \u5c06\u751f\u6210\u7684chunjun-dist \u62f7\u8d1d\u81f3 $FLINK_HOME/lib")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"chunjun \u6709\u4e9b\u4f9d\u8d56\u5305\u4f9d\u8d56\u662fprovided\uff0c\u9700\u8981\u5c06\u7f3a\u7701\u7684jar\u653e\u5230$FLINK_HOME/lib\n\u4f8b\u5982\uff1a\u5728chunjun-core\u6700\u65b0\u7248\u672c\u4e2d\u5c06logback\u7684\u4f9d\u8d56\u6539\u4e3a\u4e86provided,  \u9700\u8981\u5c06\u4ee5\u4e0blogback\u5305\u653e\u5230$FLINK_HOME/lib"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"logback-core-1.2.11.jar\nlogback-classic-1.2.11.jar")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3\u3001flink1.12 standalone\u670d\u52a1\u53c2\u6570"),"\n\u6240\u6709\u8282\u70b9\u90fd\u9700\u8981\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u7c7b\u52a0\u8f7d\u914d\u7f6e\nclassloader.resolve-order: parent-first\nclassloader.check-leaked-classloader: false\n\n# \u9ad8\u53ef\u7528\u914d\u7f6e(\u5355\u673a None)\nhigh-availability: zookeeper\nhigh-availability.zookeeper.quorum: kudu1:2181,kudu2:2181,kudu3:2181\nhigh-availability.zookeeper.path.root: /flink112\nhigh-availability.storageDir: hdfs://ns1/dtInsight/flink112/ha\nhigh-availability.cluster-id: /standalone_ha\n\n# \u6307\u6807\u914d\u7f6e\nmetrics.reporter.promgateway.class: org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter\nmetrics.reporter.promgateway.host: 172.16.23.25\nmetrics.reporter.promgateway.port: 9091\nmetrics.reporter.promgateway.jobName: flink112\nmetrics.reporter.promgateway.randomJobNameSuffix: true\nmetrics.reporter.promgateway.deleteOnShutdown: false\n")),(0,l.kt)("p",null,"flink standalone\u8282\u70b9lib\u76ee\u5f55\u7ed3\u6784\u548c\u6587\u4ef6\uff0c"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"lib\u9700\u8981\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"p"},"chunjun-dist\u6e90\u7801\u5305")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"lib/\n\u251c\u2500\u2500 chunjun-dist\n\u2502\xa0\xa0 \u251c\u2500\u2500 chunjun-core.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 connector\n\u2502\xa0\xa0 \u251c\u2500\u2500 ddl-plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 dirty-data-collector\n\u2502\xa0\xa0 \u251c\u2500\u2500 docker-build\n\u2502\xa0\xa0 \u251c\u2500\u2500 formats\n\u2502\xa0\xa0 \u251c\u2500\u2500 metrics\n\u2502\xa0\xa0 \u2514\u2500\u2500 restore-plugins\n\u2502\xa0\xa0     \u2514\u2500\u2500 mysql\n\u2502\xa0\xa0         \u2514\u2500\u2500 chunjun-restore-mysql.jar\n\u251c\u2500\u2500 flink-csv-1.12.7.jar\n\u251c\u2500\u2500 flink-dist_2.11-1.12.7.jar\n\u251c\u2500\u2500 flink-json-1.12.7.jar\n\u251c\u2500\u2500 flink-shaded-zookeeper-3.4.14.jar\n\u251c\u2500\u2500 flink-table_2.11-1.12.7.jar\n\u251c\u2500\u2500 flink-table-blink_2.11-1.12.7.jar\n\u251c\u2500\u2500 log4j-1.2-api-2.16.0.jar\n\u251c\u2500\u2500 log4j-api-2.16.0.jar\n\u251c\u2500\u2500 log4j-core-2.16.0.jar\n\u251c\u2500\u2500 log4j-slf4j-impl-2.16.0.jar\n\u251c\u2500\u2500 logback-classic-1.2.11.jar\n\u2514\u2500\u2500 logback-core-1.2.11.jar\n\n\n")),(0,l.kt)("h2",{id:"standalone-\u63a7\u5236\u53f0\u53c2\u6570"},"Standalone \u63a7\u5236\u53f0\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b * \u4e3a\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clusterMode"),(0,l.kt)("td",{parentName:"tr",align:null},"flink\u90e8\u7f72\u6a21\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"standalone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flinkLibDir"),(0,l.kt)("td",{parentName:"tr",align:null},"flink libs\u7684\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"/data/flink112_lib")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunjunDistDir"),(0,l.kt)("td",{parentName:"tr",align:null},"chunjun \u63d2\u4ef6\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"/data/chunjun/chunjun-dist")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remoteChunjunDistDir"),(0,l.kt)("td",{parentName:"tr",align:null},"chunjun \u63d2\u4ef6\u8fdc\u7aef\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"/data/chunjun/chunjun-dist")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pluginLoadMode"),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a0\u8f7d\u6587\u4ef6\u7684\u65b9\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"classpath")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jobmanager.rpc.address"),(0,l.kt)("td",{parentName:"tr",align:null},"jobmanager rpc\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jobmanager.rpc.port"),(0,l.kt)("td",{parentName:"tr",align:null},"jobmanager rpc\u7aef\u53e3\u53f7"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rest.port"),(0,l.kt)("td",{parentName:"tr",align:null},"ui\u7aef\u53e3\u53f7"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"high-availability"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ad8\u53ef\u7528\u670d\u52a1\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NONE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"high-availability.zookeeper.quorum"),(0,l.kt)("td",{parentName:"tr",align:null},"zookeeper\u96c6\u7fa4\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"high-availability.zookeeper.path.root"),(0,l.kt)("td",{parentName:"tr",align:null},"flink\u5b58\u50a8\u72b6\u6001\u5728zookeeper\u7684\u6839\u8282\u70b9\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"high-availability.storageDir"),(0,l.kt)("td",{parentName:"tr",align:null},"flink\u9ad8\u53ef\u7528\u6a21\u5f0f\u4e0b\u5b58\u50a8\u5143\u6570\u636e\u7684\u6587\u4ef6\u7cfb\u7edf\u8def\u5f84(URI)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"high-availability.cluster-id"),(0,l.kt)("td",{parentName:"tr",align:null},"flink\u96c6\u7fa4\u7684id\uff0c \u7528\u4e8e\u533a\u5206\u591a\u4e2aflink\u96c6\u7fa4"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prometheusHost"),(0,l.kt)("td",{parentName:"tr",align:null},"prometheus\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prometheusPort"),(0,l.kt)("td",{parentName:"tr",align:null},"prometheus\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state.backend"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001\u540e\u7aef"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"jobmanager")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"flink on standalone \u79bb\u7ebf\u4efb\u52a1\u9700\u8981\u624b\u52a8\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"\u73af\u5883\u53c2\u6570"),"flinkTaskRunMode\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"standalone"),"\u6a21\u5f0f"))))}k.isMDXComponent=!0}}]);