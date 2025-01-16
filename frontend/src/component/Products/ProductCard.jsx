import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
const ProductCard = ({ product }) => {
 

  return (
    <>
      <Link 
      to={`/product/${product._id}`}
      className="group flex flex-col rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-4 mx-auto max-w-sm"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <img
          src={product?.images[0]?.url}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="mt-4 flex flex-col flex-1">
        <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <Rating
                key={rating}
                className={`h-4 w-4 ${
                  rating < Math.floor(product.ratings)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">
            ({product.numOfReviews} Reviews)
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-baseline">
            {product.offerPrice > 0 && (
              <span className="text-lg font-medium text-green-600 mr-2">
                ₹{product.offerPrice}
              </span>
            )}
            <span className={`text-lg font-medium ${product.offerPrice > 0 ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              ₹{product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
};

export default ProductCard;

      // <Link className="ProductCard" to={`/product/${product._id}`}>
      //   {" "}
      //   <img
      //     src={product?.images[0]?.url}
      //     alt={product.name}
      //     className="ProductImg"
      //   />{" "}
      //   <p className="productName">{product.name}</p>{" "}
      //   <div>
      //     {" "}
      //     <Rating {...options} /> <span>({product.numOfReviews} Reviews)</span>{" "}
      //   </div>{" "}
      //   <div style={{ display: "flex", justifyContent: "space-between" }}>
      //     {" "}
      //     <div className="offerPriceBox">
      //       {" "}
      //       <h1
      //         className="discountPrice"
      //         style={{
      //           paddingLeft: "2.5vmax",
      //           fontSize: ".9vmax",
      //           paddingBottom: "0",
      //         }}
      //       >
      //         {" "}
      //         {product.offerPrice > 0 ? `$${product.offerPrice}` : ""}{" "}
      //       </h1>{" "}
      //       <span className="p__Price">{`$${product.price}`}</span>{" "}
      //     </div>{" "}
      //   </div>{" "}
      // </Link>