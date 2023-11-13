function MenuCard({menudata}){
   
    return(
        <>
       <section className="main-card--cointainer">
        {menudata.map((curElem)=>{
             //destructing of object done by below way
             const{id,name,category,image,description}=curElem;
            return(
<>
<div className="card-container" key ={id}>
    <div className="card">
        <div className="card-body">
    <span className="card-number card-circle subtle">{id}</span>
<span className="card-author subtle">{category}</span>
<div className="card-title">{name}</div>
     <div className="card-description subtle">
{description}
     </div>
     <div className="card-read">READ</div>
        </div>
<img src={image} className="card-media"/>
        <span className="card-tag subtle"> order now</span>
    </div>
</div>


</>

            );
        }

        )
        }
        


        </section>
</>
    
    )
}
export default MenuCard