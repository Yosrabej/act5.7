window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");

    canvas.height = 400;
    canvas.width = window.innerWidth - 60;

    let draw_color = "black";
    let draw_width = 2;
    let painting = false;
    //window.change_color = change_color;
    (function () {
        function change_color(element) {
            draw_color = element.style.background;
            console.log(style.background);
        }
        document
            .getElementById("chg")
            .addEventListener("click", change_color, true);
    })();
    function startPosition(e) {
        painting = true;

        draw(e);
    }
    function finishedPosition() {
        painting = false;
        context.beginPath();
    }
    function draw(e) {
        if (!painting) return;
        context.lineWidth = 10;
        context.lineCap = "round";
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseout", finishedPosition);
});
