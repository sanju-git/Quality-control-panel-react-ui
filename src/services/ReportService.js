import { NODE_URL } from "../constants/apiConstants";

export const generateReportAPI = async (filters, reportType) => {
    try {
        filters.partNumber = "46354712";

        const res = await fetch(NODE_URL + "reports/" + reportType, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(filters),
        });

        if (!res.ok) {
            const text = await res.text();
            return { success: false, message: text || "Failed to generate report" };
        }

        // ✅ get the PDF as Blob
        const blob = await res.blob();

        // ✅ ensure content type is PDF
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/pdf")) {
            const text = await blob.text();
            console.error("Not a PDF:", text);
            return { success: false, message: "Server returned non-PDF response" };
        }

        const fileURL = URL.createObjectURL(blob);
        return { success: true, fileURL };

    } catch (error) {
        console.error("Error generating report:", error);
        return { success: false, message: "Error generating report" };
    }
};
