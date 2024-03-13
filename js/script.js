let logout = document.getElementById("logout");
logout.addEventListener("click",function(){
    window.location.href = "./index.html"
})
// array of items
let foodItems = [
    {
        id:1,
        fname:"biryani",
        img:"img/biriyani 1.avif",
        hotelName:"Hotel Kannappa",
        icon:4.4,
        Timing:"30-35mins",
        foodName:"Biryani, Chettinad, South Indian Sitra",
        price:150,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:2,
        fname:"biryani",
        img:"img/biriyani 2.jpg",
        hotelName:"VKS Restaurant",
        icon:4.3,
        Timing:"35-40mins",
        foodName:"Hyderabadi Kachi Chicken Biryani",
        price:180,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:3,
        fname:"biryani",
        img:"img/biriyani 3.jpg",
        hotelName:"Denmarrk Drive-Inn Restaurant",
        icon:4.4,
        Timing:"30-35mins",
        foodName:"Ambur Chicken Biryani",
        price:200,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:4,
        fname:"biryani",
        img:"img/biriyani 4.jpg",
        hotelName:"Hotel chola",
        icon:4.1,
        Timing:"20-25mins",
        foodName:"Mutton biryani",
        price:300,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:5,
        fname:"biryani",
        img:"img/biriyani 5.jpg",
        hotelName:"HMR - Biryani Hut",
        icon:4.3,
        Timing:"25-30mins",
        foodName:"Special Biryani",
        price:220,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:6,
        fname:"biryani",
        img:"img/biriyani 6.jpg",
        hotelName:"Dum Safar Biryani",
        icon:4,
        Timing:"30-35mins",
        foodName:"Hydrabad Biryani",
        price:190,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:7,
        fname:"biryani",
        img:"img/biriyani 7.jpg",
        hotelName:"Dindigul Venu Biriyani",
        icon:4.2,
        Timing:"20-25mins",
        foodName:"Chettinad chicken Biryani",
        price:240,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:8,
        fname:"biryani",
        img:"img/biriyani 8.jpg",
        hotelName:"Aasife & Brothers",
        icon:4.3,
        Timing:"25-30mins",
        foodName:"Biryani, Kebabs, Tandoor",
        price:200,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:9,
        fname:"biryani",
        img:"img/biriyani 9.jpg",
        hotelName:"Hotel Kannappa",
        icon:4.4,
        Timing:"30-35mins",
        foodName:"Awadhi Chicken Biryani",
        price:250,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:10,
        fname:"biryani",
        img:"img/biriyani 10.jpg",
        hotelName:"SS Hydrabad Biryani",
        icon:4.6,
        Timing:"30-35mins",
        foodName:"Hyderabadi Mutton Biryani",
        price:280,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:11,
        fname:"biryani",
        img:"img/biriyani 11.jpg",
        hotelName:"Bai Biryani",
        icon:4.1,
        Timing:"25-30mins",
        foodName:"Biryani",
        price:160,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:12,
        fname:"biryani",
        img:"img/biriyani 12.avif",
        hotelName:"Alif Paradise Biriyani",
        icon:3.7,
        Timing:"25-30mins",
        foodName:"Chicken fry Biryani",
        price:240,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },

    {
        id:13,
        fname:"chicken",
        img:"img/chic1.avif",
        hotelName:"China Valley Chinese Restaurant",
        icon:4.3,
        Timing:"30-35mins",
        foodName:"Pineapple Chicken",
        price:120,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:14,
        fname:"chicken",
        img:"img/chic2.jpeg",
        hotelName:"SPKP Chettinadu Mess",
        icon:4.4,
        Timing:"30-35mins",
        foodName:"Butter chicken fry",
        price:150,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:15,
        fname:"chicken",
        img:"img/chic3.jpg",
        hotelName:"Hotel Sri Madurai Meenakshi",
        icon:3.3,
        Timing:"25-30mins",
        foodName:"Chicken Manchurian",
        price:250,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:16,
        fname:"chicken",
        img:"img/chic4.webp",
        hotelName:"Sri Amman Mess",
        icon:4.3,
        Timing:"25-30mins",
        foodName:" Chicken Tikka",
        price:350,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:17,
        fname:"chicken",
        img:"img/chicken 3.jpg",
        hotelName:"Sri Aarvee Hotels",
        icon:4.4,
        Timing:"35-40mins",
        foodName:"Fried Chicken",
        price:360,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:18,
        fname:"chicken",
        img:"img/chicken 5.jpg",
        hotelName:"Subway",
        icon:4.3,
        Timing:"30mins",
        foodName:"Honey Chicken",
        price:280,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:19,
        fname:"chicken",
        img:"img/chicken 2.jpg",
        hotelName:"Kadhambam",
        icon:4.6,
        Timing:"35-40mins",
        foodName:"KFC Chicken",
        price:400,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:20,
        fname:"chicken",
        img:"img/chicken 4.jpeg",
        hotelName:"Sree Sampoornaa",
        icon:3.8,
        Timing:"30-35mins",
        foodName:"Tandoori",
        price:240,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:21,
        fname:"chicken",
        img:"img/chicken 6.jpg",
        hotelName:"Ajmeer Biriyani",
        icon:4.2,
        Timing:"35-40mins",
        foodName:"Rice With Chicken Fry",
        price:300,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:22,
        fname:"chicken",
        img:"img/chicken 8.jpg",
        hotelName:"Hotel Sri Surya",
        icon:4.4,
        Timing:"30-35mins",
        foodName:"Tangdi Kabab Recipe",
        price:250,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:23,
        fname:"chicken",
        img:"img/chicken7.jpg",
        hotelName:"Hotel Annachi",
        icon:4,
        Timing:"45-50mins",
        foodName:"Chicken Toast",
        price:300,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:24,
        fname:"chicken",
        img:"img/chicken 11.jpg",
        hotelName:"KCM Family Restaurant",
        icon:4.1,
        Timing:"20-25mins",
        foodName:"Chicken Gravy",
        price:200,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },

    {
        id:25,
        fname:"chinese",
        img:"img/china 1.webp",
        hotelName:"Subway",
        icon:4.3,
        Timing:"16mins",
        foodName:"noodles",
        price:150,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:26,
        fname:"chinese",
        img:"img/china 2.jpeg",
        hotelName:"Salem RR Biriyani Unavagam",
        icon:4.2,
        Timing:"36mins",
        foodName:"Spicy Noodles With Chicken 65",
        price:180,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:27,
        fname:"chinese",
        img:"img/china 3.webp",
        hotelName:"Bhatinda Xpress",
        icon:4.6,
        Timing:"40mins",
        foodName:"Momos",
        price:180,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:28,
        fname:"chinese",
        img:"img/china 4.jpg",
        hotelName:"Guntur Kitchen",
        icon:4,
        Timing:"30-35 mins",
        foodName:"Chicken Momos",
        price:250,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:29,
        fname:"chinese",
        img:"img/china 5.webp",
        hotelName:"Bhavana Shri Restaurant",
        icon:3.8,
        Timing:"20mins",
        foodName:"Chow Mein",
        price:320,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:30,
        fname:"chinese",
        img:"img/china6.jpg",
        hotelName:"Guntur Gorgura",
        icon:3.8,
        Timing:"25mins",
        foodName:"Char Siu",
        price:190,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:31,
        fname:"chinese",
        img:"img/china 7.jpeg",
        hotelName:"Behrouz Biryani",
        icon:4,
        Timing:"20mins",
        foodName:"Naan with Beef",
        price:260,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:32,
        fname:"chinese",
        img:"img/china 8.jpg",
        hotelName:"The Arab Story",
        icon:3.9,
        Timing:"50mins",
        foodName:"Combo foods",
        price:430,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:33,
        fname:"chinese",
        img:"img/china 9.webp",
        hotelName:"Zaitoon",
        icon:4,
        Timing:"25mins",
        foodName:"Prawn",
        price:340,
        cart:'<i class="fa-solid fa-cart-plus"></i>'       
    },
    {
        id:34,
        fname:"chinese",
        img:"img/china 10.jpeg",
        hotelName:"Ambur Star Biryani",
        icon:4.7,
        Timing:"1 hour",
        foodName:"Chinese Hot Pot",
        price:200,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:35,
        fname:"chinese",
        img:"img/china 11.jpg",
        hotelName:"Hot Breads",
        icon:3.9,
        Timing:"25mins",
        foodName:"Chicken Fried Rice",
        price:260,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:36,
        fname:"chinese",
        img:"img/china 12.jpg",
        hotelName:"McDonald's Gourmet Burger",
        icon:4.2,
        Timing:"30mins",
        foodName:"Kung Pao Chicken",
        price:230,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },

    {
        id:37,
        fname:"veggie",
        img:"img/veg1.jpg",
        hotelName:"Astoria Veg",
        icon:4.3,
        Timing:"20mins",
        foodName:"Paneer With Rice",
        price:200,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:38,
        fname:"veggie",
        img:"img/veg2.jpg",
        hotelName:"Shri Anandhaas Veg",
        icon:3.5,
        Timing:"15mins",
        foodName:"Gravy",
        price:150,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:39,
        fname:"veggie",
        img:"img/veg3.jpeg",
        hotelName:"Shri Mahalakshmi Hotel",
        icon:3.6,
        Timing:"10mins",
        foodName:"Veggie Salad",
        price:130,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:40,
        fname:"veggie",
        img:"img/veg4.jpg",
        hotelName:"Baboos",
        icon:4.5,
        Timing:"45mins",
        foodName:"Combo Foods",
        price:350,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:41,
        fname:"veggie",
        img:"img/veg5.jpg",
        hotelName:"Adyar Ananda Bhavan",
        icon:3.7,
        Timing:"1 hour",
        foodName:"Combo foods includes veg biryani,naan,samosa,panner and some more",
        price:500,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:42,
        fname:"veggie",
        img:"img/veg6.jpg",
        hotelName:"Chacma-Dieting Monkey",
        icon:4.3,
        Timing:"35mins",
        foodName:"Sesame-Garlic Ramen Noodles",
        price:260,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:43,
        fname:"veggie",
        img:"img/veg7.webp",
        hotelName:"Great Indian Khichdi by EatFit",
        icon:4,
        Timing:"20-25mins",
        foodName:"Tofu Lettuce Wraps",
        price:345,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:44,
        fname:"veggie",
        img:"img/veg8.jpg",
        hotelName:"HRX by EatFit",
        icon:3.9,
        Timing:"30-35mins",
        foodName:"Vegetarian Meatballs",
        price:188,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:45,
        fname:"veggie",
        img:"img/veg9.jpg",
        hotelName:"Hotel Ganga",
        icon:3.9,
        Timing:"40mins",
        foodName:"Kung Pao Tofu",
        price:170,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:46,
        fname:"veggie",
        img:"img/veg10.jpg",
        hotelName:"Delights",
        icon:4,
        Timing:"15mins",
        foodName:"Veggie Momos",
        price:220,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:47,
        fname:"veggie",
        img:"img/veg11.webp",
        hotelName:"PVR Cafe",
        icon:4.2,
        Timing:"25mins",
        foodName:"Instant Pot Mac & Cheese",
        price:210,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    },
    {
        id:48,
        fname:"veggie",
        img:"img/veg12.jpg",
        hotelName:"Andhra Gunpowder",
        icon:4,
        Timing:"30mins",
        foodName:"Green Curry Buddha Bowl",
        price:190,
        cart:'<i class="fa-solid fa-cart-plus"></i>'
    }
];

let card_food_items = document.getElementById("card_food_items");
let food_items = document.createElement("div");
food_items.setAttribute("id","food_items");
card_food_items.appendChild(food_items);
let card_food = document.createElement("div");
card_food.setAttribute("id","card-food");
food_items.appendChild(card_food);



//all food items
function showFoods(element){
    let card_food_ect = document.getElementById("card-food-ect");
    card_food_ect.style.display = "none";
    for(let i=0; i < element.length; i++ ){
        let items = document.createElement("div");
        items.classList.add("items");
        card_food.appendChild(items);
    }

    element.forEach(function(ele,index){
       let card_food_items = document.getElementById("card_food_items");
        //card_food_items.appendChild(food_items);
        let card_food = document.createElement("div");
        card_food.setAttribute("id","card-food");
        let items = document.createElement("div");
        items.classList.add("items");
        card_food.appendChild(items);
        const img = document.createElement("img");
        const hn = document.createElement("h2");
        const icon = document.createElement("h3");
       const price = document.createElement("h3");
        const fn = document.createElement("p");
        const time= document.createElement("span");
        const id = document.createElement("span");
        const cart = document.createElement("button");
        cart.classList.add("cartButton");
        const fname = document.createElement("p");
    
        
        img.setAttribute("src",ele.img);
        hn.innerText = ` ${ele.hotelName}`;
        icon.innerHTML = '<i class="fa-solid fa-star-half-stroke"></i>'+ ele.icon;
        time.innerText = ` ${ele.Timing}`;
        fn.innerText = ` ${ele.foodName}`;
        cart.innerText = " Add To Cart ";
        price.innerText = `Rs. ${ele.price}`;
        //id.innerText = `id:${ele.id}`;
        cart.setAttribute("onclick",`addToCart(foodItems[${ele.id-1}])`);
       
        cart.setAttribute("id","addtocart");
        let foodItemEle=document.querySelectorAll(".items");
       
        foodItemEle[index].setAttribute("data-id",ele.id);
        foodItemEle[index].appendChild(fname);
        foodItemEle[index].appendChild(img);
        foodItemEle[index].appendChild(hn);
        foodItemEle[index].appendChild(icon);
        foodItemEle[index].appendChild(time);
        foodItemEle[index].appendChild(fn);
        foodItemEle[index].appendChild(price);       
        foodItemEle[index].appendChild(id);
        foodItemEle[index].appendChild(cart); 
        
        });
}
//food items filter

let foodArray = [];
function foodFilter(food){
  
    let items = document.querySelectorAll(".items");
    for(let i = 0; i < items.length; i++){
        card_food.removeChild(items[i]);
    }
    showFoods(foodItems);
    card_food_items.classList.add("hidden");
    if(foodArray==[]){
        foodItems.forEach(function(item,index){
            let items = document.querySelectorAll(".items");
            card_food_items.classList.remove("hidden");
           
            if(item.fname==food){
                foodArray.push(item);
                items[index].style.display="block";
            }else{
                items[index].style.display="none"; 
            }
        })
    }else{
        foodArray=[];
        foodItems.forEach(function(item,index){
            let items = document.querySelectorAll(".items");
            card_food_items.classList.remove("hidden");
           
            if(item.fname==food){
                foodArray.push(item);
                items[index].style.display="block";
            }else{
                items[index].style.display="none"; 
            }  
        })
    }
}
let num = 1;
let crt_item = document.getElementById("crt_item");
let cart_count = document.getElementById("cart");
// add to cart
let cart =[];
function addToCart(event){
    total = [];
    if(cart.length==0){
        cart.push(event);
        event.quantity = 1;
    }else{
        let existingItem = cart.find(function(food){
            return food.id===event.id;
        });
        if(existingItem){
            event.quantity+=1;
        }else{
            cart.push(event);
            event.quantity=num;
        }
    }
    let cartItem = document.querySelectorAll(".crt-items");
    for(let i = 0; i < cartItem.length; i++){
        crt_item.removeChild(cartItem[i]);
    }
    cart_count.innerHTML = cart.length;
    displayCart();
    itemTotal();
}
let total = [];

function itemTotal(){
    if(total.length>0){
        let value=Number(total.reduce(function(a,b){
            return Number(a)+Number(b);
        }));
        let totalValue = document.getElementById("total");
        totalValue.innerText = value;
    }else{
        resetCartValue();
    }
}
function resetCartValue(){
    let totalValue = document.getElementById("total");
        totalValue.innerText = 0;
}
function displayCart(){
    cart.forEach(function(data,index){
            const div = document.createElement("div");
            div.setAttribute("data-unique",data.id);
            div.classList.add("crt-items");
            const divCnt1 = document.createElement("div");
            const divCnt2 = document.createElement("div");
            
            const img = document.createElement("img");
            const hn = document.createElement("h2");
            const icon = document.createElement("h3");
            const time= document.createElement("h5");
            const fn = document.createElement("p");
            const price = document.createElement("h3");
            const id = document.createElement("p"); 
            let btn = document.createElement("span");
            btn.setAttribute("id","num");
            btn.setAttribute("min","1");
            btn.innerHTML=data.quantity;
          
            const btnAdd = document.createElement("input");
            btnAdd.setAttribute("value","+");
            btnAdd.setAttribute("type","button");
            btnAdd.setAttribute("id","add");                    
            btnAdd.setAttribute("onclick",`quantityIncrease(${index})`);
            const btnSub = document.createElement("input");
            btnSub.setAttribute("value","-");
            btnSub.setAttribute("type","button");
            btnSub.setAttribute("id","sub");
            btnSub.setAttribute("onclick",`quantityDecrease(${index})`);
            
            const crt_item = document.getElementById("crt_item");
            const dltBtn = document.createElement("button");
            dltBtn.classList.add("space");
            dltBtn.setAttribute("id","btnId");
         
            dltBtn.setAttribute("onclick",`deleteItem(${index})`);
            
            img.setAttribute("src",data.img);
            hn.innerText = data.hotelName;
            icon.innerHTML = data.icon;
            time.innerText = data.Timing;
            fn.innerText = data.foodName;
            price.innerText = data.price;
            dltBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
           // const total = document.getElementById("total");
            total.push((data.price*data.quantity).toFixed(2));
            divCnt1.appendChild(img);
            divCnt2.appendChild(hn);
            divCnt2.appendChild(icon);
            divCnt2.appendChild(time);
            divCnt2.appendChild(fn);
            divCnt2.appendChild(price);
            divCnt2.appendChild(btnSub);
            divCnt2.appendChild(btn);
            divCnt2.appendChild(btnAdd);
            divCnt2.appendChild(id);
            divCnt2.appendChild(dltBtn);
            div.appendChild(divCnt1);
            div.appendChild(divCnt2);
            crt_item.appendChild(div);
    })
}
//delete
function deleteItem(event){
let cartItem = document.querySelectorAll(".crt-items");
    for(let i = 0; i < cartItem.length; i++){
        crt_item.removeChild(cartItem[i]);
    }
    if(event==0){
        cart.splice(event,event+1);
    }else{
        cart.splice(event,event);
    }
   total = [];
   cart_count.innerHTML = cart.length;
   displayCart();
   itemTotal()
}
function quantityIncrease(index){
    cart[index].quantity+=1;
    let cartItem = document.querySelectorAll(".crt-items");
    for(let i = 0; i < cartItem.length; i++){
        crt_item.removeChild(cartItem[i]);
    }
    total = [];
    cart_count.innerHTML = cart.length;
    displayCart();
    itemTotal();
}
function quantityDecrease(index){
    if(cart[index].quantity>1){
        cart[index].quantity-=1;
    let cartItem = document.querySelectorAll(".crt-items");
    for(let i = 0; i < cartItem.length; i++){
        crt_item.removeChild(cartItem[i]);
    }
    total = [];
    cart_count.innerHTML = cart.length;
    displayCart();
    itemTotal();
    }
    
}


let cartItem = document.getElementById("cart");
let crt_modal = document.getElementById("crt-modal");
cartItem.addEventListener("click",function(){
    crt_modal.style.display = "block";
    crt_modal.classList.add("open-modal");
    crt_modal.classList.remove("close-modal");
});
let clsBtn = document.getElementById("clsBtn")
clsBtn.addEventListener("click",function(){
    crt_modal.style.display = "none";
    crt_modal.classList.add("close-modal");
    crt_modal.classList.remove("open-modal");
});



//payment
let payment_modal = document.getElementById("payment-modal");
let pay = document.getElementById("pay");
pay.addEventListener("click",function(){
    payment_modal.classList.remove("hidden");
    cart =[];
    let cartItem = document.querySelectorAll(".crt-items");
    for(let i = 0; i < cartItem.length; i++){
        crt_item.removeChild(cartItem[i]);
    }
    total = [];
    let totalValue = document.getElementById("total");
    totalValue.innerText = " $0.00 "
    cart_count.innerHTML = cart.length;   
})
//location
let other = document.getElementById("other");
let xmark = document.getElementById("xmark");
let location_modal = document.getElementById("location-modal");
other.addEventListener("click",function(){
    location_modal.classList.remove("hidden");
})
xmark.addEventListener("click",function(){
    location_modal.classList.add("hidden");
})

let cls = document.getElementById("cls");
cls.addEventListener("click",function(){
    payment_modal.classList.add("hidden");
})



//filter
let highToLow = document.getElementById("HighToLow");
let lowToHigh = document.getElementById("LowToHigh");
let rating = document.getElementById("Rating");
let filBtn = document.getElementById("filBtn");
filBtn.addEventListener("click",function(){
    highToLow.classList.remove("hidden");
    lowToHigh.classList.remove("hidden");
    rating.classList.remove("hidden");
})
function checkLowToHigh(e){
    let items = document.querySelectorAll(".items");
    for(let i = 0; i < items.length; i++){
        card_food.removeChild(items[i]);
    }
    let newArray=foodArray;
    let lowToHigh=newArray.sort(function(a,b){
        return a.price - b.price;
    })
    showFoods(lowToHigh);
}
function checkRating(e){
    let items = document.querySelectorAll(".items");
    for(let i = 0; i < items.length; i++){
        card_food.removeChild(items[i]);
    }
    let newArray=foodArray;
    let rating=newArray.sort(function(a,b){
        return b.icon - a.icon;
    })
    showFoods(rating);
}
function checkHighToLow(e){
    let items = document.querySelectorAll(".items");
    for(let i = 0; i < items.length; i++){
        card_food.removeChild(items[i]);
    }
    let newArray=foodArray;
    let highToLow=newArray.sort(function(a,b){
        return b.price - a.price;
    })
    showFoods(highToLow);
}
