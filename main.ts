  type car = {
    menuFacture:string;
    model:string;
    [Key:string]: any;

  }

  function creatCar (menuFacture:string,model:string,optional:Record<string,any>):car {
    return{
            menuFacture,
            model,
            ...optional
    }
  }
  const myCar: car = creatCar("toyota","corolla",(color:"white",year:"2024"))
  console.log(myCar);
