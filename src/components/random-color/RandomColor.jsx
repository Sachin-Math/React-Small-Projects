import React, { useEffect, useState } from "react";

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexcolor() {
        const hex = [1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    function handleCreateRandomRGBcolor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    }
    useEffect(() => {
        if (typeOfColor === "rgb") {
            handleCreateRandomRGBcolor()
        } else handleCreateRandomHexcolor()
    }, [typeOfColor])

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                background: color,
            }}
        >
            <button onClick={() => setTypeOfColor("hex")}>Generate Hex Color</button>
            <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
            <button
                onClick={
                    typeOfColor === "hex"
                        ? handleCreateRandomHexcolor
                        : handleCreateRandomRGBcolor
                }
            >
                Generate Random Color
            </button>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "60px",
                marginTop: "50px",
                flexDirection: "column",
                gap: "20px"

            }}>
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}

export default RandomColor;
