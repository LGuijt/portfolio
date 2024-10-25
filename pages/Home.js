import { useState, useEffect } from 'react';

const Home = () => {
    const [talents, setTalents] = useState([]);
    useEffect(() => {
        fetch("https://worthy-whisper-750d814f5c.strapiapp.com/api/talents?populate=*")
            .then((response) => response.json())
            .then((data) => setTalents(data.data));
    }, []);

    const [text, setText] = useState([]);
    useEffect(() => {
        fetch("https://worthy-whisper-750d814f5c.strapiapp.com/api/texts?populate=*")
            .then((response) => response.json())
            .then((data) => setText(data.data));
    }, []);
    console.log(text);
    return (
        <div className="content">
            <p>Lisa Guijt</p>
            <p>Web developer in training</p>
            <p>Currently studying at Grafisch Lyceum Utrecht</p>
            <p>Welcome to my website</p>
            <div>
                <ul>
                    {talents.map((talent) => talent.Active && <li key={talent.id}><img src={talent.Icon.url} alt={talent.Name}></img></li>)}
                </ul>
            </div>
        </div>
    );
};

export default Home;
