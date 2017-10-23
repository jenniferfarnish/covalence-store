declare namespace models {
    interface ICategory {
        id: number;
        name: string;
    }
    interface IProducts {
        id: number;
        categoryid: number;
        title: string;
        description: string;
        price: number;
        imageurl: string;
    }
    interface IPurchases {
        id: number;
        price: number;
        stripetransationid: string;
    }
    interface IPurchasesProducts {
        productid: number;
        purchaseid: number;
    }
}