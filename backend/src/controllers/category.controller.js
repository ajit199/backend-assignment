const asyncHandler = require("../utils/asyncHandler.js");
const ApiError = require("../utils/ApiError.js");
const Category = require("../models/category.model.js");

const getCategories = asyncHandler(async (req, res) => {
  // assign default values to query parameters.
  const { skip = "0", limit = "6" } = req.query;

  // check variables and their types.
  if (skip && limit) {
    const intSkip = parseInt(skip);
    const intLimit = parseInt(limit);

    if (isNaN(intSkip) || isNaN(intLimit)) {
      throw new ApiError(401, "invalid query parameters.");
    }
  }

  // get data from DB.
  const categories = await Category.findAll({
    offset: +skip,
    limit: +limit,
  });

  return res.json({
    data: categories,
  });
});

module.exports = getCategories;
