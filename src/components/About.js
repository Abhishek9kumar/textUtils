import React from "react";

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#434b53',
        backgroundColor: props.mode === 'dark' ? '#434b53' : 'white',
    }

    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <strong>🔠Convert Text to Uppercase / Lowercase</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            Easily transform your text into <strong>uppercase or lowercase</strong> with a single click. This feature is especially useful for formatting titles, standardizing case usage, or quickly correcting text content without manual editing.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            <strong>🧹Remove Extra Spaces</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            Automatically eliminates unnecessary spaces from your text — whether they appear between words or at the beginning or end. This feature helps clean up messy input and ensures consistent, readable formatting.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            <strong>🔢Count Words and Characters</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            Instantly displays the total number of words and characters in your text. This feature is perfect for writers, students, and professionals who need to meet specific content length requirements.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                        >
                            <strong>⌛Estimate Reading Time</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            Provides an approximate reading time based on the length of your text. This helps users understand how long it will take to read their content, making it especially useful for bloggers, editors, and content creators aiming for better user engagement.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
