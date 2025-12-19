function clipboard() {
    const output = document.getElementById('output');
    output.select();
    output.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(output.value);
    
    alert("Script copied to clipboard!");
}