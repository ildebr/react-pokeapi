export default function Circle(attr){
    console.log(attr.diameter)


    return (
        <div style={{backgroundColor:attr.color, 
            position: 'fixed', 
            top:attr.top, 
            right:attr.right, 
            height:attr.diameter, 
            width:attr.diameter, 
            borderRadius:'600px',
            transform:`translateX(${attr.tx}) translateY(${attr.ty})`,
            opacity: attr.transparency,
            zIndex: -1
         }} ></div>
    )
}