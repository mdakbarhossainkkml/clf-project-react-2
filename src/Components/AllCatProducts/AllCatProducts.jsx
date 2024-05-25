import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../RelatedProducts/ProductCard";

const AllCatProducts = ({ catProduct }) => {
    // console.log(catProduct);
    const [catProducts, setCatProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${catProduct.slug}`)
            .then(response => {
                setCatProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    }, [catProduct]);

    const categoriesProducts = catProducts.products;
    return (
        <div className="mt-14">
            <h1 className="text-2xl font-bold mb-2">{catProduct.name}</h1>
            <div className="p-4 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categoriesProducts?.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllCatProducts