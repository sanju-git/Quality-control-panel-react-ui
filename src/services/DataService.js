import { NODE_URL } from "../constants/apiConstants";

export const getBlocksData = async () => {
  let res = await fetch(NODE_URL + "get-blocks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  res = await res.json();
  return res;
};

export const getPartsData = async (partNumber) => {
  let res = await fetch(NODE_URL + "get-parts-data/" + partNumber, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  res = await res.json();
  return res;
};
