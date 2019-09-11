const app= new Vue({
    el:"#app",
    data:{
        books:[
            {
                id:1,
                name:'算法导论',
                date:'2006-9',
                price:85.00,
                count:1
            },{
                id:2,
                name:'unix编程技术',
                date:'2006-2',
                price:59.00,
                count:1
            },{
                id:3,
                name:'编程珠玑',
                date:'2008-10',
                price:39.00,
                count:1
            },{
                id:4,
                name:'代码大全',
                date:'2006-3',
                price:128.00,
                count:1
            },{
                id:5,
                name:'数据结构',
                date:'2009-9',
                price:80.00,
                count:1
            }
        ],
        num:1,
        total:0,
    },
    filters:{
        showPrice(price){
            return "￥"+price.toFixed(2);
        }
    },
    computed:{
        bookTotal(){
            let bookTotal = 0;
            for(let i = 0;i<this.books.length;i++){
                bookTotal += this.books[i].price*this.books[i].count;
            }
            return bookTotal;
        }

    },
    methods:{
        btnDelete(index) {
            this.books.splice(index,1);
        },
        increment(index){
            this.books[index].count++
        },
        decrement(index){
            this.books[index].count--
        },
    }
});