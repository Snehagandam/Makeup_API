var getdata=async () => {
    try{
        const res= await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`);
        const data= await res.json();
        var container = document.createElement("div") 
        container.className="container"
        document.body.append(container);

        // var container1 = document.createElement("div") 
        // container1.className="container1"
        // document.body.append(container1);
        
          for(var i=0;i<data.length;i++)
     { 
         console.log(data[i].brand)
         var para1 = document.createElement("p") 
         var para2 = document.createElement("p")
         var para3 = document.createElement("p")
         var para4 = document.createElement("p")
         var para5 = document.createElement("p")
         var img = document.createElement('img')

        //  var obj = document.createElement('object')

         para1.innerHTML = 'Brand :'+data[i].brand;
         para2.innerHTML="Name of Product :"+data[i].name 
         para3.innerHTML="Price :"+data[i].price+data[i].price_sign
         para4.innerHTML="Product_link :"+'<a href="'+data[i].product_link+'">'+data[i].product_link+'</a>';
         para5.innerHTML="Description :"+data[i].description 
         img.src = data[i].image_link;

        //  obj.data=data[i].image_link

        img.setAttribute("id","img1")
         container.appendChild(para1)
         container.appendChild(para2)
         container.appendChild(para3)
         container.appendChild(para4)
         container.appendChild(para5)
         container.appendChild(img)
        //  container.appendChild(obj)
 }

    }
    catch(e)
    {
      console.log(e)
    }
}
getdata();
