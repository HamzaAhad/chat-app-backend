const db = require("../../models/index");

module.exports.get = async (request, response) => {
  try {
    const {
      params: { slug },
      query: { id },
    } = request;

    const data = response.status(200).json(res);
  } catch {
    response.status(500).json("Some Error Occured");
  }
};
