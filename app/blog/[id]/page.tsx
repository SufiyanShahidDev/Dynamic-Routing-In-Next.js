
"use client";

import { useState } from "react";

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 10.48,
    rating: 2.56,
    stock: 99,
    tags: ["beauty", "mascara"],
  };

  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <p className="mb-6 text-sm text-slate-500">
          Home / Products /{" "}
          <span className="font-medium capitalize text-blue-700">
            {product.category}
          </span>
        </p>

        {/* Product Details */}
        <div className="grid gap-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 md:p-10">
          {/* Product Image */}
          <div className="flex min-h-[350px] items-center justify-center rounded-xl bg-blue-50 p-8">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-blue-100 text-8xl">
              💄
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <span className="mb-3 w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
              {product.category}
            </span>

            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <span className="font-semibold text-slate-800">
                {product.rating}
              </span>
              <span className="text-sm text-slate-500">
                Customer rating
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-bold text-blue-800">
                ${discountedPrice.toFixed(2)}
              </span>

              <span className="text-lg text-slate-400 line-through">
                ${product.price.toFixed(2)}
              </span>

              <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">
                {product.discountPercentage}% OFF
              </span>
            </div>

            {/* Description */}
            <p className="mt-5 leading-7 text-slate-600">
              {product.description}
            </p>

            {/* Stock */}
            <p className="mt-5 text-sm">
              <span className="font-semibold text-slate-800">Availability:</span>{" "}
              <span className="font-medium text-green-600">
                In Stock ({product.stock} available)
              </span>
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Quantity */}
            <div className="mt-7 flex items-center gap-4">
              <span className="font-medium text-slate-700">Quantity</span>

              <div className="flex items-center rounded-lg border border-slate-300">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  className="px-4 py-2 text-lg text-blue-800 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  −
                </button>

                <span className="min-w-10 text-center font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((q) => Math.min(product.stock, q + 1))
                  }
                  disabled={quantity >= product.stock}
                  className="px-4 py-2 text-lg text-blue-800 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() =>
                  alert(`${quantity} item(s) selected for your cart.`)
                }
                className="flex-1 rounded-lg bg-blue-800 px-6 py-3 font-semibold text-white transition hover:bg-blue-900"
              >
                Add to Cart
              </button>

              <button
                onClick={() => alert("Buy Now clicked!")}
                className="flex-1 rounded-lg border border-blue-800 px-6 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
              >
                Buy Now
              </button>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Total: ${(discountedPrice * quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
