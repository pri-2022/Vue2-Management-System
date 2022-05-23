1. public 文件夹，一般放置静态资源，webpack进行打包的时候，会原封不动打包到 dist 文件夹。

   assets 文件夹，一般放置多个组件共用的静态资源，webpack会当成一个模块，打包到 JS 文件里。

2. 项目自动开启服务器

   ```js
   // package.json
   ... serve --open
   ```

3. $route：获取路由信息
   $router:编程式导航进行路由跳转【push replace】

4. 路由传参
   params参数：属于路径中的一部分，配置路由时需要占位；
   query 参数：不属于路径的一部分，/home?k=v&k=v，不需要占位。

   路由传参有字符串写法和对象写法，一般采用对象写法，需要配 name 属性

   {
      path：'/search/:keyword'
      name:'search'
   }
   this.$router.push({ name:"search",params:{ keyword:keyword },query:{ k:keyword }})

   注意1：对象写法，path 不可与 params 共用。
   注意2：params占位后不传递 params 参数，会导致路径缺失；解决方法：在占位后添加 "?"
    {
      path：'/search/:keyword?'
      name:'search'
   }
   注意3：params 传递空串，导致路径缺失；解决方法：使用 undefined
   this.$router.push({name:'search', params: {keyword: '' || undefined }})  

5. 路由组件传递 props 数据？
     {
      path：'/search/:keyword?'
      name:'search'
      // 函数写法，可以传递 params query,通过 props 传递给组件
      props:( $route ) => ({ keyword:$route.params.keyword , k : $route.query.k })
   }

   // 2.vue
   props:[ 'keyword' ]


6. 编程式导航多次传递同一参数，抛出 NavigationDuplicated 错误？
   push() 返回的是 promise 函数，二次封装该方法。

   let originPush = VueRouter.prototype.push;

7. call apply 的区别
   相同点：都可以调用函数一次，修改函数上下文；
   不同点：call 传参用逗号隔开，apply传递数组

8. 注册全局组件
// 参数1 组件名，参数2 组件
import TypeNav from '@/component/TypeNav'
Vue.component(TypeNav.name , TypeNav )   

9. 演示卡顿
   防抖：前面所有的触发都被取消，最后一次执行在规定的时间之后才会触发；即连续触发只会执行一次；
         应用场景：搜索框
   节流：在规定的时间间隔内只触发一次；即频繁触发变为少量触发；
         应用场景：轮播图

   // 参数1为回调函数，参数2为延迟时间
   // throttle 节流，debounce 防抖
   // 底层原理：闭包 + 延时器
   // 按需引入
   import throttle from 'lodash/throttle'

   changeIndex:_.throttle(function(index){
      index++;
   },100)

10. 节点有一个 dataset 属性，可以获取节点的自定义属性与属性值
      <a :data-categoryName="index">
      ...
      let { categoryname } = event.target.dataset

11. 过渡动画
   前提：组件 | 元素务必有 v-if v-show 指令才可以进行过渡动画
   <transition name='sort'>
      <div v-show='show' ></div>
   <transition >

   .sort-enter{
      height:0px;
   }

   .sort-enter-to{
      height:461px;
   }

   .sort-enter-to{
      transition: all .5s linear;
   }

12. 印记中文，docschina.org

13. mock
   1. create json file
   2. Mock.mock(url,data)
   3. import '/mock/index' // main.js
   4. 修改 baseURL

14. 