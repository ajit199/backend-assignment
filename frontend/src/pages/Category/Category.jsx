import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Category.css";
import { getData, patchData } from "../../utils/api";

function Category() {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({});
  const [totalCategories, setTotalCategories] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const catsPerPage = 6;
  // const [filterData, setFilterData] = useState([]);
  // Fetch categories and user selections from backend

  function getCategories() {
    getData(
      `category/get-categories?skip=${
        currentPage * catsPerPage
      }&limit=${catsPerPage}`
    )
      .then((data) => {
        setCategories(data?.data);
        setTotalCategories(data?.total);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  function getSelectedCategories() {
    getData(`auth/get-user-categories`)
      .then((data) => {
        setSelectedCategories(data?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  useEffect(() => {
    getCategories();
  }, [currentPage]);

  useEffect(() => {
    getSelectedCategories();
  }, []);

  // Function to save category selections to backend
  const updateUserCategories = (catId) => {
    patchData(`category/update-user-categories`, {
      catId,
    })
      .then((data) => {
        getCategories();
        getSelectedCategories();
      })
      .catch((error) => console.error("err", error));
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="category-container">
      <div className="category">
        <h2>Please mark your interests!</h2>
        <p>We will keep you notified</p>
        <h3>My saved interests!</h3>
        {categories.map((category) => {
          return (
            <div key={category?.id} className="cat-form-group">
              <input
                type="checkbox"
                checked={selectedCategories[category.id] ? true : false}
                onChange={() => updateUserCategories(category.id)}
              />
              <label>{category.name}</label>
            </div>
          );
        })}
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(totalCategories / catsPerPage)}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default Category;
