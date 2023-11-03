export type dataT ={
    vehicles :itemType[]
}

export type itemType={
    title:string,
        description:string,
        icons: {
          large:string,
          medium:string,
        },
        level:string,
        type :{
          name:string,
            title:string,
          icons: {
            default:string,
          }
        },
        nation: {
          name:string,
          title:string,
          color:string,
          icons :{
            small:string,
            medium:string,
            large:string,
          }
        }
}