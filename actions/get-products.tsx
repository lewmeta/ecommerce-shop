import { Product } from "@/types";
import qs from "query-string";
import axios from "axios";

const URL = "https://nowmart-admin.vercel.app/api/09f8f239-bde2-4ae0-ac19-26fd18f5a311/products";

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        },
    });

    const res = await fetch(url);

    return res.json();
}

export default getProducts;
