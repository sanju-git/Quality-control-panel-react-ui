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

export const getQCData = async (fromDate, toDate) => {
  let res = await fetch(NODE_URL + "get-qc-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fromDate: "2025-01-01",
      toDate: "2025-07-01",
      partNumber: "46354712",
    }),
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
