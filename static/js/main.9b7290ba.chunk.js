(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e){e.exports={project_info:{project1:{name:"Foreflame",team:"Microsoft Capstone Project \xb7 2022.06 - 12",goal:"Improve fire management system to reduce the loss from wildfire",img_url:"/images/project1/wildfire.png",outer_link:{button_name:"WEBSITE >",link:"https://www.foreflame.com/"},intro:[{num:"01",title:"Touchstone",content:" The wildfire management includes pre suppression before the fire and suppression after fire burns. According to  Environmental Economics and Management, a better fire management system, and efficient tactical decisions can reduce the cost on fire suppression in 80%"},{num:"02",title:"Stackholder",content:"USDA, USFS, DNR, Researchers, Insurance Companies"},{num:"03",title:"Current Pain Points",content:"Segmented user groups lack of a unified system to collaborate. Factors influencing wildfire behaviour do not update by time. Different data does not integrated properly."},{num:"05",title:"Features",content:"Utilize data including weather, fuel, and historical wildfire records training machine learning model to provide more reliable and precise prediction. Provide five days prediction result for consistence observation and build completed supression strategy. Develop report functionality for fire analysts to build wildfire reports and send to the fire managers for easy seamless communication."}],img_section:[{img_title:"Software Architecture",img_text:"Our software system is designed to integrate historical climate data and vegetation data as training inputs for an ML model. The training process takes place on an Azure Virtual Machine (VM), leveraging its computational power and resources. The trained ML model's results are then transmitted to the frontend, where a user-friendly client application is built using React and Flask. ",img_url:"/images/project1/p1-sw.png"},{img_title:"Solution",img_text:"Implement a WildFire Occurrence Prediction System. Integrate comprehensive data into the machine learning model to predict the possibility of wildfire occurrence in the next 4 days in WA. Integrate big data including weather data from NOAA, NDVI from MODIS and fuel data from LANDFIRE, and historical wildfire data in the past 10 years to traning the machine learning model. Build the DNN model to provide five days prediction result. Provide an interface which including a map to identify the fire spot and check out the prediction result in linear time. The user can also apply different factors like vegetation, canopy data on the map to assist them build a more comprehensive strategy.",img_url:"/images/project1/p1-db.png"},{img_title:"",img_text:"",img_url:"/images/project1/p1-i2.png"},{img_title:"",img_text:"",img_url:"/images/project1/p1-cp.png"}],credit:[{role:"Project Manager",name:"Manasa Sama"},{role:"Frontend Developer",name:"Teja Balu"},{role:"Machine Learning Engineer",name:"Gloria Hou"},{role:"Data Engineer",name:"Chen-Yin Yu"},{role:"Designer",name:"Yiran Fu"},{role:"DNR Mentors",name:"Vaughn Cork, Matthew Dehr"},{role:"Microsoft Mentors",name:"Anirudh Baddam, Roberto Estevao, Sara Malavar, Leonardo Nunes"}],snippet:{link:"/Projects/Project1",title:"Foreflame",desc:"WILDFIRE PREDICTION",img_url:"./images/project1/p1-snippet.png"}},project2:{name:"Bubble: Portraits within a Perlin Realm",team:"Project @ YEN-YING CHO Studio \xb7 2022.08 - 12",goal:"Achieve natural circular arrangement",img_url:"/images/project2/bubbles.gif",outer_link:{button_name:"sneak peek",link:"https://yentingcho.com/blogs/latest-news/yen-ting-cho-studio-gallery-cho-opening"},intro:[{num:"01",title:"Project Introduction",content:"The project serves as the main visual for our studio in the year 2024. The artwork aims to convey the feeling of emerging from the dark mist, symbolizing how people have gradually found a way to coexist with the virus amidst the darkness of the COVID-19 pandemic in the past few years, and how the world is slowly recovering and resuming its operations. We created the artwork using Processing, employing the Perlin noise distribution method to achieve a more uniform and natural circular arrangement. By detecting the boundaries, we outlined the silhouette of a human figure and applied different color textures using mapping techniques. The varying colors give the artwork a multi-layered effect."},{num:"02",title:"Process",subtitle:"01.Discovering Optimal Parameters for Circular Distribution.",content:"Exploring Circular Distribution, where several key factors come into play: the canvas size, the range for setting the circle sizes (both the minimum and maximum), and the initial positions of the circles. These elements are interrelated, and we parameterize these variables to conduct multiple experiments, examining the extent of mutual influence among the parameters, including circle sizes, initial positions, and spacing. Our goal is to determine the optimal number of circles that achieve a relatively balanced composition and ensure sufficient collisions among the circles within the constraints of hardware limitations, thus achieving a natural and even distribution."},{num:"",title:"",subtitle:"02. Exploring Color Mapping Rules",content:"We explore the process of material mapping, with our primary objective being how to fully encapsulate all units within circles of varying sizes and quantities. The goal is to maintain a gradient color variation in the artwork, even when the material is distributed into circles of different sizes. To achieve this, we record the total number of circles and calculate the average radius. Using this average radius as the displacement for extracting the next material unit, we create a standard for mapping the material onto the circles. Based on this standard, we extend the process to create additional layers of variation on the same material, incrementally increasing or decreasing the spacing tolerance."}],gallery:[{img1:"/images/project2/bubble1.png",img2:"/images/project2/bubble2.png",img3:"/images/project2/bubble3.png"},{img1:"/images/project2/p2-i1.png",img2:"/images/project2/p2-i2.png",img3:"/images/project2/p2-i3.png"}],credit:[{role:"Director",name:"Yen-Ting Cho"},{role:"Art Programmer",name:"Chen-Yin Yu"}],snippet:{link:"/Projects/Project2",title:"Bubble: Portraits within a Perlin Realm",desc:"VISUAL DATA MAPPING",img_url:"./images/project2/p2-snippet.png"}},project3:{name:"Dynamic Dancing Waves",team:"Project @ YEN-YING CHO Studio \xb7 2022.08 - 12",goal:"Translate human movements into an animated wave model",img_url:"/images/project3/wave.gif",outer_link:{button_name:"sneak peek",link:""},intro:[{num:"01",title:"Project Introduction",content:"This artwork aims to achieve aesthetic creation and an integrated interaction between the virtual and the real by translating human movements into an animated wave model. We created this artwork using Processing, utilizing the concept of a spring system to generate a NURB model. The model is then linked to a skeletal structure, simulating dynamic wave-like effects."},{num:"02",title:"Process",subtitle:"01.Simulating a Spring System to Create a NURBS Wave Model",content:"Firstly, we will explore how to create a wave model that closely resembles real-life waves. By simulating the movement of interconnected small blocks using springs, and assigning physical properties to each particle, we can incorporate a spring constant to simulate a flexible and realistic wave effect."},{num:"02",title:"",subtitle:"02.Crafting Wave Patterns between Virtual and Real",content:"The actual creation of the wave effect is not solely based on adjusting real-world physical properties. This process can be divided into two parts: firstly, adjusting the elasticity coefficients of different hierarchical particles to create varying degrees of softness and hardness within the fabric of the model. Secondly, incorporating time series data to record the movement information of each state, thereby enhancing the model's variability and expansiveness."},{num:"02",title:"",subtitle:"03.Binding the Model to a Human Skeleton",content:"Binding blocks with different elasticity coefficients to various skeletal points, and combining the movement of the skeletal points with the differences in elasticity coefficients, will add further variation to the model. Additionally, by creating an operation menu that associates specific actions with particular wave patterns, future digital creations will be more conveniently achieved."}],gallery:[{img1:"/images/project3/p3-1.png",img2:"/images/project3/p3-2.png",img3:"/images/project3/p3-3.png"},{img1:"/images/project3/p3-4.png",img2:"/images/project3/p3-5.png",img3:"/images/project3/p3-6.png"}],img_section:[{img_title:"",img_text:"",img_url:"/images/project3/p3-7.png"}],credit:[{role:"Director",name:"Yen-Ting Cho"},{role:"Software Developer",name:"Yen-Ling Kuo, Yen-Ting Yeh, Chen-Yin Yu"}],snippet:{link:"/Projects/Project3",title:"Dynamic Dancing Waves",desc:"3D DATA CONCATANATION",img_url:"./images/project3/wave.gif"}},project4:{name:"Baseball Training System",team:"Project @ MMCV Lab \xb7 2019.04 - 2020.02",goal:"Provide a system to help player training baseball",img_url:"/images/project4/p4-snippet.png",outer_link:{button_name:"sneak peek",link:""},intro:[{num:"01",title:"Project Introduction",content:"This artwork aims to achieve aesthetic creation and an integrated interaction between the virtual and the real by translating human movements into an animated wave model. We created this artwork using Processing, utilizing the concept of a spring system to generate a NURB model. The model is then linked to a skeletal structure, simulating dynamic wave-like effects."},{num:"02",title:"Process",subtitle:"01.Simulating a Spring System to Create a NURBS Wave Model",content:"Firstly, we will explore how to create a wave model that closely resembles real-life waves. By simulating the movement of interconnected small blocks using springs, and assigning physical properties to each particle, we can incorporate a spring constant to simulate a flexible and realistic wave effect."},{num:"02",title:"",subtitle:"02.Crafting Wave Patterns between Virtual and Real",content:"The actual creation of the wave effect is not solely based on adjusting real-world physical properties. This process can be divided into two parts: firstly, adjusting the elasticity coefficients of different hierarchical particles to create varying degrees of softness and hardness within the fabric of the model. Secondly, incorporating time series data to record the movement information of each state, thereby enhancing the model's variability and expansiveness."},{num:"02",title:"",subtitle:"03.Binding the Model to a Human Skeleton",content:"Binding blocks with different elasticity coefficients to various skeletal points, and combining the movement of the skeletal points with the differences in elasticity coefficients, will add further variation to the model. Additionally, by creating an operation menu that associates specific actions with particular wave patterns, future digital creations will be more conveniently achieved."}],gallery:[{img1:"/images/project3/p3-1.png",img2:"/images/project3/p3-2.png",img3:"/images/project3/p3-3.png"},{img1:"/images/project3/p3-4.png",img2:"/images/project3/p3-5.png",img3:"/images/project3/p3-6.png"}],img_section:[{img_title:"",img_text:"",img_url:"/images/project3/p3-7.png"}],credit:[{role:"Programmer",name:"Cayon Liow, Chen-Yin Yu"}],snippet:{link:"/Projects/Project4",title:"Baseball Training System",desc:"VIRTUAL REALITY",img_url:"./images/project4/p4-snippet.png"}},project5:{name:"Dynamic Dancing Waves",team:"Project @ YEN-YING CHO Studio \xb7 2022.08 - 12",goal:"Translate human movements into an animated wave model",img_url:"/images/project3/wave.gif",outer_link:{button_name:"sneak peek",link:""},intro:[{num:"01",title:"Project Introduction",content:"This artwork aims to achieve aesthetic creation and an integrated interaction between the virtual and the real by translating human movements into an animated wave model. We created this artwork using Processing, utilizing the concept of a spring system to generate a NURB model. The model is then linked to a skeletal structure, simulating dynamic wave-like effects."},{num:"02",title:"Process",subtitle:"01.Simulating a Spring System to Create a NURBS Wave Model",content:"Firstly, we will explore how to create a wave model that closely resembles real-life waves. By simulating the movement of interconnected small blocks using springs, and assigning physical properties to each particle, we can incorporate a spring constant to simulate a flexible and realistic wave effect."},{num:"02",title:"",subtitle:"02.Crafting Wave Patterns between Virtual and Real",content:"The actual creation of the wave effect is not solely based on adjusting real-world physical properties. This process can be divided into two parts: firstly, adjusting the elasticity coefficients of different hierarchical particles to create varying degrees of softness and hardness within the fabric of the model. Secondly, incorporating time series data to record the movement information of each state, thereby enhancing the model's variability and expansiveness."},{num:"02",title:"",subtitle:"03.Binding the Model to a Human Skeleton",content:"Binding blocks with different elasticity coefficients to various skeletal points, and combining the movement of the skeletal points with the differences in elasticity coefficients, will add further variation to the model. Additionally, by creating an operation menu that associates specific actions with particular wave patterns, future digital creations will be more conveniently achieved."}],gallery:[{img1:"/images/project3/p3-1.png",img2:"/images/project3/p3-2.png",img3:"/images/project3/p3-3.png"},{img1:"/images/project3/p3-4.png",img2:"/images/project3/p3-5.png",img3:"/images/project3/p3-6.png"}],img_section:[{img_title:"",img_text:"",img_url:"/images/project3/p3-7.png"}],credit:[{role:"Director",name:"Yen-Ting Cho"},{role:"Software Developer",name:"Yen-Ling Kuo, Yen-Ting Yeh, Chen-Yin Yu"}],snippet:{link:"https://github.com/ChenYin-Yu/DisneyFamilyFavorites",title:"Disney Family Favorites",desc:"MOVIE FORUM",img_url:"./images/project5/p5-snippet.png"}}}}},,,,,,,,,,,,,,,function(e,t){e.exports="data:image/png;base64,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"},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,n){e.exports=n(55)},,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(17),o=n.n(r),l=(n(29),n(31),n(0)),c=n(6),s=(n(33),function(e){var t=e.fontColor;return i.a.createElement("div",{className:"Navi-bar"},i.a.createElement("span",{className:"sub-page Name"},i.a.createElement(c.b,{to:"/*",className:"styled-link-title",style:{color:t}}," CHEN-YIN \xa0 YU ")),i.a.createElement("span",{className:"sub-page"},i.a.createElement(c.b,{to:"/About",className:"styled-link-navi",style:{color:t}}," About ")),i.a.createElement("span",{className:"sub-page"},i.a.createElement(c.b,{to:"/Projects",className:"styled-link-navi",style:{color:t}}," Projects ")))}),m=(n(35),n(18)),d=n.n(m),g=n(19),p=n.n(g),u=function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"contact"},i.a.createElement("a",{href:"mailto:shelly7526@gmail.com",target:"_blank",className:"items"},i.a.createElement("img",{className:"icon",src:d.a})),i.a.createElement("a",{href:"https://www.linkedin.com/in/shellyyu/",target:"_blank",className:"items"},i.a.createElement("img",{className:"icon",src:p.a}))),i.a.createElement("div",null,"\xa9 Chen-Yin Yu"))},f=(n(37),function(e){var t=e.text,n=e.url;return i.a.createElement(c.b,{to:n},i.a.createElement("button",{className:"Regu_btn1"},t))}),h=(n(39),function(e){var t=e.text,n=e.url;return i.a.createElement("a",{href:n},i.a.createElement("button",{className:"Regu_btn2"},t))}),A=function(){return i.a.createElement("div",{className:"App-body"},i.a.createElement("div",{className:"App-body"},i.a.createElement("div",{className:"intro-title floating-text"},"I'm Chen-Yin, a Programmer!"),i.a.createElement("br",null),i.a.createElement("div",{className:"intro-desc floating-text"},"I like using technologies to solve problems in various fields and blending creativity and visuals to create interesting works."),i.a.createElement("br",null),i.a.createElement("div",{className:"intro-desc floating-text"},"~2 years\u2019 experience and globally minded programmer with strong project collaboration skills across different time zones. Skilled in full stack development using JavaScript, C#, Python, and SQL. Reliable and dedicated professional seeking a software Engineer position to contribute to team success and help achieve company goals.")),i.a.createElement("div",{className:"basic-info"},i.a.createElement(f,{text:"Works>",url:"/Projects"}),i.a.createElement(h,{text:"Resume>",url:"https://www.foreflame.com/"})))},v=n(8),b=n(9),j=n(11),w=n(7),E=n(10),y=(n(41),function(e){var t=e.snippet;return i.a.createElement("div",{className:"project"},i.a.createElement(c.b,{to:t.link},i.a.createElement("div",{className:"image-container","data-text":t.desc},i.a.createElement("img",{className:"demo-clip rounded-image",src:t.img_url}))),i.a.createElement("div",{className:"demo-text"},i.a.createElement("span",{className:"title"}," ",t.title," ")))}),k=n(3),C=function(e){function t(){return Object(v.a)(this,t),Object(j.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"App-body"},i.a.createElement("header",null),i.a.createElement("div",{className:"snippet-container projects"},i.a.createElement(y,{snippet:k.project_info.project1.snippet}),i.a.createElement(y,{snippet:k.project_info.project2.snippet}),i.a.createElement(y,{snippet:k.project_info.project3.snippet}),i.a.createElement(y,{snippet:k.project_info.project4.snippet}),i.a.createElement(y,{snippet:k.project_info.project5.snippet})))}}]),t}(a.Component),N=(n(43),n(45),function(e){var t=e.text,n=e.url;return i.a.createElement("a",{href:n},i.a.createElement("button",{className:"web_btn"},t))}),P=function(e){var t=e.info,n=e.fontColor;return i.a.createElement("div",{className:"main-container"},i.a.createElement("div",{className:"project-info project-name floating-text",style:{color:n}}," ",t.name," "),i.a.createElement("div",{className:"project-info project-team floating-text",style:{color:n}}," ",t.team," "),i.a.createElement(N,{text:t.outer_link.button_name,url:t.outer_link.link}),i.a.createElement("div",{className:"project-info project-goal floating-text",style:{color:n}}," ",t.goal," "),i.a.createElement("div",{className:"main-container-background",style:{position:"absolute",bottom:0,left:0,width:"100%",height:"100%",background:'url("'.concat("/helloitsChenYin").concat(t.img_url,'")'),backgroundSize:"cover",pointerEvents:"none",zIndex:-1}}))},B=(n(47),function(e){var t=e.bullet;return i.a.createElement("div",{className:"bullet"},i.a.createElement("div",{className:"bullet-title"},i.a.createElement("div",{className:"bullet-text"}," ",t.title," ")),i.a.createElement("div",{className:"bullet-content"},t.content))}),F=(n(49),function(e){var t=e.img_section;return i.a.createElement("div",{className:"project-content center-position"},i.a.createElement("div",{className:"left"},i.a.createElement("div",{className:"bullet-text"},t.img_title),i.a.createElement("div",{className:"bullet-content"},t.img_text)),i.a.createElement("div",{className:"right"},i.a.createElement("img",{className:"rounded-image img-single",src:"/helloitsChenYin/"+t.img_url})))}),D=(n(51),function(e){var t=e.credit_list;return i.a.createElement("div",{className:"credit"},i.a.createElement("div",{className:"credit-title"},"Credit"),t.map(function(e,t){return i.a.createElement("div",{key:t,className:"credit-item"},i.a.createElement("div",{className:"credit-role"},e.role,":"),i.a.createElement("div",{className:"credit-name"},e.name))}))}),T=function(){return i.a.createElement("div",{className:"App-body"},i.a.createElement(P,{info:k.project_info.project1,fontColor:"#ffffff"}),i.a.createElement("div",{className:"project-content"},i.a.createElement("div",{className:"left"},i.a.createElement(B,{bullet:k.project_info.project1.intro[0]}),i.a.createElement(B,{bullet:k.project_info.project1.intro[1]})),i.a.createElement("div",{className:"right"},i.a.createElement("img",{className:"rounded-image img-single",style:{width:"42vw"},src:"/helloitsChenYin/"+k.project_info.project1.img_section[2].img_url}))),i.a.createElement("div",{className:"project-content"},i.a.createElement("div",{className:"left"}),i.a.createElement("div",{className:"right"},i.a.createElement(B,{bullet:k.project_info.project1.intro[2]}))),i.a.createElement(F,{img_section:k.project_info.project1.img_section[1]}),i.a.createElement("div",{className:"project-content"},i.a.createElement("div",{className:"left"}),i.a.createElement("div",{className:"right"},i.a.createElement(B,{bullet:k.project_info.project1.intro[3]}))),i.a.createElement(F,{img_section:k.project_info.project1.img_section[0]}),i.a.createElement(D,{credit_list:k.project_info.project1.credit}))},S=(n(53),function(e){var t=e.img_gallery,n=e.width,a=e.height;return i.a.createElement("div",{className:"project-content center-position"},i.a.createElement("img",{className:"rounded-image img-slide",style:{width:n,height:a},src:"/helloitsChenYin/"+t.img1}),i.a.createElement("img",{className:"rounded-image img-slide",style:{width:n,height:a},src:"/helloitsChenYin/"+t.img2}),i.a.createElement("img",{className:"rounded-image img-slide",style:{width:n,height:a},src:"/helloitsChenYin/"+t.img3}))}),x=function(){return i.a.createElement("div",{className:"App-body"},i.a.createElement(P,{info:k.project_info.project2,fontColor:"#ffffff"}),i.a.createElement("div",null,i.a.createElement(B,{bullet:k.project_info.project2.intro[0]}),i.a.createElement(B,{bullet:k.project_info.project2.intro[1]}),i.a.createElement(S,{img_gallery:k.project_info.project2.gallery[0],width:"auto",height:"100%"}),i.a.createElement(B,{bullet:k.project_info.project2.intro[2],width:"auto",height:"100%"}),i.a.createElement(S,{img_gallery:k.project_info.project2.gallery[1],width:"auto",height:"100%"}),i.a.createElement(D,{credit_list:k.project_info.project2.credit})))},O=function(){return i.a.createElement("div",{className:"App-body"},i.a.createElement(P,{info:k.project_info.project3,fontColor:"#ffffff"}),i.a.createElement("div",null,i.a.createElement(B,{bullet:k.project_info.project3.intro[0]}),i.a.createElement(B,{bullet:k.project_info.project3.intro[1]}),i.a.createElement(S,{img_gallery:k.project_info.project3.gallery[0],width:"auto",height:"50%"}),i.a.createElement(B,{bullet:k.project_info.project3.intro[2]}),i.a.createElement(S,{img_gallery:k.project_info.project3.gallery[1],width:"auto",height:"30%"}),i.a.createElement(B,{bullet:k.project_info.project3.intro[3]}),i.a.createElement(F,{img_section:k.project_info.project3.img_section[0]}),i.a.createElement(D,{credit_list:k.project_info.project3.credit})))},I=function(){return i.a.createElement("div",{className:"App-body"},i.a.createElement(P,{info:k.project_info.project4,fontColor:"#ffffff"}),i.a.createElement("div",null,i.a.createElement(B,{bullet:k.project_info.project4.intro[0]}),i.a.createElement(B,{bullet:k.project_info.project4.intro[1]}),i.a.createElement(S,{img_gallery:k.project_info.project3.gallery[0],width:"auto",height:"50%"}),i.a.createElement(B,{bullet:k.project_info.project3.intro[2]}),i.a.createElement(S,{img_gallery:k.project_info.project3.gallery[1],width:"auto",height:"30%"}),i.a.createElement(B,{bullet:k.project_info.project3.intro[3]}),i.a.createElement(F,{img_section:k.project_info.project3.img_section[0]}),i.a.createElement(D,{credit_list:k.project_info.project3.credit})))},z=function(){var e=Object(l.k)().pathname.startsWith("/Projects/Project")?"#ffffff":"#000000";return i.a.createElement(s,{fontColor:e})},J=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement(c.a,{basename:"helloitsChenYin"},i.a.createElement(z,null),i.a.createElement(l.c,null,i.a.createElement(l.a,{path:"/*",element:i.a.createElement(C,null)}),i.a.createElement(l.a,{path:"/About",element:i.a.createElement(A,null)}),i.a.createElement(l.a,{path:"/Projects",element:i.a.createElement(C,null)}),i.a.createElement(l.a,{path:"/Projects/Project1",element:i.a.createElement(T,null)}),i.a.createElement(l.a,{path:"/Projects/Project2",element:i.a.createElement(x,null)}),i.a.createElement(l.a,{path:"/Projects/Project3",element:i.a.createElement(O,null)}),i.a.createElement(l.a,{path:"/Projects/Project4",element:i.a.createElement(I,null)})))),i.a.createElement(u,null))},R=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,56)).then(function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(i.a.createElement(J,null)),R()}],[[20,3,2]]]);
//# sourceMappingURL=main.9b7290ba.chunk.js.map