function downloadScript() {
    const text = document.getElementById('output').value;
    if (!text) return alert("Generate a script first!");

    const blob = new Blob([text], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "main.js";
    a.click();

    URL.revokeObjectURL(url);
}