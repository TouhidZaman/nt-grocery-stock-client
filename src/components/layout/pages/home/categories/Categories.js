import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    //Getting categories
    useEffect(() => {
        const loadItems = async () => {
            let url = `http://localhost:5000/categories`;

            try {
                await axios.get(url).then((response) => {
                    const data = response.data;
                    setCategories(data);
                });
            } catch (error) {
                console.log(error.message);
            }
        };
        loadItems();
    }, []);

    return (
        <section className="bg-gray-800 pt-8 lg:pt-0">
            <div className="w-5/6 md:w-2/3 lg:w-10/12 mx-auto pb-8 lg:py-8">
                <div className="flex flex-col items-center text-center pb-10">
                    <h3 className="text-3xl text-stone-400 mb-3">
                        Inventory Item Categories
                    </h3>
                    <div className="mb-2 border-b w-[120px] border-stone-300 rounded-lg"></div>
                    <p className="text-stone-500">
                        All inventory item categories are showing below
                    </p>
                </div>
                <div className="grid xl:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category._id}
                            className="rounded-lg border shadow-md md:max-w-xl  border-gray-700 bg-gray-800 hover:bg-gray-700"
                        >
                            <div className="flex flex-col justify-between items-center p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-400">
                                    {category.name}
                                </h5>
                                <p className="mb-2 font-normal text-gray-400">
                                    {category.contains}
                                </p>

                                <div className="text-center sm:text-left">
                                    <button className="mt-2 py-2.5 px-10 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-full border focus:z-10 focus:ring-4 focus:ring-blue-800 bg-gray-800 hover:bg-blue-700 text-gray-400 border-gray-600 hover:border-none hover:text-white">
                                        Browse
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-right my-4 lg:my-8">
                    <button
                        onClick={() => navigate("/add-category")}
                        type="button"
                        className="mt-2 text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                    >
                        Add Category
                        <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Categories;
