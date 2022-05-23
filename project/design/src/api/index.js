import service from "@/utils/request";

export const reqCategoryList = ()=>service({url:'/product/getBaseCategoryList',method:'get'})
