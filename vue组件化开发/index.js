//必须在创建根实例之前创建组件
// eslint-disable-next-line no-undef
const cpn1 = Vue.extend({
    template:`
    <div>
        <h2>我是标题</h2>
        <p>我是内容一</p>
        <p>我是内容二</p>
    </div>`
})
// eslint-disable-next-line no-undef
//全局构造组件，可在所有vue实例中使用
// Vue.component('cpn',cpn1)
/*语法糖创建注册方法
Vue.component('cpn',{
template:`
    <div>
        <h2>我是标题</h2>
        <p>我是内容一</p>
        <p>我是内容二</p>
    </div>`
})
* */
// eslint-disable-next-line no-undef
const cpn2=Vue.extend({
    template:`
    <h2>我是子组件</h2>`
})
// eslint-disable-next-line no-undef
const cpn3=Vue.extend({
    template:`
<div>
    <h2>我是父组件</h2>
    <cpn_2></cpn_2>
</div>`,components:{
        cpn_2:cpn2
    }
})
// eslint-disable-next-line no-undef
new Vue ({//我就是根实例
    el:"#app",
    data:{
        title1:'组件化开发'
    },
    components:{//局部构造组件，只可在名为app的vue实例中使用
        cpn:cpn1,
        cpn_3:cpn3
    }
});
