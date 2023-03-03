import React, { useEffect, useState } from "react";

function Languages(props) {
    const [arrayLanguages, setArrayLanguages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch(`https://api.github.com/repos/JoGabriel-Santos/${props.repository_name}/languages`)
                .then(response => response.json())
                .then(data => {
                    setArrayLanguages(data);
                })
        }

        fetchData();
    })

    return (
        <ul className="tag">
            {arrayLanguages['HTML'] && <li className="tag__item">HTML</li>}
            {arrayLanguages['CSS'] && <li className="tag__item">CSS</li>}
            {arrayLanguages['JavaScript'] && <li className="tag__item">JavaScript</li>}
            {arrayLanguages['Java'] && <li className="tag__item">Java</li>}
            {arrayLanguages['Python'] && <li className="tag__item">Python</li>}
        </ul>
    )
}

export default Languages;