function selectDevice()
{
    arr1 = 'Dell~Samsung~Hp~Lenovo~Acer~Apple~Asus~MSI';
    laptop = arr1.split('~').join(" <br> ");
    arr2 = 'Samsung~Sony~LG~Lenovo~MI~OnePlus';
    television = arr2.split('~').join(" <br> ");
    arr3 = 'OnePlus~Redmi~Motorola~Sony~Vivo~Samsung~Realme~Oppo~iPhone';
    mobile = arr3.split('~').join(" <br> ");

    var sel = document.getElementById("mydevice");
    
    if(sel.value == 'Laptop')
    {
        document.getElementById("mydiv").innerHTML=laptop;
    }
    else if(sel.value == 'TV')
    {
        document.getElementById("mydiv").innerHTML=television;
    }
    else if(sel.value == 'Mobile')
    {
        document.getElementById("mydiv").innerHTML=mobile;
    }
    else
        document.getElementById("mydiv").innerHTML="";
}