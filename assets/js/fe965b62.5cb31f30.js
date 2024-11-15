"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[784],{2095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(4848),s=n(8453);const r={title:"Document QA",sidebar_position:2,slug:"/starter-projects-document-qa"},c=void 0,i={id:"Starter-Projects/starter-projects-document-qa",title:"Document QA",description:"Build a question-and-answer chatbot with a document loaded from local memory.",source:"@site/docs/Starter-Projects/starter-projects-document-qa.md",sourceDirName:"Starter-Projects",slug:"/starter-projects-document-qa",permalink:"/starter-projects-document-qa",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Document QA",sidebar_position:2,slug:"/starter-projects-document-qa"},sidebar:"defaultSidebar",previous:{title:"Blog Writer",permalink:"/starter-projects-blog-writer"},next:{title:"Memory Chatbot",permalink:"/starter-projects-memory-chatbot"}},a={},l=[{value:"Prerequisites",id:"6555c100a30e4a21954af25e2e05403a",level:2},{value:"Create the document QA flow",id:"204500104f024553aab2b633bb99f603",level:2},{value:"Run the document QA flow",id:"f58fcc2b9e594156a829b1772b6a7191",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Build a question-and-answer chatbot with a document loaded from local memory."}),"\n",(0,o.jsx)(t.h2,{id:"6555c100a30e4a21954af25e2e05403a",children:"Prerequisites"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/getting-started-installation",children:"Langflow installed and running"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://platform.openai.com/",children:"OpenAI API key created"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"204500104f024553aab2b633bb99f603",children:"Create the document QA flow"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["From the Langflow dashboard, click\xa0",(0,o.jsx)(t.strong,{children:"New Flow"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Select\xa0",(0,o.jsx)(t.strong,{children:"Document QA"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["The\xa0",(0,o.jsx)(t.strong,{children:"Document QA"}),"\xa0flow is created."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(5838).A+"",width:"2932",height:"1068"})}),"\n",(0,o.jsxs)(t.p,{children:["This flow is composed of a standard chatbot with the\xa0",(0,o.jsx)(t.strong,{children:"Chat Input"}),",\xa0",(0,o.jsx)(t.strong,{children:"Prompt"}),",\xa0",(0,o.jsx)(t.strong,{children:"OpenAI"}),", and\xa0",(0,o.jsx)(t.strong,{children:"Chat Output"}),"\xa0components, but it also incorporates a ",(0,o.jsx)(t.strong,{children:"File"})," component, which loads a file from your local machine. ",(0,o.jsx)(t.strong,{children:"Parse Data"})," is used to convert the data from ",(0,o.jsx)(t.strong,{children:"File"})," into the\xa0",(0,o.jsx)(t.strong,{children:"Prompt"}),"\xa0component as\xa0",(0,o.jsx)(t.code,{children:"{Document}"}),". The\xa0",(0,o.jsx)(t.strong,{children:"Prompt"}),"\xa0component is instructed to answer questions based on the contents of\xa0",(0,o.jsx)(t.code,{children:"{Document}"}),". This gives the\xa0",(0,o.jsx)(t.strong,{children:"OpenAI"}),"\xa0component context it would not otherwise have access to."]}),"\n",(0,o.jsx)(t.h3,{id:"f58fcc2b9e594156a829b1772b6a7191",children:"Run the document QA flow"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["To select a document to load, in the\xa0",(0,o.jsx)(t.strong,{children:"File"}),"\xa0component, click the\xa0",(0,o.jsx)(t.strong,{children:"Path"}),"\xa0field. Select a local file, and then click\xa0",(0,o.jsx)(t.strong,{children:"Open"}),". The file name appears in the field."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click the\xa0",(0,o.jsx)(t.strong,{children:"Playground"}),"\xa0button. Here you can chat with the AI that has access to your document's content."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Type in a question about the document content and press Enter. You should see a contextual response."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},5838:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/starter-flow-document-qa-25bb93e67df21a31a874531a957eb747.png"},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var o=n(6540);const s={},r=o.createContext(s);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);