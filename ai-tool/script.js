


async function sendToChatGPT() {

    // console.log("before post method");
    // var data = { "fn_index": 0, "data": ["hello"], "event_data": null, "session_hash": "06o54tnkhjk4" }

    // var response;

    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", "http://127.0.0.1:7861/run/predict", JSON.stringify(data), true);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(JSON.stringify({
    //     value: value
    // }));

    // console.log("before post method");
    let value = document.getElementById("word-input").value;
    // let body={


    // }

    console.log("before post method");
    const response = await fetch("http://127.0.0.1:7860/run/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            data: [
                value,
            ]
        })
    });

    console.log("after post method");

    const data = await response.json();
    document.getElementById("reply-check").textContent = data.data[0];
    console.log(data);
    // if(isVali) {
    //     document.getElementById().src = ""
    // }
    //const data = await response.json(document.getElementById("reply-check").textContent);
}


document.getElementById("submit-btn").addEventListener("click",
    function () {
        console.log("dhdhd")
        sendToChatGPT();
    }
);
