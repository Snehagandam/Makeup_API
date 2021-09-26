// Create First Input Box
var input1 = document.createElement("input");
input1.setAttribute('type', 'text');
input1.setAttribute('id','brand')
var parent = document.createElement("div")
document.body.append(parent)
parent.setAttribute("id","btndiv")
parent.appendChild(input1);
// Create Second Input Box
var input2 = document.createElement("input");
input2.setAttribute('type', 'text');
input2.setAttribute('id','product')
parent.appendChild(input2);
// Create button Search
// var btn = document.createElement("BUTTON");
// btn.setAttribute("id","btn")

// var t = document.createTextNode("SEARCH");
// btn.setAttribute("style","color:white;background-color:black;font-size:13px");
// btn.appendChild(t);
// parent.appendChild(btn);
var input3 = document.createElement("input");
input3.setAttribute('type', 'button');
input3.setAttribute('id','btn')
input3.setAttribute('value','SEARCH')
input3.setAttribute("onlick","click")
input3.setAttribute("style","color:white;background-color:black;font-size:13px");
parent.appendChild(input3);

//document.getElementById('btn').addEventListener("click",getdata)



var getdata = async () => {
    try{
        var brand = document.getElementById("brand").value;
        console.log(brand)
        var product = document.getElementById("product").value;
      const res= await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`)
    //const res= 
    //await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${product}`)
      
        const data = await res.json();
       // data.forEach((element) => {
        // var maindiv = document.createElement("div")
        //  maindiv.setAttribute("id","maindiv")
        //  document.body.append(maindiv)
        //    var div1=document.createElement("div");
        //  maindiv.appendChild(div1)
        // div1.setAttribute("id","divl")
        var container = document.createElement("div") 
         container.className="container"
          document.body.append(container);


           for(var i=0;i<data.length;i++){
            //Display Brand Name    
            //console.log("Brand :"+element.brand)
            console.log("Brand :"+data[i].brand)
            // var maindiv = document.createElement("div")
            // maindiv.setAttribute("id","maindiv")
            // document.body.append(maindiv)
            // var div1=document.createElement("div");
            // maindiv.appendChild(div1)
            // div1.setAttribute("id","divl")
             var p1=document.createElement("p")
              p1.setAttribute("id","para1")
              //div1.appendChild(p1)
              container.appendChild(p1)
             // document.getElementById("para1").innerHTML="Brand :"+element.brand;
              document.getElementById("para1").innerHTML="Brand :"+data[i].brand;
              
            //Display Product Name   
           // console.log("Name of product :"+element.name)
           console.log("Name of product :"+data[i].name)
            var p2 =document.createElement("p")
           // div1.appendChild(p2)
            p2.setAttribute("id","para2")
            container.appendChild(p2)
            // document.getElementById("para2").innerHTML="Name of the Product :"+element.name;
            document.getElementById("para2").innerHTML="Name of the Product :"+data[i].name;
            
            //display Price
            //console.log("Price :"+element.price+element.price_sign)
            console.log("Price :"+data[i].price+data[i].price_sign)
            var p3 =document.createElement("p")
           // div1.appendChild(p3)
            p3.setAttribute("id","para3")
            container.appendChild(p3)
            // document.getElementById("para3").innerHTML="Price :"+element.price+element.price_sign;
            document.getElementById("para3").innerHTML="Price :"+data[i].price+data[i].price_sign;
            
            
            
            // Display Product Link
            //console.log("Product.link :"+element.product_link)
            console.log("Product.link :"+data[i].product_link)
            var p5 =document.createElement("p")
            //div1.appendChild(p5)
            p5.setAttribute("id","para5")
            container.appendChild(p5)
           // document.getElementById("para5").innerHTML="Product_link :"+element.product_link;
          // document.getElementById("para5").innerHTML="Product_link :"+data[i].product_link;
          document.getElementById("para5").innerHTML="Product_link :"+'<a href="'+data[i].product_link+'">'+data[i].product_link+'</a>';;
          
            //Display Description
            //console.log("Description :"+element.description);
            console.log("Description :"+data[i].description);
            var p6 =document.createElement("p")
            //div1.appendChild(p6)
            p6.setAttribute("id","para6")
            container.appendChild(p6)
            //document.getElementById("para6").innerHTML="Description :"+element.description;
            document.getElementById("para6").innerHTML="Description :"+data[i].description;
            
            //display Image
            //console.log("Image link :"+element.image_link)
            console.log("Image link :"+data[i].image_link)
            var div2=document.createElement("div");
            //maindiv.appendChild(div2)
            container.appendChild(div2)
            div2.setAttribute("id","divr")
            // var obj = document.createElement('object')
            // div2.appendChild(obj)
            // obj.data=element.image_link
            var img = document.createElement('img');
            div2.appendChild(img)
            img.setAttribute("id","img1")
           // img.src = element.image_link;
            img.src = data[i].image_link;
        //});
           }
       return data;
    }
    catch(e){
       console.log(e);
    }
    }
    
     getdata();