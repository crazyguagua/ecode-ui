export default {
    render(h){
        return (
            <div class="scrollItem" data-index={this.index}>
                { typeof this.obj.id !='undefined'? (<div class="id" style="background:#e9ecf9;color:#656bc1;padding:10px;"> 条目id【 {this.obj.id} 】</div> ):null
                }
               <div class="title">  {this.obj.title} </div> 
               {
                   this.obj.image?(<div class="image"> <img src={this.obj.image}></img></div>):null
                }
            </div>
        ) 
    },
    props:{
        obj:{type:Object},
        index:{type:Number}
    }
}