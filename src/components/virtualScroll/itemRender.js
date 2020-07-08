export default {
    render(h){
        return (
            <div class="scrollItem">
               <div class="title">  {this.obj.title} </div> 
            </div>
        ) 
    },
    props:{
        obj:{type:Object},
        index:{type:Number}
    }
}