import{s as A,z as L,y as T,i as E,q as V,e as v,f as B,o as c,c as m,a as e,b as i,w as d,t as s,u as r,n as P,F as x,r as b,d as G,l as Y,Y as I,D as C,G as J,E as K,m as Q,A as u,H as f,I as X,B as j,S as Z}from"./app-D8LHgVkI.js";import{S as U,d as ee}from"./swiper-B9AAoD8p.js";import{_ as te}from"./ProductCard-CqvkeMkU.js";import{r as ae}from"./FunnelIcon-BazE5vgd.js";import"./Bag-N9eMPsGI.js";const le={class:"main-container py-4 bg-slate-100"},oe={class:"w-full p-2 md:p-4 bg-white rounded-lg sm:rounded-xl md:rounded-2xl flex gap-3 md:gap-6 items-center justify-between"},se={class:"w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden"},re=["src"],ne={class:"text-center text-slate-950 text-xs sm:text-sm font-medium leading-tight truncate"},ie={class:"grow overflow-x-auto"},de=["onClick"],ue={class:"grow shrink basis-0"},ce={class:"main-container py-12"},pe={class:"grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 items-start"},me={key:0,class:"flex justify-center items-center w-full mt-8"},ve={class:"text-slate-800 text-base font-normal leading-normal"},fe={class:"flex justify-between items-center w-full mt-8 gap-4 flex-wrap"},ge={class:"text-slate-800 text-base font-normal leading-normal"},he={class:"fixed inset-0 overflow-hidden"},xe={class:"absolute inset-0 overflow-hidden"},be={class:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"},ye={class:"flex h-full flex-col justify-between overflow-y-scroll bg-white shadow-xl"},we={class:"p-4 flex flex-col gap-7"},_e={class:"flex justify-between items-center"},ke={class:"text-slate-950 text-xl font-bold leading-loose"},$e={class:"text-slate-950 text-base font-medium leading-normal"},Pe={class:"flex flex-col gap-2 mt-3"},Ce=["for"],Se={class:"flex items-center gap-1"},Ve={class:"flex items-center"},Be={class:"text-base font-medium leading-normal"},je=["id","value"],Ue={class:"text-slate-950 text-base font-medium leading-normal"},Me=["value"],ze={class:"flex justify-between items-center gap-2"},Fe={class:"text-slate-950 text-base font-medium leading-normal"},qe={class:"text-primary text-base font-normal leading-normal"},De={class:"flex mt-2"},Ne={class:"text-slate-400 text-xs font-normal leading-none flex justify-between mt-2"},Re={class:"text-slate-950 text-base font-medium leading-normal"},He={class:"flex flex-wrap gap-4 p-3 rounded-xl border border-slate-200 mt-1"},Oe={class:"cursor-pointer has-[:checked]:text-primary text-slate-800 flex items-center p-2 bg-white gap-2"},We={for:"Black",class:"cursor-pointer has-[:checked]:text-primary text-slate-800 flex items-center p-2 bg-white gap-2"},Ae={for:"Blue",class:"cursor-pointer has-[:checked]:text-primary text-slate-800 flex items-center p-2 bg-white gap-2"},Le={for:"Orange",class:"cursor-pointer has-[:checked]:text-primary text-slate-800 flex items-center p-2 bg-white gap-2"},Te={for:"White",class:"cursor-pointer has-[:checked]:text-primary text-slate-800 flex items-center p-2 bg-white gap-2"},Ee={for:"Multicolour",class:"cursor-pointer has-[:checked]:text-primary text-slate-800 flex items-center p-2 bg-white gap-2"},Ge={class:"flex gap-6 p-6 border-t border-slate-200"},_=12,Ze={__name:"ShopCategoryProduct",setup(Ye){const M=A(),n=L(),z=T();E(()=>{if(!M.multiVendor){z.push("/");return}R(),h(),H()}),V(()=>n.params.slug,()=>{h()}),V(()=>n.query.subcategory,()=>{h()});const y=v(!1),g=v(1),F=o=>{g.value=o,h()},a=v({review:null,shortBy:null,brand:null,color:null,size:null,minPrice:null,maxPrice:null}),q=()=>{a.value.review=null,a.value.shortBy=null,a.value.brand=null,a.value.color=null,a.value.size=null,a.value.minPrice=null,a.value.maxPrice=null,h()},D=[5,4,3,2,1],N=[{name:"High to Low",value:"high_to_low"},{name:"Low to High",value:"low_to_high"},{name:"Most Selling",value:"most_selling"},{name:"Top Seller",value:"top_seller"},{name:"New Product",value:"new_product"}],S=v([]),w=v([]),k=v(0),$=v({}),R=async()=>{axios.get("/sub-categories?category_id="+n.params.slug).then(o=>{S.value=o.data.data.sub_categories})},h=async()=>{axios.get("/products",{params:{shop_id:n.params.id,category_id:n.params.slug,page:g.value,per_page:_,rating:a.value.review,sort_type:a.value.shortBy,min_price:a.value.minPrice,max_price:a.value.maxPrice,color:a.value.color,sub_category_id:n.query.subcategory}}).then(o=>{k.value=o.data.data.total,w.value=o.data.data.products,window.scrollTo(0,0)})},H=async()=>{axios.get("/shops/"+n.params.id).then(o=>{$.value=o.data.data.shop})};return(o,l)=>{const O=B("router-link"),W=B("vue-awesome-paginate");return c(),m("div",null,[e("div",le,[e("div",oe,[i(O,{to:`/shops/${r(n).params.id}`,class:"w-14 sm:w-20 flex flex-wrap gap-1 items-center justify-center"},{default:d(()=>{var t,p;return[e("div",se,[e("img",{src:(t=$.value)==null?void 0:t.logo,class:"w-full h-full object-cover",loading:"lazy",alt:"logo"},null,8,re)]),e("div",ne,s((p=$.value)==null?void 0:p.name),1)]}),_:1},8,["to"]),e("div",ie,[i(r(ee),{slidesPerView:"auto",spaceBetween:16,class:"categorySwiper"},{default:d(()=>[i(r(U),null,{default:d(()=>[e("div",{class:P(["p-2 sm:px-4 sm:py-3 rounded-md sm:rounded-[10px] border text-base font-normal leading-normal hover:text-primary cursor-pointer transition duration-300",r(n).query.subcategory?"border-slate-200 text-slate-600":"text-primary border-primary"]),onClick:l[0]||(l[0]=t=>o.$router.push(`/shops/${r(n).params.id}/categories/${r(n).params.slug}`))},s(o.$t("All")),3)]),_:1}),(c(!0),m(x,null,b(S.value,t=>(c(),G(r(U),{key:t.id},{default:d(()=>[e("div",{class:P(["p-2 sm:px-4 sm:py-3 rounded-md sm:rounded-[10px] border text-base font-normal leading-normal hover:text-primary cursor-pointer transition duration-300",t.id==r(n).query.subcategory?"text-primary border-primary":"border-slate-200 text-slate-600"]),onClick:p=>o.$router.push(`/shops/${r(n).params.id}/categories/${r(n).params.slug}?subcategory=${t.id}`)},s(t.name),11,de)]),_:2},1024))),128))]),_:1})]),e("div",null,[e("button",{class:"p-2 sm:px-4 sm:py-3 bg-slate-200 rounded-md sm:rounded-[10px] justify-center items-center gap-2 inline-flex text-slate-600 text-sm sm:text-base font-normal leading-normal border-0 outline-none hover:text-primary transition duration-300",onClick:l[1]||(l[1]=t=>y.value=!0)},[i(r(ae),{class:"w-4 h-4 sm:w-6 sm:h-6"}),e("div",ue,s(o.$t("Filter")),1)])])])]),e("div",ce,[e("div",pe,[(c(!0),m(x,null,b(w.value,t=>(c(),m("div",{key:t.id,class:"w-full"},[i(te,{product:t},null,8,["product"])]))),128))]),w.value.length==0?(c(),m("div",me,[e("div",ve,s(o.$t("No products found")),1)])):Y("",!0),e("div",fe,[e("div",ge,s(o.$t("Showing"))+" "+s(_*(g.value-1)+1)+" "+s(o.$t("to"))+" "+s(_*(g.value-1)+w.value.length)+" "+s(o.$t("of"))+" "+s(k.value)+" "+s(o.$t("results")),1),e("div",null,[i(W,{"total-items":k.value,"items-per-page":_,type:"button","max-pages-shown":5,modelValue:g.value,"onUpdate:modelValue":l[2]||(l[2]=t=>g.value=t),"hide-prev-next-when-ends":!0,onClick:F},null,8,["total-items","modelValue"])])])]),i(r(Z),{as:"template",show:y.value},{default:d(()=>[i(r(I),{as:"div",class:"relative z-10",onClose:l[14]||(l[14]=t=>y.value=!1)},{default:d(()=>[i(r(C),{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:d(()=>l[15]||(l[15]=[e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity"},null,-1)])),_:1}),e("div",he,[e("div",xe,[e("div",be,[i(r(C),{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:d(()=>[i(r(J),{class:"pointer-events-auto relative w-screen max-w-md"},{default:d(()=>[i(r(C),{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:d(()=>l[16]||(l[16]=[e("div",{class:"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4"},null,-1)])),_:1}),e("div",ye,[e("div",we,[e("div",_e,[e("div",ke,s(o.$t("Filter")),1),e("button",{class:"w-8 h-8 flex justify-center items-center bg-slate-100 rounded-full",onClick:l[3]||(l[3]=t=>y.value=!1)},[i(r(K),{class:"w-5 h-5 text-slate-700"})])]),e("div",null,[e("div",$e,s(o.$t("Customer Review")),1),e("div",Pe,[(c(),m(x,null,b(D,t=>e("div",{key:t,class:"grow"},[e("label",{for:`rating${t}`,class:"cursor-pointer has-[:checked]:border-primary text-slate-800 flex items-center justify-between px-2 py-1.5 bg-white rounded-lg border border-slate-100 gap-1.5"},[e("div",Se,[e("div",Ve,[(c(),m(x,null,b(5,p=>i(r(Q),{key:p,class:P(["w-5 h-5",p<=t?"text-amber-500":"text-gray-200"])},null,8,["class"])),64))]),e("div",Be,s(t)+".0 ",1)]),u(e("input",{type:"radio","onUpdate:modelValue":l[4]||(l[4]=p=>a.value.review=p),id:`rating${t}`,name:"review",value:t,class:"w-5 h-5 appearance-none checked:bg-primary rounded-full border-2 border-slate-300 shrink-0 transition duration-300"},null,8,je),[[f,a.value.review]])],8,Ce)])),64))])]),e("div",null,[e("div",Ue,s(o.$t("Sort by")),1),u(e("select",{"onUpdate:modelValue":l[5]||(l[5]=t=>a.value.shortBy=t),class:"w-full mt-1 p-3 rounded bg-transparent border border-gray-100 outline-none"},[(c(),m(x,null,b(N,t=>e("option",{key:t,value:t.value},s(t.name),9,Me)),64))],512),[[X,a.value.shortBy]])]),e("div",null,[e("div",ze,[e("div",Fe,s(o.$t("Product Price")),1),e("div",qe,s(o.$t("$300 - $4200")),1)]),e("div",De,[u(e("input",{type:"range",min:"00",max:"9200","onUpdate:modelValue":l[6]||(l[6]=t=>a.value.minPrice=t),class:"w-full rotate-180 appearance-none bg-slate-300 accent-primary-600 focus:accent-primary h-2 rounded-r-full"},null,512),[[j,a.value.minPrice]]),u(e("input",{type:"range",min:"00",max:"10000","onUpdate:modelValue":l[7]||(l[7]=t=>a.value.maxPrice=t),class:"w-full appearance-none bg-slate-300 accent-primary-600 focus:accent-primary h-2 rounded-r-full -ml-0.5"},null,512),[[j,a.value.maxPrice]])]),e("div",Ne,[e("span",null," $"+s(a.value.minPrice),1),e("span",null," $"+s(a.value.maxPrice),1)])]),e("div",null,[e("div",Re,s(o.$t("Color")),1),e("div",He,[e("label",Oe,[u(e("input",{type:"radio","onUpdate:modelValue":l[8]||(l[8]=t=>a.value.color=t),value:"red",id:"red",name:"color",class:"w-5 h-5 appearance-none checked:bg-primary rounded-full border-2 border-slate-300 shrink-0 transition duration-300"},null,512),[[f,a.value.color]]),e("span",null,s(o.$t("Red")),1)]),e("label",We,[u(e("input",{type:"radio","onUpdate:modelValue":l[9]||(l[9]=t=>a.value.color=t),value:"black",id:"Black",name:"color",class:"w-5 h-5 appearance-none checked:bg-primary rounded-full border-2 border-slate-300 shrink-0 transition duration-300"},null,512),[[f,a.value.color]]),e("span",null,s(o.$t("Black")),1)]),e("label",Ae,[u(e("input",{type:"radio","onUpdate:modelValue":l[10]||(l[10]=t=>a.value.color=t),value:"Blue",id:"Blue",name:"color",class:"w-5 h-5 appearance-none checked:bg-primary rounded-full border-2 border-slate-300 shrink-0 transition duration-300"},null,512),[[f,a.value.color]]),e("span",null,s(o.$t("Blue")),1)]),e("label",Le,[u(e("input",{type:"radio","onUpdate:modelValue":l[11]||(l[11]=t=>a.value.color=t),value:"Orange",id:"Orange",name:"color",class:"w-5 h-5 appearance-none checked:bg-primary rounded-full border-2 border-slate-300 shrink-0 transition duration-300"},null,512),[[f,a.value.color]]),e("span",null,s(o.$t("Orange")),1)]),e("label",Te,[u(e("input",{type:"radio","onUpdate:modelValue":l[12]||(l[12]=t=>a.value.color=t),value:"White",id:"White",name:"color",class:"w-5 h-5 appearance-none checked:bg-primary rounded-full border-2 border-slate-300 shrink-0 transition duration-300"},null,512),[[f,a.value.color]]),e("span",null,s(o.$t("White")),1)]),e("label",Ee,[u(e("input",{type:"radio","onUpdate:modelValue":l[13]||(l[13]=t=>a.value.color=t),value:"Multicolour",id:"Multicolour",name:"color",class:"w-5 h-5 appearance-none checked:bg-primary rounded-full border-2 border-slate-300 shrink-0 transition duration-300"},null,512),[[f,a.value.color]]),e("span",null,s(o.$t("Multicolour")),1)])])])]),e("div",Ge,[e("button",{class:"grow px-4 py-3 rounded-[10px] border border-primary text-primary text-base font-medium leading-normal",onClick:q},s(o.$t("Clear")),1),e("button",{class:"grow px-4 py-3 bg-primary rounded-[10px] border border-primary text-white text-base font-medium leading-normal",onClick:h},s(o.$t("Apply")),1)])])]),_:1})]),_:1})])])])]),_:1})]),_:1},8,["show"])])}}};export{Ze as default};