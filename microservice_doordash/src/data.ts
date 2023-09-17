type Item = {
id: number;
title:string;
desc?: string;
img?: string;
price: number;
pricing?:{title: string; addedPricing: number}[];
}

type Items = Item[];

export const itemsShowcased: Items = [
    {
        id: 1,
        title: "Beef Bento Box",
        desc: "Indulge in succulent beef perfection with the bento box!",
        img: "/food/Bento Box.png",
        price: 25,
        pricing:[
        {
        title: "Regular",
        addedPricing: 0
        },
        {
        title: "Large",
        addedPricing: 5
        },
      ],
    },
    {
        id: 2,
        title: "Sushi",
        desc: "Embark on a sushi journey of exquisite flavors.",
        img: "/food/sushi.png",
        price: 12,
        pricing:[
        {
        title: "Mini Pack",
        addedPricing: 0,
        },
        {
        title: "Regular Pack",
        addedPricing: 3,
        },
      ],
    },
    {
        id: 3,
        title: "Ramen",
        desc: "Savor the comforting flavors of ramen",
        img: "/food/ramen.png",
        price: 20,
        pricing:[
        {
          title: "Regular",
          addedPricing: 0
        },
        {
         title: "Large",
         addedPricing: 5
        },
      ],
    },
    {
        id: 4,
        title: "Korean Fried Chicken ",
        desc: "Enjoy the amazing flavours of korean fried chicken",
        img: "/food/fried chicken.png",
        price: 24.5,
        pricing:[
        {
        title: "Regular",
        addedPricing: 0
        },
        {
        title: "Large",
        addedPricing: 5
        },
      ],
    },
    {
        id: 5,
        title: "Gyoza",
        desc: "Golden Gyoza perfectly pan-fried to your liking",
        img: "/food/gyoza.png",
        price: 14,
        pricing:[
        {
        title: "Regular",
        addedPricing: 0
        },
        {
        title: "Large",
        addedPricing: 3
        },
      ],
    },
    {
        id: 6,
        title: "Double Beef Burger",
        desc: "Succulent Beef Burger with scrumptious sizzling bacon",
        img: "/food/double beef burger.png",
        price: 20,
        pricing:[
        {
        title: "Without Fries",
        addedPricing: 0
        },
        {
        title: "With Fries",
        addedPricing: 4
        },
      ],
    },
    {
        id: 7,
        title: "Cheeseburger",
        desc: "Enjoy the simplicity of a cheeseburger in the comfort of your home.",
        img: "/food/Cheeseburger.png",
        price: 16,
        pricing:[
        {
        title: "Without Fries",
        addedPricing: 0
        },
        {
        title: "With Fries",
        addedPricing: 4
        },
      ],
    },
    {
        id: 8,
        title: "Chicken burger",
        desc: "Delicious Chicken Burger covered in delicious sauce",
        img: "/food/chicken burger.png",
        price: 20,
        pricing:[
        {
        title: "Without Fries",
        addedPricing: 0
        },
        {
        title: "With Fries",
        addedPricing: 4
        },
      ],
    },
    {
        id: 9,
        title: "Lamb Burger",
        desc: "Delicious tenderized lamb burger with amazing sauce",
        img: "/food/lamb burger.png",
        price: 20,
        pricing:[
        {
        title: "Without Fries",
        addedPricing: 0
        },
        {
        title: "With Fries",
        addedPricing: 4
        },
      ],
    },

];


export const italian: Items = [

    {
        id: 1,
        title: "Fetuccine",
        desc: "Amazing pasta covered in a great white sauce",
        img: "/food/fetuccine.png",
        price: 23,
        pricing:[
        {
        title: "Regular",
        addedPricing: 0
        },
        {
        title: "Large",
        addedPricing: 3
        },
      ],
    },
    {
        id: 2,
        title: "Spaghetti",
        desc: "Wonderful pasta covered in a sumptuous red sauce",
        img: "/food/spaghetti.png",
        price: 22.5,
        pricing:[
        {
        title: "Regular",
        addedPricing: 0
        },
        {
        title: "Large",
        addedPricing: 3
        },
      ],
    },
    {
        id: 3,
        title: "Cheese Pizza",
        desc: "Savor the simplicity of the cheese pizza!",
        img: "/food/cheese pizza.png",
        price: 20.5,
        pricing:[
        {
        title: "Regular",
        addedPricing: 0
        },
        {
        title: "Large",
        addedPricing: 3
        },
      ],
    },
    {
        id: 4,
        title: "Pepperoni Pizza",
        desc: "Every slice a pepperoni paradise awaits you!",
        img: "/food/pepperoni pizza.png",
        price: 22.5,
        pricing:[
        {
        title: "Regular",
        addedPricing: 0
        },
        {
        title: "Large",
        addedPricing: 3
        },
      ],
    },

];

type Menu = {
id: number;
categ: string; 
title: string;
desc?: string; 
img?: string;
color: string;
}[];



export const menu: Menu = [
{
    id: 1,
    categ: "Asian",
    title: "Asian Food",
    desc: "Experience the eclectic, delectable food that the region of Asia has to offer",
    img: "/food/asian.png",
    color: "white",
},
{
    id: 2,
    categ: "Burgers",
    title: "Delicious Burgers",
    desc: "Juicy Burgers which are delicious at every bite",
    img: "/food/burger.png",
    color: "white",
},
{
    id: 3,
    categ: "Italian",
    title: "Italian Food",
    desc: "Amazing Italian food that will put a smile on your face",
    img: "/food/italian.png",
    color: "black",
}

]





