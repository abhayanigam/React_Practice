import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Texted Clear", "danger");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const copyToClipBoard = () => {
    // Get the text field
    var copyText = document.getElementById("myBox");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
    props.showAlert("Text Copied !", "success");
  };

  const [text, setText] = useState("Enter text here");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }} //first curly brace is for js and second one is for object
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="4"
          ></textarea>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button" onClick={handleUpClick}>
            Convert To Uppercase
          </button>
          <button
            class="btn btn-primary"
            type="button"
            onClick={handleLowClick}
          >
            Convert To Lowercase
          </button>
          <button
            class="btn btn-primary"
            type="button"
            onClick={copyToClipBoard}
          >
            Copy To Clipboard
          </button>
          <button
            class="btn btn-primary"
            type="button"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length === 1 ? 0 : text.split(" ").length} words and{" "}
          {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something In The TextBox Above To Preview it Here"}
        </p>
      </div>
    </>
  );
}
