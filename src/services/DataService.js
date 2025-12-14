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
      // fromDate: "2025-01-01",
      // toDate: "2025-07-01",
      fromDate,
      toDate,
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

export const uploadLabResults = async (formData) => {
  let res = await fetch(NODE_URL + "upload-lab-results", {
    method: "POST",
    // Do NOT set 'Content-Type' here when sending FormData
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Upload failed: " + res.status);
  }

  res = await res.json();
  return res;
};


export const getCharacteristicsAPI = async (operations) => {
  let res = await fetch(NODE_URL + "get-characteristics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      operations
    }),
  });
  if (!res.ok) {
    throw new Error("Get data failed: " + res.status);
  }
  res = await res.json();
  return res;
}