import React, { useEffect, useState } from 'react'
import ArtCard from './ArtCard';

const ArticleCard = () => {
    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState(3);

            useEffect(() => {
        fetch("./data/data.json") 
            .then((res) => {
                if (!res.ok) {
                    throw new Error("HTTP error " + res.status);
                }
                return res.json();
            })
            .then((data) => setCards(data))
            .catch((err) => console.error("ডাটা লোড হয়নি:", err));
    }, []);


    const handleMore = () => {
        setVisibleCards((prev) => prev + 3);
    };

    const handleBack = () => {
        setVisibleCards((prev) => Math.max(prev - 3, 3));
    };

    return (
        <div>
            <div className="row artcard">
                {cards.slice(0, visibleCards).map((artcard) => (
                    <div key={artcard.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <ArtCard
                            image={artcard.image}
                            title={artcard.title}
                            body={artcard.body}
                        />     
                    </div>
                ))}
            </div>

            <div className='disc-btn-wrap'>
                {visibleCards > 3 && (
                    <button onClick={handleBack} className="well-btnx">
                        BACK
                    </button>
                )}

                {visibleCards < cards.length && (
                    <button onClick={handleMore} className="well-btnn">
                        Discover All <i className="fa-solid fa-right-long"></i>
                    </button>
                )}
            </div>
        </div>
    )
}

export default ArticleCard;