
const list=[
    {    
        name:"Thor's home",
        title:"IN OUR HEART",
        img:"https://res.cloudinary.com/dsymazj9f/image/upload/v1688120654/poster_v0jpyl.jpg",
        text:"Xin chào mọi người, đây là một gia đình của nhà thỏ yêu thương. Tuy nhỏ nhưng lại đầy ấp tình yêu."
    },
    {   
        
        name:"Nguyễn Hồng Gia Hưng",
        title:"Anh người yêu lãng tử nhất nách dũ trụ",
        img:"https://res.cloudinary.com/dsymazj9f/image/upload/v1688120653/anhiu_e7irdz.jpg",
        text:"Là một người con trai lãn mạn và  còn duyên dáng, luốn yêu thương và chịu đựng những cú đánh tình yêu từ Ngân Khánh, không những thế còn tài giỏi, đẹp trai và phúc hậu."
    },
    {
        
        name:"Nguyễn Hoàng Ngân Khánh",
        position:"Em người yêu dang hồ, đại ka của nhà này",
        img:"https://res.cloudinary.com/dsymazj9f/image/upload/v1688120654/emiu_tu6rox.jpg",
        text:"Xinh đẹp: CÓ, dễ thương: CÓ, bạo lực: CÓ, ăn híp Gia Hưng: CÓOOO... nhưng dù vậy, đây là nóc nhà vĩ đại, một người mà khi bạn nhìn thấy, mọi tiêu cực đều tan biến... bẹt bẹt"
    },
    {
        
        name:"Mít đặc",
        position:"Chủ nợ của khu vực quận 2",
        img:"https://res.cloudinary.com/dsymazj9f/image/upload/v1688120653/mit_yz3xhp.jpg",
        text:"Sỡ hữu với cái tên Mít đặc, nhưng anh lại không đặc đâu ngòi đó. Anh được sinh ra tại Dầu Tiếng nhưng từ nhỏ đã được bôn ba khắp chốn, nhưng với mỗi địa bàn mà anh đã đặt chân đến, mỗi nơi đều khiếp sợ với cái tên của anh. Sỡ hữu dàn thuộc hạ meow meow hùng hậu, anh đã ngôi lên làm vương tại các chốn."
    },
    {
        name:"Sóc đần",
        position:"Bắt sóc bỏ lọ, chị đại của những cơn ngủ",
        img:"https://res.cloudinary.com/dsymazj9f/image/upload/v1688120654/soc_anpwf0.jpg",
        text:"Khi nói đến chữ ' ngủ ' thì không ai đều không biết đến chị Sóc. Sỡ hữu cho  mình một bộ mặt ngu đần, ngủ ngáy, nên lúc nào chị cũng đều trông như rất mệt mỏi, nhưng sự không thiện cảm ấy lại không ảnh hưởng đến mọi người xung quanh, ngược lại khiến cho mọi người đều thích thú"
    },
    {
        name:"Trắng mẹ",
        position:"Bà mẹ đơn thân một con",
        img:"https://res.cloudinary.com/dsymazj9f/image/upload/v1688120657/trang_qtsgoo.jpg",
        text:"vừa đây, chị Trắng đã vượt cạn thành công và hạ sinh ra một nàng tiểu thư ú nu, được xem là người lười biếng nhất nhà vì chị đã không tự chăm con mà đề cho chị vú nuôi Sóc đần chăm giúp. Và đặc biệt là một người háu ăn"
    },
    {
        
        name:"Bông,Sữa,Măng cụt,Gạo,Chen ni phơ,...",
        position:"ERRORRRRR: NAME UNKNOWN",
        img:"https://res.cloudinary.com/dsymazj9f/image/upload/v1688120652/sua_zizvos.jpg",
        text:"Là nàng tiểu thư của chị Trắng, sỡ hữu ngoại hình dễ thương, khiến ai cũng chòi oi dễ thương quá,... và chị là người duy nhất độc quyền sỡ hữu cho mình khối tài sản 8 cái dú"
    },
];
const author = document.getElementById("name");
const position = document.getElementById("position");
const img = document.getElementById("person_img");
const infor = document.getElementById("infor");
const next_btn = document.querySelector(".btn_next");
const pre_btn = document.querySelector(".btn_prev");
const random_btn = document.querySelector(".btn_random");

let currtentnumber = 0;

//show intial person
function show(person){
    const item = list[person]
    img.src = item.img;
    author.textContent = item.name;
    position.textContent = item.title;
    infor.textContent = item.text;
}
//first person appear
window.addEventListener('DOMContentLoaded',function(){
    show(currtentnumber);
})

next_btn.addEventListener('click',()=>{
    currtentnumber++;
    if(currtentnumber > list.length-1){
        currtentnumber = 0;
    };
    show(currtentnumber);

});
pre_btn.addEventListener('click',()=>{
    currtentnumber--;
    if(currtentnumber < 0){
        currtentnumber = list.length - 1;
    };
    show(currtentnumber);
});
random_btn.addEventListener('click',()=>{
    currtentnumber = Math.floor(Math.random() * list.length);
    show(currtentnumber);
    console.log(currtentnumber);
})