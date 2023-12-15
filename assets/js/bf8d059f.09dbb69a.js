"use strict";(self.webpackChunktaier_website=self.webpackChunktaier_website||[]).push([[8068],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(t),m=o,g=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},3904:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],p={title:"Hadoop MR",sidebar_label:"Hadoop MR"},c=void 0,s={unversionedId:"functions/task/hadoop-mr",id:"functions/task/hadoop-mr",title:"Hadoop MR",description:"1. \u4efb\u52a1\u754c\u9762",source:"@site/docs/functions/task/hadoop-mr.md",sourceDirName:"functions/task",slug:"/functions/task/hadoop-mr",permalink:"/Taier/docs/functions/task/hadoop-mr",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/functions/task/hadoop-mr.md",tags:[],version:"current",frontMatter:{title:"Hadoop MR",sidebar_label:"Hadoop MR"},sidebar:"docs",previous:{title:"MaxCompute SQL",permalink:"/Taier/docs/functions/task/maxcompute-sql"},next:{title:"DataX",permalink:"/Taier/docs/functions/task/datax"}},u=[{value:"1. \u4efb\u52a1\u754c\u9762",id:"1-\u4efb\u52a1\u754c\u9762",children:[],level:3},{value:"2. \u4f20\u53c2",id:"2-\u4f20\u53c2",children:[],level:3},{value:"3. \u793a\u4f8b\u4ee3\u78011\uff08main\u51fd\u6570\u53c2\u6570\u5217\u8868\u7b2c\u4e00\u4f4d\u5fc5\u987b\u4e3aConfiguration\uff09",id:"3-\u793a\u4f8b\u4ee3\u78011main\u51fd\u6570\u53c2\u6570\u5217\u8868\u7b2c\u4e00\u4f4d\u5fc5\u987b\u4e3aconfiguration",children:[],level:3},{value:"4. \u5df2\u6709MR\u4efb\u52a1\u96c6\u6210\u5230Taier\uff0c\u6539\u52a8\u4ec5\u4e24\u6b65",id:"4-\u5df2\u6709mr\u4efb\u52a1\u96c6\u6210\u5230taier\u6539\u52a8\u4ec5\u4e24\u6b65",children:[{value:"4.1\u4fee\u6539pom.xml\u6587\u4ef6",id:"41\u4fee\u6539pomxml\u6587\u4ef6",children:[],level:4},{value:"4.2\u8c03\u6574\u4ee3\u7801",id:"42\u8c03\u6574\u4ee3\u7801",children:[{value:"4.2.1\u4fee\u6539main\u65b9\u6cd5\u5217\u8868\uff0c\u4ee3\u7801\u4e2d\u4f7f\u7528\u53c2\u6570\u5217\u8868\u4e2d\u7684conf",id:"421\u4fee\u6539main\u65b9\u6cd5\u5217\u8868\u4ee3\u7801\u4e2d\u4f7f\u7528\u53c2\u6570\u5217\u8868\u4e2d\u7684conf",children:[],level:5},{value:"4.2.2job.submit \u5e76\u8fd4\u56de jobId",id:"422jobsubmit-\u5e76\u8fd4\u56de-jobid",children:[],level:5}],level:4}],level:3}],d={toc:u};function l(e){var n=e.components,p=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,p,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-\u4efb\u52a1\u754c\u9762"},"1. \u4efb\u52a1\u754c\u9762"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"hadoop-mr-task",src:t(2764).Z})),(0,a.kt)("h3",{id:"2-\u4f20\u53c2"},"2. \u4f20\u53c2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\n//\u51fd\u6570\u7684\u4f20\u53c2\uff0c\u4e0e\u547d\u4ee4\u884c\u65b9\u5f0f\u4e00\u81f4\u7684\u53c2\u6570\u5217\u8868\u3010\u8f93\u5165\u8def\u5f84\u548c\u8f93\u51fa\u8def\u5f84\u3011\uff0c\u4f8b\u5982\n\n/user/hive/warehouse/dt_support.db/aa11 /user/hive/warehouse/dt_support.db/aa11_result628\n")),(0,a.kt)("h3",{id:""}),(0,a.kt)("h3",{id:"3-\u793a\u4f8b\u4ee3\u78011main\u51fd\u6570\u53c2\u6570\u5217\u8868\u7b2c\u4e00\u4f4d\u5fc5\u987b\u4e3aconfiguration"},"3. \u793a\u4f8b\u4ee3\u78011\uff08main\u51fd\u6570\u53c2\u6570\u5217\u8868\u7b2c\u4e00\u4f4d\u5fc5\u987b\u4e3aConfiguration\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.hadoop.examples.Mapreduce.mr;\n\nimport org.apache.hadoop.conf.Configuration;\nimport org.apache.hadoop.fs.Path;\nimport org.apache.hadoop.io.IntWritable;\nimport org.apache.hadoop.io.Text;\nimport org.apache.hadoop.mapreduce.Job;\nimport org.apache.hadoop.mapreduce.Mapper;\nimport org.apache.hadoop.mapreduce.Reducer;\nimport org.apache.hadoop.mapreduce.lib.input.FileInputFormat;\nimport org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;\nimport org.apache.hadoop.util.GenericOptionsParser;\n\nimport java.io.IOException;\nimport java.util.StringTokenizer;\n\n\npublic class WordCount\n{\n    //conf\u503c\u7531Taier\u5e73\u53f0\u7ba1\u7406\n    //job.submit \u63d0\u4ea4\u540e\u9700\u8981\u8fd4\u56dejobId\uff0c\u8fd4\u56de\u7c7b\u578b\u4e3aString\n    public static String main(Configuration conf,String[] args) throws Exception\n    {\n        String[] otherArgs = new GenericOptionsParser(conf, args).getRemainingArgs();\n        if (otherArgs.length < 2) {\n            System.err.println("Usage: wordcount <in> [<in>...] <out>");\n            System.exit(2);\n        }\n        Job job = Job.getInstance(conf, "word count");\n        job.setJarByClass(WordCount.class);\n        job.setMapperClass(TokenizerMapper.class);\n        job.setCombinerClass(IntSumReducer.class);\n        job.setReducerClass(IntSumReducer.class);\n        job.setOutputKeyClass(Text.class);\n        job.setOutputValueClass(IntWritable.class);\n        for (int i = 0; i < otherArgs.length - 1; i++) {\n            FileInputFormat.addInputPath(job, new Path(otherArgs[i]));\n        }\n        FileOutputFormat.setOutputPath(job, new Path(otherArgs[(otherArgs.length - 1)]));\n\n        job.submit();\n        return job.getJobID().toString();\n    }\n\n    public static class IntSumReducer extends Reducer<Text, IntWritable, Text, IntWritable>\n    {\n        private IntWritable result = new IntWritable();\n\n        public void reduce(Text key, Iterable<IntWritable> values, Reducer<Text, IntWritable, Text, IntWritable>.Context context)\n                throws IOException, InterruptedException\n        {\n            int sum = 0;\n            for (IntWritable val : values) {\n                sum += val.get();\n            }\n            this.result.set(sum);\n            context.write(key, this.result);\n        }\n    }\n\n    public static class TokenizerMapper extends Mapper<Object, Text, Text, IntWritable>\n    {\n        private static final IntWritable one = new IntWritable(1);\n        private Text word = new Text();\n\n        public void map(Object key, Text value, Mapper<Object, Text, Text, IntWritable>.Context context) throws IOException, InterruptedException\n        {\n            StringTokenizer itr = new StringTokenizer(value.toString());\n            while (itr.hasMoreTokens()) {\n                this.word.set(itr.nextToken());\n                context.write(this.word, one);\n            }\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"4-\u5df2\u6709mr\u4efb\u52a1\u96c6\u6210\u5230taier\u6539\u52a8\u4ec5\u4e24\u6b65"},"4. \u5df2\u6709MR\u4efb\u52a1\u96c6\u6210\u5230Taier\uff0c\u6539\u52a8\u4ec5\u4e24\u6b65"),(0,a.kt)("h4",{id:"41\u4fee\u6539pomxml\u6587\u4ef6"},"4.1\u4fee\u6539pom.xml\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\u9996\u5148\u628apom.xml\u6587\u4ef6\u5bfc\u5165\n<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  Licensed under the Apache License, Version 2.0 (the "License");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n    http://www.apache.org/licenses/LICENSE-2.0\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an "AS IS" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License. See accompanying LICENSE file.\n--\x3e\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0\n                      http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>org.apache.hadoop</groupId>\n    <artifactId>hadoop-mapreduce-examples</artifactId>\n    <version>2.7.3</version>\n    <description>Apache Hadoop MapReduce Examples</description>\n    <name>Apache Hadoop MapReduce Examples</name>\n    <packaging>jar</packaging>\n    <properties>\n        <mr.examples.basedir>${basedir}</mr.examples.basedir>\n        <project.version>2.7.3</project.version>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.apache.hadoop</groupId>\n            <artifactId>hadoop-mapreduce-client-core</artifactId>\n            <version>${project.version}</version>\n            <scope>provided</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.hadoop</groupId>\n            <artifactId>hadoop-mapreduce-client-jobclient</artifactId>\n            <version>${project.version}</version>\n            <scope>provided</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.hadoop</groupId>\n            <artifactId>hadoop-mapreduce-client-common</artifactId>\n            <version>${project.version}</version>\n            <scope>provided</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.hadoop</groupId>\n            <artifactId>hadoop-common</artifactId>\n            <version>${project.version}</version>\n            <scope>provided</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.hadoop</groupId>\n            <artifactId>hadoop-hdfs</artifactId>\n            <version>${project.version}</version>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>3.1</version>\n                <configuration>\n                    <source>1.8</source>\n                    <target>1.8</target>\n                    <encoding>utf-8</encoding>\n                </configuration>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-jar-plugin</artifactId>\n                <configuration>\n                    <archive>\n                        <manifest>\n                            <mainClass>org.apache.hadoop.examples.Mapreduce.mr.WordCount</mainClass>\n                        </manifest>\n                    </archive>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')),(0,a.kt)("h4",{id:"42\u8c03\u6574\u4ee3\u7801"},"4.2\u8c03\u6574\u4ee3\u7801"),(0,a.kt)("h5",{id:"421\u4fee\u6539main\u65b9\u6cd5\u5217\u8868\u4ee3\u7801\u4e2d\u4f7f\u7528\u53c2\u6570\u5217\u8868\u4e2d\u7684conf"},"4.2.1\u4fee\u6539main\u65b9\u6cd5\u5217\u8868\uff0c\u4ee3\u7801\u4e2d\u4f7f\u7528\u53c2\u6570\u5217\u8868\u4e2d\u7684conf"),(0,a.kt)("p",null,"\u4fee\u6539\u524d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public static void main(String[] args) throws Exception\n{\n    Configuration conf =new Configuration();\n    \n")),(0,a.kt)("p",null,"\u4fee\u6539\u540e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public static String main(Configuration conf,String[] args) throws Exception\n    {\n    \n")),(0,a.kt)("h5",{id:"422jobsubmit-\u5e76\u8fd4\u56de-jobid"},"4.2.2job.submit \u5e76\u8fd4\u56de jobId"),(0,a.kt)("p",null,"\u4fee\u6539\u524d:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"System.exit(job.waitForCompletion(true) ? 0 : 1);\n")),(0,a.kt)("p",null,"\u4fee\u6539\u540e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    job.submit();  \n    return job.getJobID().toString();\n")))}l.isMDXComponent=!0},2764:function(e,n,t){n.Z=t.p+"assets/images/hadoop-mr-task-dfc1afa8f32d47513256d80d6f399a58.png"}}]);